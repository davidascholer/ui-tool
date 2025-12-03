/**
 * SEO component for managing document head metadata
 * Provides title, description, Open Graph tags, and canonical links
 */

import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  author?: string;
  robots?: string;
}

export function SEO({
  title = 'UI Builder - Drag & Drop Component Builder',
  description = 'Build beautiful React and React Native UIs with our intuitive drag-and-drop interface. Export clean, production-ready code instantly.',
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  keywords = 'react, react native, ui builder, drag and drop, component builder, tailwind css, code generator',
  author = 'UI Builder Team',
  robots = 'index, follow',
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', author);
    updateMeta('robots', robots);
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMeta('og:title', ogTitle || title, true);
    updateMeta('og:description', ogDescription || description, true);
    updateMeta('og:type', ogType, true);
    
    if (ogImage) {
      updateMeta('og:image', ogImage, true);
    }

    // Twitter card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', ogTitle || title);
    updateMeta('twitter:description', ogDescription || description);
    
    if (ogImage) {
      updateMeta('twitter:image', ogImage);
    }

    // Canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      
      linkElement.setAttribute('href', canonical);
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, keywords, author, robots]);

  return null;
}
