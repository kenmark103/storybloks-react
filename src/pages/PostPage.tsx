import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  StoryblokComponent,
  useStoryblok,
  renderRichText,
} from "@storyblok/react";
import Header from "../components/Header";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();

 
  const initialVersion =
    window.location.search.includes("_storyblok")
      ? "draft"
      : (new URLSearchParams(window.location.search)
          .get("version") as "draft" | "published") ?? "published";

  const [version] = useState<"draft" | "published">(initialVersion);

  const story = useStoryblok(`posts/${slug}`, { version });

  console.log("fetching version:", version);

  if (!story) return <div>Loading...</div>;
  if (!story.content) return <div></div>;

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">{story.content.title}</h1>

        <div className="prose prose-lg">
          {story.content.content ? (
            <div
              dangerouslySetInnerHTML={{
                __html: renderRichText(story.content.content) || "",
              }}
            />
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
