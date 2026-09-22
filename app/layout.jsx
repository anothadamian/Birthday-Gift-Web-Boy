import './globals.css';

export const metadata = {
  title: 'A Little Blue Birthday — for Him',
  description: 'A small interactive birthday journey made for one special guy.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
