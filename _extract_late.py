import json
from pathlib import Path

path = Path(r"C:\Users\bomi\.cursor\projects\c-Users-bomi-OneDrive-web-site-CLAT-SKIN\agent-transcripts\8e9e8788-a31a-4690-b775-851324df7bb8\8e9e8788-a31a-4690-b775-851324df7bb8.jsonl")
out_dir = Path(r"C:\Users\bomi\OneDrive\바탕 화면\web-site\ÉCLAT SKIN\_recovered")

# Extract StrReplace new_string for PROGRAMS from line 68
with path.open("r", encoding="utf-8") as f:
    for i, line in enumerate(f, 1):
        if i not in (55, 68, 72, 73, 74, 75, 76, 77, 78, 79, 80):
            continue
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            continue
        content = obj.get("message", {}).get("content", [])
        if not isinstance(content, list):
            continue
        role = obj.get("role")
        print(f"=== LINE {i} role={role} ===")
        for c in content:
            if c.get("type") == "text":
                print("TEXT:", c.get("text", "")[:200])
            if c.get("type") == "tool_use":
                name = c.get("name")
                inp = c.get("input", {})
                p = inp.get("path", "")
                print(f"TOOL {name} path={Path(p).name if p else ''}")
                if name == "Write" and "contents" in inp:
                    key = Path(p).name
                    dest = out_dir / f"L{i}_{key}"
                    dest.write_text(inp["contents"], encoding="utf-8")
                    print(f"saved {dest.name} len={len(inp['contents'])}")
                if name == "StrReplace" and "new_string" in inp:
                    dest = out_dir / f"L{i}_replace_{Path(p).name}.txt"
                    dest.write_text(inp["new_string"], encoding="utf-8")
                    print(f"saved replace {dest.name} len={len(inp['new_string'])}")
                    # also show if PROGRAMS
                    if "PROGRAMS" in inp["new_string"] or "PRICING" in inp["new_string"] or "NAV_LINKS" in inp["new_string"]:
                        print(inp["new_string"][:500])
