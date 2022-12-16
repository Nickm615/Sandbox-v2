import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';

export type ResolverType = IContentItem<{
    rich_text: Elements.RichTextElement
}>;