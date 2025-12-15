import type { Metadata } from "next"
import "@/styles/globals.css"
import { SedeProvider } from "@/contexts/SedeContext"

export const metadata: Metadata = {
  title: "Accesos - GM",
  description: ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <SedeProvider>
          {children}
        </SedeProvider>
      </body>
    </html>
  );
}
