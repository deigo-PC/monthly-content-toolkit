import { Dialog, DialogContent } from "@/components/ui/dialog";
import { downloadImage } from "@/lib/download";
import { Download } from "lucide-react";

type Props = {
  src: string | null;
  alt: string;
  onClose: () => void;
  aspect?: "square" | "portrait" | "landscape" | "post";
  downloadFilename?: string;
};

const aspectClass = {
  square: "aspect-square",
  portrait: "aspect-[9/16]",
  landscape: "aspect-[16/9]",
  post: "aspect-[4/5]",
};

export function Lightbox({ src, alt, onClose, aspect = "square", downloadFilename }: Props) {
  return (
    <Dialog open={!!src} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
        {src && (
          <div
            className={`relative mx-auto w-full max-h-[85vh] overflow-hidden rounded-lg bg-black ${aspect === "portrait" ? "max-w-sm" : aspect === "post" ? "max-w-md" : ""}`}
          >
            <div className={aspectClass[aspect]}>
              <img src={src} alt={alt} className="h-full w-full object-contain" />
            </div>
            {downloadFilename && (
              <button
                type="button"
                onClick={() => downloadImage(src, downloadFilename)}
                className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
                aria-label={`Download ${alt}`}
              >
                <Download className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
