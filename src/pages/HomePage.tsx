import { useState, useEffect } from "react";
import { StoryblokComponent, useStoryblok } from "@storyblok/react";

function HomePage() {
  const [version, setVersion] = useState<"draft" | "published">("published");

  useEffect(() => {
    let queryVersion = new URLSearchParams(window.location.search).get("version") as "draft" | "published" | null;

    if (window.location.search.includes("_storyblok")) {
      queryVersion = "draft";
    }

    if (queryVersion === "draft" || queryVersion === "published") {
      setVersion(queryVersion);
    }
  }, []);

  const story = useStoryblok("tour", { version });
  console.log("fetching version:", version);

  if (!story) return <div>Loading...</div>;
  if (!story.content) return <div></div>;

  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export default HomePage;
