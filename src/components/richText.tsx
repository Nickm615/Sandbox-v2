import { DomElementOptionsType, ResolversType, RichTextElement } from '@kontent-ai/react-components';
import React from 'react';
import { Link } from 'react-router-dom';
// import { resolveContentLink } from '../Utilities/ContentLinks';
import { ElementModels, Elements, IContentItem, ILink, IRichTextImage,
} from '@kontent-ai/delivery-sdk';

interface RichTextProps {
  element: Elements.RichTextElement;
  className?: string;
}

export const RichText: React.FC<RichTextProps> = (props: RichTextProps) => {
  const resolvers: ResolversType = {
    resolveLinkedItem: (
      linkedItem: IContentItem | undefined,
      domOptions: DomElementOptionsType
    ) => {
      const contentItemType = linkedItem ? linkedItem.system.type : '';

      switch (contentItemType) {
        case 'author': {
          return (
            <div className='author-linked-item'>
              <h4>{linkedItem?.elements.name.value}</h4>
              <img src={linkedItem?.elements.image.value[0].url}/>
              <p>{linkedItem?.elements.bio.value}</p>
            </div>
          )
          
        }
        case 'video': {
          if (
            linkedItem?.elements.host.value.find(
              (item: ElementModels.MultipleChoiceOption) =>
                item.codename === 'vimeo'
            )
          ) {
            return (
              <iframe
                className="hosted-video__wrapper"
                src={linkedItem?.elements.source.value}
                width="640"
                height="360"
                frameBorder="0"
                allowFullScreen
                title={`Vimeo video ${linkedItem.elements.title.value}`}
              ></iframe>
            );
          } else if (
            linkedItem?.elements.host.value.find(
              (item: ElementModels.MultipleChoiceOption) =>
                item.codename === 'youtube'
            )
          ) {
            return (
              <iframe
                className="hosted-video__wrapper"
                width="560"
                height="315"
                src={linkedItem?.elements.source.value}
                frameBorder="0"
                allowFullScreen
                title={`Youtube video ${linkedItem.elements.title.value}`}
              ></iframe>
            );
          } else {
            return <div>Content item not supported</div>;
          }
        }

        
        default:
          return <div>Content item not supported</div>;
      }
    },
    resolveImage: (
      image: IRichTextImage,
      domOptions: DomElementOptionsType
    ) => {
      return (
        <img
          className="xImage"
          src={`${image.url}`}
          alt={`${image.description || `image with id: ${image.imageId}`}`}
        />
      );
    },
    resolveLink: (link, { domElement, domToReact }): JSX.Element => (
      <a href={`/${link.type}/${link.urlSlug}`}>
          {domToReact(domElement.children)}
      </a>
  ),
  
  };

  return (
    <div className={props.className}>
      <RichTextElement richTextElement={props.element} resolvers={resolvers} />
    </div>
  );
};

export default RichText;





