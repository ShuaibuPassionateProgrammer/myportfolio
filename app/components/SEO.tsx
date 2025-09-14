import Script from 'next/script';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEO({
  title = "Shuaibu's Portfolio - Full-Stack Developer",
  description = "Experienced full-stack developer specializing in React, Next.js, Node.js, and mobile development. 5+ years of experience building scalable web and mobile applications.",
  keywords = ['React', 'Next.js', 'Node.js', 'Full-Stack Developer', 'Mobile Development', 'JavaScript', 'TypeScript'],
  author = "Shuaibu's Portfolio",
  ogImage = '/img/rounded_profile.png',
  canonicalUrl = 'https://yourportfolio.com',
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shuaibu',
    jobTitle: 'Full-Stack Developer',
    description: description,
    url: canonicalUrl,
    image: `${canonicalUrl}${ogImage}`,
    sameAs: [
      'https://github.com/shuaibu222',
      'https://linkedin.com/in/shuaibu',
      'mailto:shuaibu@gmail.com',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Flutter',
      'React Native',
      'Express.js',
      'Laravel',
      'PostgreSQL',
      'MongoDB',
    ],
    workExperience: [
      {
        '@type': 'OrganizationRole',
        roleName: 'Full-Stack Developer',
        startDate: '2019-01-01',
        description: 'Developing web and mobile applications using modern technologies',
      },
    ],
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Flutter',
      'React Native',
      'Express.js',
      'Laravel',
      'PostgreSQL',
      'MongoDB',
      'Tailwind CSS',
      'Git',
      'Docker',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Responsive Web Design Certification',
        url: 'https://www.freecodecamp.org/certification/shuaibu222/responsive-web-design',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'JavaScript Algorithms and Data Structures Certification',
        url: 'https://www.freecodecamp.org/certification/shuaibu222/javascript-algorithms-and-data-structures',
      },
    ],
  };

  return (
    <>
      {/* Basic Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${canonicalUrl}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={author} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${canonicalUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@shuaibu" />
      <meta name="twitter:site" content="@shuaibu" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap"
        as="style"
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&display=swap"
        as="style"
      />

      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Additional SEO tags */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
    </>
  );
}