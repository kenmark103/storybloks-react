import { useState } from "react";
import { StoryblokComponent, useStoryblok } from "@storyblok/react";

function HomePage() {

  const initialVersion =
    window.location.search.includes("_storyblok")
      ? "draft"
      : (new URLSearchParams(window.location.search).get("version") as
          | "draft"
          | "published") ?? "published";

  const [version] = useState<"draft" | "published">(initialVersion);

  const story = useStoryblok("tour", { version });

  console.log("fetching version:", version);

  if (!story) return <div>Loading...</div>;
  if (!story.content) return <div></div>;

  return <StoryblokComponent blok={story.content} />;
}

export default HomePage;
