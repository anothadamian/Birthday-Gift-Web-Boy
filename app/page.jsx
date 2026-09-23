import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

function readLegacyExperience() {
  const source = fs.readFileSync(path.join(process.cwd(), 'dist/index.html'), 'utf8');
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  return body.replace(/<script\s+src="script\.js"><\/script>/i, '');
}

export default function BirthdayPage() {
  const experience = readLegacyExperience();

  return (
    <>
      <div className="luxury-frame" aria-hidden="true">
        <span className="frame-mark frame-mark-left">12</span>
        <span className="frame-line" />
        <span className="frame-copy">a little blue birthday</span>
        <span className="frame-line" />
        <span className="frame-mark">09</span>
      </div>
      <div className="blue-backdrop-collage" aria-hidden="true">
        <Image
          className="backdrop-flower backdrop-flower-top"
          src="/assets/blue-floral-corner.png"
          alt=""
          width={1230}
          height={1278}
          sizes="(max-width: 820px) 260px, 38vw"
          priority
        />
        <Image
          className="backdrop-flower backdrop-flower-bottom"
          src="/assets/blue-floral-corner.png"
          alt=""
          width={1230}
          height={1278}
          sizes="(max-width: 820px) 240px, 34vw"
        />
        <span className="backdrop-ring backdrop-ring-one" />
        <span className="backdrop-ring backdrop-ring-two" />
      </div>
      <div className="hero-decor" aria-hidden="true">
        <span className="hero-orbit hero-orbit-wide" />
        <span className="hero-orbit hero-orbit-small" />
        <span className="hero-seal"><b>12</b><i>September</i></span>
        <span className="hero-note">a blue little celebration · made only for him</span>
        <Image
          className="hero-bloom hero-bloom-main"
          src="/assets/blue-transition-magnolia.png"
          alt=""
          width={1254}
          height={1254}
          sizes="(max-width: 820px) 170px, 280px"
          priority
        />
        <Image
          className="hero-bloom hero-bloom-small"
          src="/assets/blue-transition-magnolia.png"
          alt=""
          width={1254}
          height={1254}
          sizes="(max-width: 820px) 100px, 160px"
        />
      </div>
      <div className="floating-bouquet bouquet-one" aria-hidden="true">
        <Image src="/assets/blue-transition-magnolia.png" alt="" width={1254} height={1254} sizes="145px" />
        <Image src="/assets/blue-transition-magnolia.png" alt="" width={1254} height={1254} sizes="145px" />
        <Image src="/assets/blue-transition-magnolia.png" alt="" width={1254} height={1254} sizes="145px" />
      </div>
      <div className="floating-bouquet bouquet-two" aria-hidden="true">
        <Image src="/assets/blue-transition-magnolia.png" alt="" width={1254} height={1254} sizes="145px" />
        <Image src="/assets/blue-transition-magnolia.png" alt="" width={1254} height={1254} sizes="145px" />
      </div>
      <div className="legacy-experience" dangerouslySetInnerHTML={{ __html: experience }} />
      <script src="/legacy.js?v=5" defer />
    </>
  );
}
