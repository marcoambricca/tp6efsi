import Navbar from '../modules/navbar.js';

export const metadata = {
  title: "Directorio de personas",
  description: "Creado por Marco A.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
