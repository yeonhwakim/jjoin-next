import { client } from "./sanity";

type OAuthUser = {
  id: string;
  name: string;
  email: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, name, username, email, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    name,
    username,
    email,
    image,
    bookmarks: [],
  });
}
