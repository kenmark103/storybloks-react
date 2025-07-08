import { useState, useEffect } from "react";
import { StoryblokComponent, useStoryblokApi } from "@storyblok/react";
import StoryblokBridge from "../components/StoryblokBridge";

function HomePage() {
  const [story, setStory] = useState<any>(null);
  const storyblokApi = useStoryblokApi();

  useEffect(() => {
    async function fetchData() {
      const version = new URLSearchParams(window.location.search).get("version") as "draft" | "published" || "published";
      const { data } = await storyblokApi.get("cdn/stories/tour", {
        version,
      });

      setStory(data.story);
    }

    fetchData();
  }, []);

  if (!story) return <div>Loading...</div>;

  return (
    <>
      <StoryblokBridge />
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export default HomePage;
