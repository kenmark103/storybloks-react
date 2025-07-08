import { useEffect } from "react";

export default function StoryblokBridge() {
  useEffect(() => {
    const existingScript = document.getElementById("storyblokBridge");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://app.storyblok.com/f/storyblok-v2-latest.js";
      script.async = true;
      script.id = "storyblokBridge";
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
