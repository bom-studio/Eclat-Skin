import json
from pathlib import Path

path = Path(r"C:\Users\bomi\.cursor\projects\c-Users-bomi-OneDrive-web-site-CLAT-SKIN\agent-transcripts\8e9e8788-a31a-4690-b775-851324df7bb8\8e9e8788-a31a-4690-b775-851324df7bb8.jsonl")
out_dir = Path(r"C:\Users\bomi\OneDrive\바탕 화면\web-site\ÉCLAT SKIN\_recovered")
out_dir.mkdir(exist_ok=True)

# Reconstruct data.ts by applying Write then all StrReplace in order
data_content = None
data_ops = []

with path.open("r", encoding="utf-8") as f:
    for i, line in enumerate(f, 1):
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            continue
        content = obj.get("message", {}).get("content", [])
        if not isinstance(content, list):
            continue
        for c in content:
            if c.get("type") != "tool_use":
                continue
            name = c.get("name")
            inp = c.get("input", {})
            p = inp.get("path", "")
            if "data.ts" not in p:
                continue
            if name == "Write" and "contents" in inp:
                data_content = inp["contents"]
                data_ops.append(("write", i))
                print(f"LINE {i}: Write data.ts")
            elif name == "StrReplace":
                old = inp.get("old_string", "")
                new = inp.get("new_string", "")
                data_ops.append(("replace", i, old, new))
                print(f"LINE {i}: StrReplace data.ts old_len={len(old)} new_len={len(new)}")

if data_content is None:
    raise SystemExit("no data write found")

# Find the Write at line 31 and apply subsequent replaces
# Reset: get Write at 31 specifically
with path.open("r", encoding="utf-8") as f:
    for i, line in enumerate(f, 1):
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            continue
        content = obj.get("message", {}).get("content", [])
        if not isinstance(content, list):
            continue
        for c in content:
            if c.get("type") == "tool_use" and c.get("name") == "Write":
                inp = c.get("input", {})
                if "data.ts" in inp.get("path", "") and i == 31:
                    data_content = inp["contents"]

applied = 0
failed = 0
for op in data_ops:
    if op[0] != "replace":
        continue
    _, i, old, new = op
    if i < 31:
        continue
    if old in data_content:
        data_content = data_content.replace(old, new, 1)
        applied += 1
        print(f"applied replace line {i}")
    else:
        failed += 1
        print(f"FAILED replace line {i}: old starts with {old[:80]!r}")

out = out_dir / "reconstructed_data.ts"
out.write_text(data_content, encoding="utf-8")
print(f"saved reconstructed_data.ts applied={applied} failed={failed} len={len(data_content)}")

# Also dump all Writes for remaining components
want = [
    "Header.tsx", "Footer.tsx", "Treatments.tsx", "BestProgram.tsx",
    "BookingCTA.tsx", "MobileBookingBar.tsx", "Differences.tsx",
    "EventBanner.tsx", "layout.tsx",
]
latest = {}
with path.open("r", encoding="utf-8") as f:
    for i, line in enumerate(f, 1):
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            continue
        content = obj.get("message", {}).get("content", [])
        if not isinstance(content, list):
            continue
        for c in content:
            if c.get("type") != "tool_use" or c.get("name") != "Write":
                continue
            inp = c.get("input", {})
            p = inp.get("path", "")
            for w in want:
                if p.endswith(w):
                    latest[w] = (i, inp["contents"])
                    print(f"LINE {i}: Write {w}")

for key, (line_no, contents) in latest.items():
    dest = out_dir / f"L{line_no}_{key}"
    dest.write_text(contents, encoding="utf-8")
    print(f"saved {dest.name}")
