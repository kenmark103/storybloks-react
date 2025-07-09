import { storyblokEditable } from "@storyblok/react";

interface ImageGridProps {
  blok: any;
}

export default function ImageGrid({ blok }: ImageGridProps) {
  return (
    <section {...storyblokEditable(blok)} className="grid grid-cols-2 gap-4">
      {blok.image_array?.map((image: any) => (
        <div key={image.id}>
          <img
            src={image.filename}
            alt={image.alt || "image"}
            className="w-full h-auto rounded shadow"
          />
        </div>
      ))}
    </section>
  );
}
