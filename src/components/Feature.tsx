import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { BlokType } from "../types/types";


interface ContentProps {
  blok: BlokType;
}

export default function Feature({ blok }: ContentProps ) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 px-4 bg-[#f5f1e9]">
      <h3 className="text-3xl font-bold text-center mb-10">{blok.title}</h3>
      <div className="bg-[#f5f1e9] p-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {blok.item1.map((item: BlokType) => (
            <StoryblokComponent blok={item} key={item._uid} />
          ))}
          {blok.item2.map((item: BlokType) => (
            <StoryblokComponent blok={item} key={item._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
