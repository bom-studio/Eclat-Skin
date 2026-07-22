"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INSTAGRAM_POSTS, STUDIO_INFO } from "@/lib/data";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { IconInstagram } from "@/components/ui/Icons";

const collageClass = [
  "col-span-7 row-span-2",
  "col-span-5 row-span-1",
  "col-span-3 row-span-1",
  "col-span-2 row-span-1",
] as const;

export function InstagramGallery() {
  return (
    <section
      id="instagram"
      className="section-pad section-warm section-divider"
      aria-labelledby="instagram-title"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] gap-14 lg:gap-16 xl:gap-20 items-center">
          {/* Left — brand voice */}
          <FadeUp>
            <div className="max-w-[380px]">
              <div className="flex items-center gap-3.5 mb-8">
                <span className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-primary">
                  <IconInstagram size={20} />
                </span>
                <p className="text-[13px] tracking-[0.22em] uppercase text-primary">
                  Instagram
                </p>
              </div>

              <h2
                id="instagram-title"
                className="font-display text-[36px] md:text-[42px] leading-[1.15] tracking-[-0.03em] text-text mb-4"
              >
                {STUDIO_INFO.instagramHandle}
              </h2>

              <p className="text-[16px] md:text-[17px] text-subtext leading-[1.95] mb-10">
                에끌라의 일상과
                <br />
                케어 순간을 만나보세요.
              </p>

              <Button
                href={STUDIO_INFO.instagramHref}
                variant="outline"
                icon={<IconInstagram size={18} />}
                ariaLabel="인스타그램 팔로우"
              >
                Follow
              </Button>
            </div>
          </FadeUp>

          {/* Right — asymmetric visual collage */}
          <FadeUp delay={0.1}>
            <ul
              className="grid grid-cols-12 grid-rows-2 gap-3 md:gap-4 h-[420px] md:h-[480px] lg:h-[520px]"
              aria-label="인스타그램 갤러리"
            >
              {INSTAGRAM_POSTS.map((post, index) => (
                <li
                  key={post.id}
                  className={`min-h-0 ${collageClass[index] ?? "col-span-3"}`}
                >
                  <a
                    href={STUDIO_INFO.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block h-full w-full overflow-hidden rounded-[22px] md:rounded-[26px]"
                    aria-label={post.alt}
                  >
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.035 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 1024px) 60vw, 35vw"
                        className="object-cover img-tone transition-opacity duration-500 group-hover:opacity-90"
                      />
                    </motion.div>
                  </a>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
