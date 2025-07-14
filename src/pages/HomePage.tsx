import { useState, useEffect } from "react";
import { StoryblokComponent, useStoryblok } from "@storyblok/react";

function HomePage() {
  const [version, setVersion] = useState<"draft" | "published">("published");

  useEffect(() => {
    const queryVersion = new URLSearchParams(window.location.search).get("version");
    if (queryVersion === "draft" || queryVersion === "published") {
      setVersion(queryVersion);
    }
  }, []);

  const story = useStoryblok("tour", { version, bridge: true });

  if (!story) return <div>Loading...</div>;
  if (!story.content) return <div></div>;

  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export default HomePage;
