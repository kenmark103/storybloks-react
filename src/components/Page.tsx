import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { BlokType } from "../types/types";


interface ContentProps {
  blok: BlokType;
}

export default function Page({ blok }:  ContentProps) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok:  BlokType) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
