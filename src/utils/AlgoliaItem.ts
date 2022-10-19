import { Elements, ElementType, IContentItem } from "@kontent-ai/delivery-sdk";

export type AlgoliaItem = Readonly<{
  id: string,
  objectID: string,
  codename: string,
  name: string,
  language: string,
  type: string,
  slug: string,
  collection: string,
  content: readonly ContentBlock[]
}>;

type ContentBlock = Readonly<{
  id: string,
  codename: string,
  name: string,
  type: string,
  language: string,
  collection: string,
  parents: readonly string[],
  contents: string
}>;