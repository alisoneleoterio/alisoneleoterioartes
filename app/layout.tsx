import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Alison Eleotério",
  description: "Portfólio de obras de arte originais incluindo pinturas, arte digital e técnicas mistas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}




