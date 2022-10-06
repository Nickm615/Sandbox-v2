/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Project name: Support Sandbox 🤠
 * Environment: Production
 * Project Id: 76514a5c-03db-0056-e61d-13253a67364b
 */
export const contentTypes = {
  /**
   * Product
   * Last modified: Wed Oct 05 2022 13:29:17 GMT-0500 (Central Daylight Time)
   */
  product: {
    codename: 'product',
    id: '1a89fcd7-b2f9-4f2a-97fd-f32017facc1f',
    externalId: undefined,
    name: 'Product',
    elements: {
      /**
       * Shopify (custom)
       */
      shopify: {
        codename: 'shopify',
        id: '90ed52ef-1577-47e4-9195-7be8e2211c26',
        externalId: undefined,
        name: 'Shopify',
        required: false,
        type: 'custom',
        snippetCodename: undefined,
      },

      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: '8ea0ba90-067d-448a-a9c7-4b45858915f1',
        externalId: undefined,
        name: 'Name',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: '13c4c0be-032e-457c-872f-7b97d4e87ac7',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Seller
   * Last modified: Tue Sep 06 2022 06:42:37 GMT-0500 (Central Daylight Time)
   */
  seller: {
    codename: 'seller',
    id: 'cc27df69-7bc9-4c7d-9a25-51a35996447b',
    externalId: undefined,
    name: 'Seller',
    elements: {
      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: '9cc64ebc-3976-4206-89e0-edafe98962e5',
        externalId: undefined,
        name: 'Name',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Games (taxonomy)
       */
      games: {
        codename: 'games',
        id: '865c74b0-05c8-4e98-9cfb-30f388071034',
        externalId: undefined,
        name: 'Games',
        required: true,
        type: 'taxonomy',
        snippetCodename: undefined,
      },

      /**
       * Bio (rich_text)
       */
      bio: {
        codename: 'bio',
        id: '3310e2f5-68db-42ee-b684-c2378bd3f256',
        externalId: undefined,
        name: 'Bio',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Product List (modular_content)
       */
      products: {
        codename: 'products',
        id: 'e71f909c-6035-4017-958f-24a655f68d39',
        externalId: undefined,
        name: 'Product List',
        required: true,
        type: 'modular_content',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Asset
   * Last modified: Mon Oct 03 2022 14:45:13 GMT-0500 (Central Daylight Time)
   */
  asset: {
    codename: 'asset',
    id: '94ad6916-cc57-4b2f-a28d-243f6d8c18d8',
    externalId: undefined,
    name: 'Asset',
    elements: {
      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: 'd503e96c-889a-4d04-8bf1-4961e141aeea',
        externalId: undefined,
        name: 'Title',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Asset (asset)
       */
      asset: {
        codename: 'asset',
        id: '4b84b981-0282-4792-8509-c1ce4878d379',
        externalId: undefined,
        name: 'Asset',
        required: false,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: '996ba739-5427-41f1-82d0-4feb6a87244f',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Untitled linked items (modular_content)
       */
      untitled_linked_items: {
        codename: 'untitled_linked_items',
        id: '18478604-cfe2-4534-b4fe-67fc93b5a1ac',
        externalId: undefined,
        name: 'Untitled linked items',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Trading Card
   * Last modified: Wed Oct 05 2022 13:15:03 GMT-0500 (Central Daylight Time)
   */
  trading_card: {
    codename: 'trading_card',
    id: '6620eaed-a977-4a80-9c7e-862f33df3653',
    externalId: undefined,
    name: 'Trading Card',
    elements: {
      /**
       * Shopify (custom)
       */
      shopify: {
        codename: 'shopify',
        id: 'bf14cddc-bd49-45cd-8127-0ed4537c25e6',
        externalId: undefined,
        name: 'Shopify',
        required: false,
        type: 'custom',
        snippetCodename: undefined,
      },

      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: 'c4bc6c59-6574-4896-b214-aa8818b60ba8',
        externalId: undefined,
        name: 'Title',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Games (taxonomy)
       */
      game: {
        codename: 'game',
        id: '62724f0a-66b2-460f-a645-993bbab30a25',
        externalId: undefined,
        name: 'Games',
        required: false,
        type: 'taxonomy',
        snippetCodename: undefined,
      },

      /**
       * Seller (modular_content)
       */
      seller: {
        codename: 'seller',
        id: '7a934617-f198-47c2-b097-816bdb11f1be',
        externalId: undefined,
        name: 'Seller',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Price (number)
       */
      price: {
        codename: 'price',
        id: '6c9ba18d-434a-4593-8d37-0b4e18bf8cf4',
        externalId: undefined,
        name: 'Price',
        required: false,
        type: 'number',
        snippetCodename: undefined,
      },

      /**
       * Image (modular_content)
       */
      image: {
        codename: 'image',
        id: '3f7d7cb5-1598-47d6-9714-80a232e028fa',
        externalId: undefined,
        name: 'Image',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: '60e92346-fc77-48c4-bfc1-cb6959813d32',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Condition (multiple_choice)
       */
      condition: {
        codename: 'condition',
        id: '3b4aee17-5b44-40cd-9a74-4dd93565dfd6',
        externalId: undefined,
        name: 'Condition',
        required: false,
        type: 'multiple_choice',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Author
   * Last modified: Tue Sep 06 2022 04:06:40 GMT-0500 (Central Daylight Time)
   */
  author: {
    codename: 'author',
    id: 'f5573bef-ec0b-499c-9a4e-1ac2605c2689',
    externalId: undefined,
    name: 'Author',
    elements: {
      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: '33ade4c4-905c-4fbb-8084-3009604ebbe9',
        externalId: undefined,
        name: 'Name',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Bio (rich_text)
       */
      bio: {
        codename: 'bio',
        id: '159955b1-dcca-4a1c-ae4b-329c7063a8da',
        externalId: undefined,
        name: 'Bio',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Posts (modular_content)
       */
      posts: {
        codename: 'posts',
        id: '87d1770d-23cb-4269-ad7c-a03212654e4e',
        externalId: undefined,
        name: 'Posts',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Games (taxonomy)
       */
      games: {
        codename: 'games',
        id: 'f1638e51-c2dd-4993-9df8-0b527a745597',
        externalId: undefined,
        name: 'Games',
        required: false,
        type: 'taxonomy',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Post
   * Last modified: Tue Sep 06 2022 04:06:25 GMT-0500 (Central Daylight Time)
   */
  post: {
    codename: 'post',
    id: '94ae1c1e-778d-416c-b476-a6adfa1d3442',
    externalId: undefined,
    name: 'Post',
    elements: {
      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: 'dc9534f1-edd9-4974-8b82-2f409d8126e2',
        externalId: undefined,
        name: 'Title',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Author (modular_content)
       */
      author: {
        codename: 'author',
        id: '5dc7d4e9-2c0f-4341-9e1c-3265f6850d35',
        externalId: undefined,
        name: 'Author',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Image (asset)
       */
      image: {
        codename: 'image',
        id: '04b9a500-ec7f-45e9-8f61-bbe51b18467b',
        externalId: undefined,
        name: 'Image',
        required: false,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * Games (taxonomy)
       */
      games: {
        codename: 'games',
        id: '6c621277-e19b-4620-bdb1-3c70bf1bd3a6',
        externalId: undefined,
        name: 'Games',
        required: false,
        type: 'taxonomy',
        snippetCodename: undefined,
      },

      /**
       * Post Type (taxonomy)
       */
      post_type: {
        codename: 'post_type',
        id: '94b56b2b-4a86-4b97-beec-01ee588cfa3a',
        externalId: undefined,
        name: 'Post Type',
        required: false,
        type: 'taxonomy',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Cloudinary
   * Last modified: Tue Oct 04 2022 14:34:04 GMT-0500 (Central Daylight Time)
   */
  cloudinary: {
    codename: 'cloudinary',
    id: 'cf604944-231a-411a-83de-a208f83cbebc',
    externalId: undefined,
    name: 'Cloudinary',
    elements: {
      /**
       * Cloudinary Manager (custom)
       */
      cloudinary_manager: {
        codename: 'cloudinary_manager',
        id: '372e6b4a-1d54-4182-b2f6-db2099c73f02',
        externalId: undefined,
        name: 'Cloudinary Manager',
        required: false,
        type: 'custom',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Shopify
   * Last modified: Fri Sep 30 2022 13:16:59 GMT-0500 (Central Daylight Time)
   */
  shopify: {
    codename: 'shopify',
    id: 'e8d7e0ff-cf51-4ed4-95cc-d466804ccc74',
    externalId: undefined,
    name: 'Shopify',
    elements: {
      /**
       * Shopify (custom)
       */
      shopify: {
        codename: 'shopify',
        id: 'd2c99313-95db-4283-b767-d3a020415ad7',
        externalId: undefined,
        name: 'Shopify',
        required: false,
        type: 'custom',
        snippetCodename: undefined,
      },
    },
  },
};
