'use client';

import { usePathname } from 'next/navigation';

/**
 * Custom hook to manage dynamic logo switching based on current pathname
 * @returns {Object} Logo configuration object with src, alt, and other properties
 */
export const useDynamicLogo = () => {
  const pathname = usePathname();

  /**
   * Get logo configuration based on current pathname
   * @returns {Object} Logo configuration
   */
  const getLogoInfo = () => {
    // Check for export compliance pages
    if (pathname?.includes('export-compliance-edpms-ebrc')) {
      return {
        src: '/images/OneCompliance.webp',
        alt: 'OneCompliance',
        mobileSrc: '/images/OneCompliance.webp',
        footerSrc: '/images/OneCompliance.webp',
        isOneCompliance: true,
        sizeOverride: {
          desktop: { width: 'w-56', height: 'h-12' },
          mobileSheet: { width: 'w-60', height: 'h-16' },
          footer: { width: '220px', height: 'auto' }
        }
      };
    }

    // Check for OneDoc pages
    if (pathname?.includes('onedoc-export-simplified')) {
      return {
        src: '/images/OneDoc.webp',
        alt: 'OneDoc',
        mobileSrc: '/images/OneDoc.webp',
        footerSrc: '/images/OneDoc.webp',
        isOneDoc: true
      };
    }

    // Default Axodian branding
    return {
      src: '/images/axodianNavbar.webp',
      alt: 'Axodian',
      mobileSrc: '/images/axodian-fav-icon.webp',
      footerSrc: '/images/axodian-logo-footer.webp',
      isOneCompliance: false,
      isOneDoc: false
    };
  };

  return getLogoInfo();
};

export default useDynamicLogo;
