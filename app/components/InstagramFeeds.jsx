"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function InstagramPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/instagram")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error.message);
        } else {
          setPosts(data.data);
        }
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (posts.length === 0) {
    return <Loading height="h-full" />;
  }

  return (
    <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 px-6 sm:gap-2 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => {
        const { id, caption, media_url, media_type } = post;
        return (
          <li key={id} className="aspect-square overflow-hidden rounded-sm">
            <div className="h-full w-full rounded-sm object-cover">
              {media_type === "IMAGE" || media_type === "CAROUSEL_ALBUM" ? (
                <img
                  src={media_url}
                  alt={caption || "Instagram Photo"}
                  className="h-full w-full rounded-sm object-cover"
                />
              ) : (
                <video
                  src={media_url}
                  controls
                  className="h-full w-full rounded-sm object-cover"
                >
                  <source src={media_url} type="video/mp4" />
                </video>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
