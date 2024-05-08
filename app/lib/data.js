export async function fetchGraphQL(query) {
  const resp = await fetch(
    "https://graphql.contentful.com/content/v1/spaces/hta8ho37q8fa",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer XnwzSuf1QE_Ie5YXz0Ibd1KuJSlVXpNnphHtp8HF6aw",
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
  return resp?.data?.asadbeksVideosCollection?.items;
}
