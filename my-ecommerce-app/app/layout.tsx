// app/layout.tsx
export const metadata = {
  title: '12AM - Twelve AM',
  description: 'Where Today Meet Tomorrow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-custom bg-gray-50">
        <header className="bg-black text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="font-custom text-2xl font-bold">12AM</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="font-custom bg-black text-white py-4 text-center">
          <p>© 2025 12AM. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
