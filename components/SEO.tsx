import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, schema }) => {
  useEffect(() => {
    // Atualiza o título
    document.title = `${title} | MelhoresPreços.shop`;

    // Atualiza a meta descrição
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Atualiza o canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const currentUrl = canonical || window.location.href.split('?')[0];
    linkCanonical.setAttribute('href', currentUrl);

    // Adiciona Schema JSON-LD se fornecido
    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = 'json-ld-schema';
      document.head.appendChild(script);
      
      return () => {
        const oldScript = document.getElementById('json-ld-schema');
        if (oldScript) oldScript.remove();
      };
    }
  }, [title, description, canonical, schema]);

  return null;
};

export default SEO;