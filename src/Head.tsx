import React from 'react';

type HeadProps = {
  title?: string;
  description?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterUrl?: string;
  twitterImage?: string;
  keywords?: string;
  author?: string;
  lang?: string;
};

const Head: React.FC<HeadProps> = ({
  title = 'MarcosCoelho',
  description = 'teste',
  ogUrl = 'teste',
  ogImage = '/logo.svg',
  twitterUrl = 'teste',
  twitterImage = 'teste',
  keywords = 'teste',
  author = 'teste',
  lang = 'pt-br',
}) => {
  const updateTags = (
    tags: { name: string; content: string; isLink?: boolean }[]
  ) => {
    tags.forEach(({ name, content, isLink = false }) => {
      const attribute = isLink ? 'href' : 'content';
      const selector = isLink
        ? `link[rel="${name}"]`
        : `meta[name="${name}"], meta[property="${name}"]`;
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute(attribute, content);
    });
  };

  React.useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    updateTags([
      { name: 'description', content: description },
      { name: 'og:url', content: ogUrl },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: ogImage },
      { name: 'twitter:url', content: twitterUrl },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: twitterImage },
      { name: 'twitter:card', content: ogImage },
      { name: 'keywords', content: keywords },
      { name: 'author', content: author },
      { name: 'icon', content: ogImage, isLink: true },
      { name: 'apple-touch-icon', content: ogImage, isLink: true },
    ]);
  }, [title, description, ogUrl, ogImage, twitterUrl, twitterImage]);

  return null;
};

export default Head;
