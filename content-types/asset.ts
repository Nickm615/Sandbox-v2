import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.8.0'
 *
 * Asset
 * Id: 94ad6916-cc57-4b2f-a28d-243f6d8c18d8
 * Codename: asset
 */
export type Asset = IContentItem<{
  /**
   * asset (asset)
   * Required: false
   * Id: 12562085-8a6c-43ee-a645-d79c1b58b7c1
   * Codename: asset
   */
  asset: Elements.AssetsElement;

  /**
   * Cloudinary (custom)
   * Required: false
   * Id: fb32cb7a-da27-4283-bd0d-b5f73974ce6a
   * Codename: cloudinary
   */
  cloudinary: Elements.CustomElement;

  /**
   * Description (rich_text)
   * Required: false
   * Id: 996ba739-5427-41f1-82d0-4feb6a87244f
   * Codename: description
   */
  description: Elements.RichTextElement;

  /**
   * Title (text)
   * Required: false
   * Id: d503e96c-889a-4d04-8bf1-4961e141aeea
   * Codename: title
   */
  title: Elements.TextElement;
}>;