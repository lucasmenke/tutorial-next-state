import "./globals.css";
import OverlayParent from "./components/overlay/overlay-parent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <OverlayParent />
        {children}
      </body>
    </html>
  );
}
