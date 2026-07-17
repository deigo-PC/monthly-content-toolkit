import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, Download } from "lucide-react";
import { downloadImage } from "@/lib/download";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ImageOrPlaceholder } from "@/components/paywise/ImageOrPlaceholder";
import { Lightbox } from "@/components/paywise/Lightbox";
import { carousels, blogs, newsletters, meta } from "@/lib/paywise-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PayWise — Content Preview" },
      {
        name: "description",
        content:
          "Monthly content drop preview for PayWise: Instagram grid, carousels, blog posts and newsletters.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#grid", label: "Grid" },
  { href: "#carousels", label: "Carousels" },
  { href: "#blogs", label: "Blogs" },
  { href: "#newsletters", label: "Newsletters" },
];

function Index() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    aspect: "square" | "portrait" | "landscape" | "post";
    downloadFilename?: string;
  } | null>(null);
  const [copiedEmailId, setCopiedEmailId] = useState<number | null>(null);

  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">
      {/* Sticky nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold tracking-tight">{meta.client}</span>
            <span className="text-sm text-muted-foreground">/ {meta.period}</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Content Preview</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          {meta.client} — Monthly Drop
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          A quick walk-through of everything going out this month: the Instagram grid as it will
          look at month-end, the 7 carousels, 5 blog posts and 4 newsletters — each with its
          companion story.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a
              href="https://docs.google.com/document/d/100xp3AM4VONf4Gdf5EKyArRbnleqgmEjYSHgJ0u1LgE/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Content Plan
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://paywisehub.coordenadas.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Marketing Hub
            </a>
          </Button>
        </div>
      </section>

      {/* Grid snapshot — auto-generated from carousel covers */}
      <Section
        id="grid"
        title="Instagram Grid Preview"
        subtitle="How the feed will look at end of month — first slide of each carousel."
      >
        <div className="mx-auto grid max-w-md grid-cols-3 gap-0.5 sm:gap-1">
          {carousels.map((c) => {
            const cover = c.slides[0];
            return (
              <button
                key={c.id}
                type="button"
                onClick={() =>
                  cover &&
                  setLightbox({
                    src: cover,
                    alt: c.title,
                    aspect: "post",
                    downloadFilename: `paywise-carousel-${c.id}-slide-1.png`,
                  })
                }
                className="group relative block"
              >
                <ImageOrPlaceholder
                  src={cover}
                  alt={c.title}
                  aspect="post"
                  label={`C${c.id}`}
                  downloadFilename={`paywise-carousel-${c.id}-slide-1.png`}
                />
              </button>
            );
          })}
        </div>
      </Section>

      {/* Carousels */}
      <Section
        id="carousels"
        title="Carousels"
        subtitle="7 carousels for Instagram, Facebook and LinkedIn."
      >
        <div className="space-y-16">
          {carousels.map((c) => (
            <article key={c.id}>
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Carousel {c.id}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight">{c.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground">
                  {c.slides.length} {c.slides.length === 1 ? "slide" : "slides"}
                </span>
              </div>

              {c.slides.length > 0 ? (
                <Carousel opts={{ align: "start" }} className="w-full">
                  <CarouselContent>
                    {c.slides.map((s, i) => (
                      <CarouselItem key={i} className="basis-[70%] sm:basis-1/3 md:basis-1/4">
                        <button
                          type="button"
                          onClick={() =>
                            setLightbox({
                              src: s,
                              alt: `${c.title} slide ${i + 1}`,
                              aspect: "post",
                              downloadFilename: `paywise-carousel-${c.id}-slide-${i + 1}.png`,
                            })
                          }
                          className="block w-full"
                        >
                          <ImageOrPlaceholder
                            src={s}
                            alt={`${c.title} slide ${i + 1}`}
                            aspect="post"
                            downloadFilename={`paywise-carousel-${c.id}-slide-${i + 1}.png`}
                          />
                        </button>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <ImageOrPlaceholder
                      key={i}
                      alt="slide placeholder"
                      aspect="post"
                      label="Upload pending"
                    />
                  ))}
                </div>
              )}

              {c.caption && (
                <p className="mt-4 max-w-3xl whitespace-pre-line text-sm text-muted-foreground">
                  {c.caption}
                </p>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* Blogs */}
      <Section
        id="blogs"
        title="Blog Posts"
        subtitle="Posted on the website and LinkedIn. Each post has a 9:16 story to share on social."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((b) => (
            <article key={b.id} className="rounded-xl border border-border bg-card p-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <ImageOrPlaceholder
                    src={b.banner}
                    alt={b.title}
                    aspect="landscape"
                    downloadFilename={`paywise-blog-${b.id}-banner.png`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    b.story &&
                    setLightbox({
                      src: b.story,
                      alt: `${b.title} story`,
                      aspect: "portrait",
                      downloadFilename: `paywise-blog-${b.id}-story.png`,
                    })
                  }
                  className="block w-20 shrink-0"
                  aria-label={`Open ${b.title} story`}
                >
                  <ImageOrPlaceholder
                    src={b.story}
                    alt={`${b.title} story`}
                    aspect="portrait"
                    label="Story"
                    downloadFilename={`paywise-blog-${b.id}-story.png`}
                  />
                </button>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Blog {b.id}
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">{b.title}</h3>
                {b.preview && (
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{b.preview}</p>
                )}
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <a href={b.docUrl} target="_blank" rel="noreferrer">
                    Read full post <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Newsletters */}
      <Section
        id="newsletters"
        title="Newsletters"
        subtitle="4 newsletters going out this month. Preview the email copy below each banner."
      >
        <div className="grid gap-10 md:grid-cols-2">
          {newsletters.map((n) => (
            <article key={n.id} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Email {n.id}
              </p>
              <h3 className="mt-1 mb-3 text-lg font-semibold tracking-tight">{n.title}</h3>

              {/* Banner image */}
              <button
                type="button"
                onClick={() =>
                  n.banner &&
                  setLightbox({
                    src: n.banner,
                    alt: n.title,
                    aspect: "landscape",
                    downloadFilename: `paywise-newsletter-${n.id}-banner.png`,
                  })
                }
                className="group relative block w-full overflow-hidden rounded-xl border border-border bg-card"
                aria-label={`Open ${n.title} preview`}
              >
                {n.banner ? (
                  <>
                    <img
                      src={n.banner}
                      alt={n.title}
                      className="block w-full h-auto"
                      loading="lazy"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        downloadImage(n.banner, `paywise-newsletter-${n.id}-banner.png`);
                      }}
                      className="absolute top-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
                      aria-label={`Download ${n.title}`}
                    >
                      <Download className="h-3.5 w-3.5" />
                    </button>
                  </>
                ) : (
                  <ImageOrPlaceholder src={n.banner} alt={n.title} aspect="landscape" />
                )}
              </button>

              {/* Email body preview */}
              {n.body && (
                <div className="mt-4 rounded-xl border border-border bg-muted/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-muted-foreground">Email preview</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(n.body);
                        setCopiedEmailId(n.id);
                        setTimeout(() => setCopiedEmailId(null), 2000);
                      }}
                      className="flex items-center gap-1 text-xs text-muted-foreground transition hover:text-foreground"
                    >
                      {copiedEmailId === n.id ? "Copied!" : "Copy to clipboard"}
                    </button>
                  </div>
                  <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">
                    {n.body}
                  </div>
                </div>
              )}

              {/* CTA button */}
              {n.ctaUrl && (
                <Button asChild className="mt-3 w-full">
                  <a href={n.ctaUrl} target="_blank" rel="noopener noreferrer">
                    {n.ctaText} <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}

              {/* Instagram Story */}
              {n.story && (
                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">Instagram Story</p>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: n.story,
                        alt: `${n.title} story`,
                        aspect: "portrait",
                        downloadFilename: `paywise-newsletter-${n.id}-story.png`,
                      })
                    }
                    className="w-16 shrink-0"
                    aria-label={`Open ${n.title} story`}
                  >
                    <ImageOrPlaceholder
                      src={n.story}
                      alt={`${n.title} story`}
                      aspect="portrait"
                      label="Story"
                      downloadFilename={`paywise-newsletter-${n.id}-story.png`}
                    />
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
        Prepared for {meta.client}.
      </footer>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        aspect={lightbox?.aspect ?? "square"}
        downloadFilename={lightbox?.downloadFilename}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          {subtitle && <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
