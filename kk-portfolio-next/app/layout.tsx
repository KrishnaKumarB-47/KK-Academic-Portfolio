import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Krishna Kumar B. | AI, Computing & Research',
  description: 'Academic and technical portfolio of Krishna Kumar B, a B.Tech Artificial Intelligence and Data Science student at VCET, Madurai, expected to graduate in 2027.',
  openGraph: { title: 'Krishna Kumar B. | AI, Computing & Research', description: 'AI systems, applied computing, and research interests.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
