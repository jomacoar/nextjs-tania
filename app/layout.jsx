import './globals.css';

export const metadata = {
  title: 'Stories to grow by Tânia Santos',
  description: 'Make children happy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/" />
      </head>
      <body className="max-w-[1920px] mx-auto">{children}</body>
    </html>
  );
}
