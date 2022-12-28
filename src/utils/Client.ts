import { camelCasePropertyNameResolver, createDeliveryClient, snakeCasePropertyNameResolver } from '@kontent-ai/delivery-sdk';
import { Author, Post, Product } from '../models';

const projectId = process.env.REACT_APP_PROJECT_ID || '';
const previewApiKey = process.env.REACT_APP_PREVIEW_API_KEY || '';

const Client = createDeliveryClient({
    projectId: projectId,
    previewApiKey: previewApiKey,
    propertyNameResolver: snakeCasePropertyNameResolver
});

export {Client};