"use client";

import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const useFetchMusics = () => {
  const [loading, setLoading] = useState(true);
  const [musics, setMusics] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "asadbeksMusics",
      });
      const musics = response.items.map((item) => {
        const { artist, duration, title, audio } = item.fields;
        const src = audio.fields.file.url;
        const { id } = item.sys;
        return { artist, duration, title, src, id };
      });
      setMusics(musics);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, musics };
};
