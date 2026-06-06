import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SchemaMarkup, organizationSchema, websiteSchema, personSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MCP Made Simple",
  description: "The complete guide to Model Context Protocol for AI automation.",
  metadataBase: new URL('https://www.mcpmadesimple.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-gray-900`}>
        <SchemaMarkup schema={[organizationSchema(), websiteSchema(), personSchema()]} />
        {children}
      </body>
    </html>
  );
}
