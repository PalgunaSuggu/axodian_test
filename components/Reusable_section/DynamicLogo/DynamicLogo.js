import Image from 'next/image';
import Link from 'next/link';
import { useDynamicLogo } from '../../../hooks/useDynamicLogo';

/**
 * Reusable DynamicLogo component that switches logos based on current pathname
 * @param {Object} props - Component props
 * @param {string} props.variant - Logo variant: 'mobile', 'desktop', 'footer', 'mobile-sheet'
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.imageProps - Additional props for Image component
 * @param {boolean} props.withLink - Whether to wrap logo in a link (default: true)
 * @param {string} props.href - Custom href for the link (default: '/')
 */
const DynamicLogo = ({ variant = 'desktop', className = '', imageProps = {}, withLink = true, href = '/' }) => {
  const logoInfo = useDynamicLogo();

  // Get logo source based on variant
  const getLogoSrc = () => {
    switch (variant) {
      case 'mobile':
        return logoInfo.mobileSrc;
      case 'footer':
        return logoInfo.footerSrc;
      case 'mobile-sheet':
        return logoInfo.src; // Use desktop logo for mobile sheet
      default:
        return logoInfo.src;
    }
  };

  // Get default dimensions based on variant
  const getDefaultProps = () => {
    switch (variant) {
      case 'mobile':
        return {
          width: 42,
          height: 42,
          className: `sm:w-[54px] sm:h-[54px] ${imageProps.className || ''}`
        };
      case 'footer':
        return {
          width: 200,
          height: 70,
          style: logoInfo.sizeOverride?.footer ? 
            { width: logoInfo.sizeOverride.footer.width, height: logoInfo.sizeOverride.footer.height } : 
            { width: '200px', height: 'auto' },
          ...imageProps
        };
      case 'mobile-sheet':
        return {
          fill: true,
          className: `object-contain ${imageProps.className || ''}`,
          sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        };
      default:
        return {
          fill: true,
          className: `object-contain ${imageProps.className || ''}`,
          sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        };
    }
  };

  const imagePropsWithDefaults = {
    ...getDefaultProps(),
    ...imageProps,
    src: getLogoSrc(),
    alt: logoInfo.alt,
    priority: true
  };

  const logoContent = (
    <>
      {variant === 'desktop' || variant === 'mobile-sheet' ? (
        <div className={`relative ${logoInfo.sizeOverride ? 
          (variant === 'desktop' ? `${logoInfo.sizeOverride.desktop.width} ${logoInfo.sizeOverride.desktop.height}` : `${logoInfo.sizeOverride.mobileSheet.width} ${logoInfo.sizeOverride.mobileSheet.height}`) : 
          (variant === 'desktop' ? 'h-10 w-48' : 'h-14 w-52')} ${className}`}>
          <Image {...imagePropsWithDefaults} />
        </div>
      ) : (
        <Image {...imagePropsWithDefaults} className={`${imagePropsWithDefaults.className || ''} ${className}`} />
      )}
    </>
  );

  if (withLink) {
    return (
      <Link href={href} className={className}>
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default DynamicLogo;
