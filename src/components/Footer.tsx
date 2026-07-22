import { FOOTER_LINKS, STUDIO_INFO } from "@/lib/data";
import {
  StarLogo,
  IconInstagram,
  IconBlog,
} from "@/components/ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-main pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <div className="flex items-center justify-center gap-3 mb-10">
            <StarLogo size={28} className="text-white" />
            <span className="font-display text-[24px] md:text-[28px] tracking-[0.2em]">
              {"\u00C9"}CLAT SKIN
            </span>
          </div>
          <p className="font-display text-[28px] md:text-[40px] leading-[1.35] tracking-[-0.03em] text-white/95 mb-12">
            Quiet care.
            <br />
            Lasting radiance.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href={STUDIO_INFO.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
            >
              <IconInstagram size={18} />
            </a>
            <a
              href={STUDIO_INFO.blogHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
            >
              <IconBlog size={18} />
            </a>
          </div>
          <a
            href="#reservation"
            className="inline-flex items-center justify-center h-[48px] px-9 rounded-full bg-white text-primary text-[14px] font-medium tracking-[0.08em] hover:bg-primary-light transition-colors duration-300"
          >
            {"\uC628\uB77C\uC778 \uC608\uC57D"}
          </a>
        </div>

        <nav
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-16 text-[13px] tracking-[0.12em] text-white/75"
          aria-label="footer"
        >
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-white/55 tracking-wide">
          <p>
            {STUDIO_INFO.business.company} · {STUDIO_INFO.business.owner} ·{" "}
            {STUDIO_INFO.business.registration}
          </p>
          <p>© {year} {"\u00C9"}CLAT SKIN STUDIO</p>
        </div>
      </div>
    </footer>
  );
}
