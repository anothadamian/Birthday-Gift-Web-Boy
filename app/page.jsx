import fs from 'node:fs';
import path from 'node:path';

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
      <div className="floating-bouquet bouquet-one" aria-hidden="true">
        <img src="/assets/blue-transition-magnolia.png" alt="" />
        <img src="/assets/blue-transition-magnolia.png" alt="" />
        <img src="/assets/blue-transition-magnolia.png" alt="" />
      </div>
      <div className="floating-bouquet bouquet-two" aria-hidden="true">
        <img src="/assets/blue-transition-magnolia.png" alt="" />
        <img src="/assets/blue-transition-magnolia.png" alt="" />
      </div>
      <div className="legacy-experience" dangerouslySetInnerHTML={{ __html: experience }} />
      <script src="/legacy.js" defer />
    </>
  );
}
