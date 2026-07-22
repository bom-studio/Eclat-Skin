import json
from pathlib import Path

path = Path(r"C:\Users\bomi\.cursor\projects\c-Users-bomi-OneDrive-web-site-CLAT-SKIN\agent-transcripts\8e9e8788-a31a-4690-b775-851324df7bb8\8e9e8788-a31a-4690-b775-851324df7bb8.jsonl")
out_dir = Path(r"C:\Users\bomi\OneDrive\바탕 화면\web-site\ÉCLAT SKIN\_recovered")

want = [
    "Header.tsx", "Footer.tsx", "Treatments.tsx", "BestProgram.tsx",
    "BookingCTA.tsx", "MobileBookingBar.tsx", "Differences.tsx",
    "EventBanner.tsx", "layout.tsx", "BeforeAfter.tsx", "Reviews.tsx",
    "Director.tsx", "FAQ.tsx", "Location.tsx", "InstagramGallery.tsx",
    "SocialProof.tsx",
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
            t = c.get("type")
            if t == "tool_use":
                name = c.get("name")
                inp = c.get("input", {})
                p = inp.get("path", "")
                for w in want:
                    if p.replace("\\", "/").endswith(w):
                        if name == "Write" and "contents" in inp:
                            latest[w] = (i, "write", inp["contents"])
                            print(f"L{i} Write {w}")
                        elif name == "StrReplace":
                            print(f"L{i} StrReplace {w}")
            # also check assistant text for encoding corruption time

print("--- latest writes ---")
for key, (line_no, kind, contents) in sorted(latest.items(), key=lambda x: x[1][0]):
    dest = out_dir / f"LATEST_{key}"
    dest.write_text(contents, encoding="utf-8")
    print(f"saved {dest.name} from L{line_no} len={len(contents)}")
