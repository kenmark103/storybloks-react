import { renderRichText, storyblokEditable } from "@storyblok/react";
import type { BlokType } from "../types/types";


interface ContentProps {
  blok: BlokType;
}



export default function Top({ blok }: ContentProps) {
  return (
    <section {...storyblokEditable(blok)} className="my-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">{blok.title}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
        <img
          src={blok.image}
          alt={blok.title}
          className="rounded-lg shadow w-full h-auto object-cover"
          loading="lazy"
        />
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: renderRichText(blok.content) || "" }} />
      </div>

      <div
        className="prose prose-lg max-w-4xl mx-auto mt-12"
        dangerouslySetInnerHTML={{ __html: renderRichText(blok.content_1) || "" }}
      />
    </section>
  );
}
