import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.8.0'
 *
 * Video
 * Id: 2ce82592-24e5-4427-bd35-5a0fb9906ddd
 * Codename: video
 */
export type Video = IContentItem<{
  /**
   * Host (multiple_choice)
   * Required: false
   * Id: fc6f0f1e-0b17-4ad1-9eeb-4b4bfa5ab481
   * Codename: host
   */
  host: Elements.MultipleChoiceElement;

  /**
   * Source (text)
   * Required: false
   * Id: fd5259d4-cc1a-4010-bf2a-6806e7874634
   * Codename: source
   */
  source: Elements.TextElement;

  /**
   * Title (text)
   * Required: false
   * Id: 5f1a73ee-dd24-45c4-a824-517a2d07dd83
   * Codename: title
   */
  title: Elements.TextElement;
}>;