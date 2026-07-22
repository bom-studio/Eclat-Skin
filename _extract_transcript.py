import json
from pathlib import Path

path = Path(r"C:\Users\bomi\.cursor\projects\c-Users-bomi-OneDrive-web-site-CLAT-SKIN\agent-transcripts\8e9e8788-a31a-4690-b775-851324df7bb8\8e9e8788-a31a-4690-b775-851324df7bb8.jsonl")
out_dir = Path(r"C:\Users\bomi\OneDrive\바탕 화면\web-site\ÉCLAT SKIN\_recovered")
out_dir.mkdir(exist_ok=True)

targets = (
    "data.ts",
    "Hero.tsx",
    "Header.tsx",
    "Pricing.tsx",
    "layout.tsx",
    "Footer.tsx",
    "BeforeAfter.tsx",
    "Treatments.tsx",
    "SocialProof.tsx",
    "InstagramGallery.tsx",
    "Location.tsx",
    "BestProgram.tsx",
    "BookingCTA.tsx",
    "MobileBookingBar.tsx",
    "Differences.tsx",
    "Director.tsx",
    "EventBanner.tsx",
    "FAQ.tsx",
    "Reviews.tsx",
)

latest: dict[str, tuple[int, str]] = {}

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
            if not any(t in p for t in targets):
                continue
            key = Path(p).name
            if name == "Write" and "contents" in inp:
                latest[key] = (i, inp["contents"])
                print(f"LINE {i}: Write {key} len={len(inp['contents'])}")
            elif name == "StrReplace" and key == "data.ts":
                print(f"LINE {i}: StrReplace data.ts keys={list(inp.keys())}")

for key, (line_no, contents) in latest.items():
    dest = out_dir / f"L{line_no}_{key}"
    dest.write_text(contents, encoding="utf-8")
    print(f"saved {dest.name}")
