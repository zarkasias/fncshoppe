import type { InteriorImage } from "@/shared/types";

type ProductInteriorGalleryProps = {
  images: InteriorImage[];
  title?: string;
};

export default function ProductInteriorGallery({
  images,
  title = "Inside the journal",
}: ProductInteriorGalleryProps) {
  if (!images.length) return null;

  return (
    <section className="mt-16 border-t border-gray-100 pt-10">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{title}</p>
      <p className="mt-1 text-sm text-gray-500">Preview pages from this edition.</p>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <li
            key={`${image.src}-${index}`}
            className="overflow-hidden rounded-xl bg-[#F1F5F9] shadow-sm"
          >
            <div className="aspect-[3/4]">
              <img
                src={image.src}
                alt={image.alt ?? `Interior page ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
