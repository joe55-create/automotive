// @ts-check

import Contact from '@/components/Contact';
import QuoteForm from '@/components/QuoteForm';
import SiteLayout from '@/components/SiteLayout';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import SeoHead from '@/components/seo/SeoHead';
import { services } from '@/data/siteContent';

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact Sarav Motors | Book a Service in Braeside, Victoria"
        description="Contact Sarav Motors to book car service, inspections or repair work in Braeside, Victoria. Send an enquiry online or call the workshop today."
        path="/contact"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <SiteLayout>
        <Contact headingLevel="h1" />
        <QuoteForm services={services} />
      </SiteLayout>
    </>
  );
}