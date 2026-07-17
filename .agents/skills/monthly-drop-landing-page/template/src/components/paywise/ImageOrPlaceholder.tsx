import { cn } from "@/lib/utils";
import { downloadImage } from "@/lib/download";
import { Download } from "lucide-react";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  aspect?: "square" | "portrait" | "landscape" | "post";
  label?: string;
  downloadFilename?: string;
};

const aspectClass = {
  square: "aspect-square",
  portrait: "aspect-[9/16]",
  landscape: "aspect-[16/9]",
  post: "aspect-[4/5]",
};

export function ImageOrPlaceholder({
  src,
  alt,
  className,
  aspect = "square",
  label,
  downloadFilename,
}: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-md bg-muted group",
        aspectClass[aspect],
        className,
      )}
    >
      {src ? (
        <>
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          {downloadFilename && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                downloadImage(src, downloadFilename);
              }}
              className="absolute top-1 right-1 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
              aria-label={`Download ${alt}`}
            >
              <Download className="h-3.5 w-3.5" />
            </button>
          )}
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs font-medium text-muted-foreground">
          {label ?? "Upload pending"}
        </div>
      )}
    </div>
  );
}
