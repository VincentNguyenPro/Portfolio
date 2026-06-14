import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { photographerInfo } from '@/data/photographer';

interface SEOHeadProps {
  title?: string;
  exactTitle?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
}

const SITE_URL = 'https://vincentnguyen.pro';

export function SEOHead({ title, exactTitle, description, image, type = 'website' }: SEOHeadProps) {
  const location = useLocation();

  const fullTitle =
    exactTitle ??
    (title
      ? `${title} | ${photographerInfo.name}`
      : `${photographerInfo.name} - ${photographerInfo.tagline}`);

  const fullDescription = description || photographerInfo.heroIntroduction;
  const canonicalPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImage = image || photographerInfo.portraitImage;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    updateMetaTag('description', fullDescription);
    updateMetaTag('robots', 'index, follow');
    updateLinkTag('canonical', canonicalUrl);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', fullDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', photographerInfo.name, true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', fullDescription);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('author', photographerInfo.name);
    updateMetaTag(
      'keywords',
      'Product Manager, Product Owner, SI Finance, Transformation digitale, Agile, Scrum, Vincent Nguyen, Paris'
    );
  }, [fullTitle, fullDescription, canonicalUrl, ogImage, type]);

  return null;
}
