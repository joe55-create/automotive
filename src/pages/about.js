// @ts-check

import About from '@/components/About';
import SiteLayout from '@/components/SiteLayout';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import SeoHead from '@/components/seo/SeoHead';

/**
 * @returns {import('react').ReactElement}
 */
export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Sarav Motors, Trusted Mechanics in Braeside, Victoria"
        description="Learn about Sarav Motors, a Braeside workshop focused on honest repairs, modern workshop standards and dependable car service for Bayside drivers."
        path="/about"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      <SiteLayout>
        <About />
      </SiteLayout>
    </>
  );
}
