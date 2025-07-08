import { storyblokEditable } from "@storyblok/react";
import { renderRichText } from "@storyblok/react";
import type { BlokType } from "../types/types";


interface ContentProps {
  blok: BlokType;
}


export default function PostsGrid({ blok }: ContentProps) {
  return (
    <div {...storyblokEditable(blok)} className="bg-white rounded-lg shadow overflow-hidden">
      <img
        src={blok.image}
        alt={blok.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 prose prose-sm">
        <div dangerouslySetInnerHTML={{ __html: renderRichText(blok.content) || "" }} />
      </div>
    </div>
  );
}
