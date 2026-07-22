"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INSTAGRAM_POSTS, STUDIO_INFO } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { IconInstagram } from "@/components/ui/Icons";

export function InstagramGallery() {
  return (
    <section
      id="instagram"
      className="section-pad section-warm section-divider"
      aria-labelledby="instagram-title"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="INSTAGRAM"
          title="에끌라의 일상"
          description="스튜디오의 분위기와 케어 모먼트를 만나보세요."
          align="center"
          action={
            <Button
              href={STUDIO_INFO.instagramHref}
              variant="outline"
              icon={<IconInstagram size={18} />}
              ariaLabel="인스타그램 팔로우"
            >
              Follow @eclat.skin
            </Button>
          }
        />

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {INSTAGRAM_POSTS.map((post, index) => (
            <FadeUp key={post.id} delay={index * 0.06} as="li">
              <a
                href={STUDIO_INFO.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square rounded-[24px] md:rounded-[28px] overflow-hidden border border-border"
                aria-label={post.alt}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover img-tone"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-[rgba(43,43,43,0.28)] opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col items-center justify-center gap-3">
                  <IconInstagram size={28} className="text-white" />
                  <span className="text-[13px] tracking-[0.16em] uppercase text-white">
                    Follow
                  </span>
                </div>
              </a>
            </FadeUp>
          ))}
        </ul>

        <h2 id="instagram-title" className="sr-only">
          인스타그램 갤러리
        </h2>
      </div>
    </section>
  );
}
