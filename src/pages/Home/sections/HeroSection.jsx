import { siteConfig } from '../../../data/siteConfig';

function HeroSection() {
  return (
    <section className="w-full bg-gray-100">
      <img
        src={siteConfig.heroImage}
        alt={siteConfig.siteName}
        className="w-full max-h-[660px] object-cover"
      />
    </section>
  );
}

export default HeroSection;
