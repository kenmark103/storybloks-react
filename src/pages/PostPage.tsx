import { useParams } from "react-router-dom";
import { StoryblokComponent, useStoryblok, renderRichText } from "@storyblok/react";
import StoryblokBridge from "../components/StoryblokBridge";

function PostPage() {
  const { slug } = useParams();

  // Fetch the story via useStoryblok for live updates
  const story = useStoryblok(`posts/${slug}`, {
    version: new URLSearchParams(window.location.search).get("version") as "draft" | "published" || "published",
  });

  if (!story) return <div>Loading...</div>;

  if (!story.content) return <div>Story has no content</div>;

  return (
    <>
      <StoryblokBridge />
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">{story.content.title}</h1>

        <div className="prose prose-lg">
          {story.content.content ? (
            <div dangerouslySetInnerHTML={{ __html: renderRichText(story.content.content) || "" }} />
          ) : (
            <p>No content available</p>
          )}
        </div>

        {story.content.image_array?.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mt-8">
            {story.content.image_array.map((blok: any) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default PostPage;
