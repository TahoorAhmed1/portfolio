import "./globals.css";
import { Montserrat } from "next/font/google";
import Provider from "@/components/Provider";
import Header from "@/components/Header";
import Script from 'next/script';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tahoor Ahmed | Full Stack Developer",
  description: "Tahoor Ahmed Portfolio",
  icons: [
    {
      rel: "icon",
      url: "user.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6230327304419894"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <Provider>
        <body className={montserrat.className}>
          <div className="dark:bg-[#0C0C1E]">
            <Header />
            <div>{children}</div>
          </div>
        </body>
      </Provider>
    </html>
  );
}
