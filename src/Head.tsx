import React from 'react';

type HeadProps = {
  title?: string;
  description?: string;
  ogUrl?: string;
  ogImage?: string;
  keywords?: string;
  author?: string;
  lang?: string;
};

const Head: React.FC<HeadProps> = ({
  title = 'MarcosCoelho',
  description = 'Portfólio de Marcos Alexandre Coelho Campos - Desenvolvedor Front-end e Designer UX/UI',
  ogUrl = 'https://marcos-coelho.vercel.app/',
  ogImage = '/logo.svg',
  keywords = 'Desenvolvedor Front-end, Designer UX/UI, React, Portfolio',
  author = 'Marcos Alexandre Coelho Campos',
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
      { name: 'keywords', content: keywords },
      { name: 'author', content: author },
      { name: 'icon', content: ogImage, isLink: true },
      { name: 'apple-touch-icon', content: ogImage, isLink: true },
    ]);
  }, [title, description, ogUrl, ogImage]);

  return null;
};

export default Head;
