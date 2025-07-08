
import { storyblokEditable, renderRichText } from "@storyblok/react";

function Content({ blok }) {
  const editableAttrs = storyblokEditable(blok);

  return (
    <section className="my-16 px-4">
      <h3 {...editableAttrs} className="text-3xl font-bold text-center my-10">
        {blok.title}
      </h3>

      <div className="w-full py-12">
        <div className="prose prose-lg max-w-5xl mx-auto px-4">
          <div dangerouslySetInnerHTML={{ __html: renderRichText(blok.content) }} />
        </div>
      </div>
    </section>
  );
}

export default Content;
