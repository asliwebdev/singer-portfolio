"use client";

import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "hta8ho37q8fa",
  environment: "master",
  accessToken: "XnwzSuf1QE_Ie5YXz0Ibd1KuJSlVXpNnphHtp8HF6aw",
});

export const useFetchFeaturedVideos = () => {
  const [loading, setLoading] = useState(true);
  const [featuredVideos, setFeaturedVideos] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "asadbeksFeaturedVideos",
      });
      const videos = response.items.map((item) => {
        const { iframeUrl } = item.fields;
        const { id } = item.sys;
        return { id, iframeUrl };
      });
      setFeaturedVideos(videos);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, featuredVideos };
};
