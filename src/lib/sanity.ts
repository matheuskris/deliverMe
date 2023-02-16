import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = sanityClient({
  projectId: "2dwafb7r",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-02-14",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

export default client;
