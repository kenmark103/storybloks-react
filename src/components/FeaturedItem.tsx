import { Link } from "react-router-dom";
import { storyblokEditable, renderRichText } from "@storyblok/react";

export default function FeaturedItem({ blok }) {
  return (
    <Link
      to={`/${blok.link.cached_url}`}
      {...storyblokEditable(blok)}
      className="block group border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition bg-white"
    >
      <img
        src={blok.image}
        alt={blok.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
      />
      <div className="p-4 text-center">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500">
          {blok.title}
        </h3>
        <div
          className="text-sm text-gray-700"
          dangerouslySetInnerHTML={{
            __html: renderRichText(blok.description),
          }}
        />
      </div>
    </Link>
  );
}
