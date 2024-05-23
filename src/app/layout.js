import "./reset.css";
import "./style.css";
import "./globals.css";

export const metadata = {
  title: "Favorites movies RF",
  description: "Check my favorites movies list !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false">{children}</body>
    </html>
  );
}
