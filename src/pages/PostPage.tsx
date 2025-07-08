import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { StoryblokComponent } from "@storyblok/react";
import { getStoryblokApi } from "../services/storyblok";
import StoryblokBridge from "../components/StoryblokBridge";
import type { ISbStoryData } from "@storyblok/react";

function PostPage() {
  const { slug } = useParams();
  const { search } = useLocation();
  const [story, setStory] = useState<ISbStoryData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStory = async () => {
      const version = new URLSearchParams(search).get("version") as "draft" | "published" || "published";
      const sbApi = getStoryblokApi();

      try {
        const { data } = await sbApi.get(`cdn/stories/posts/${slug}`, {
          version,
        });

        if (data?.story) {
          setStory(data.story);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchStory();
  }, [slug, search]);

  if (error) return <div>Post not found</div>;
  if (!story) return <div>Loading...</div>;

  return (
    <>
      <StoryblokBridge />
      {story.content.body.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </>
  );
}

export default PostPage;
