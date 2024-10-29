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
        <Script async  strategy="beforeInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-11280019357"></Script> <Script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11280019357'); </Script>
<Script async  strategy="beforeInteractive" custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />head>
      <Provider>
        <body className={montserrat.className}>
          <amp-analytics type="gtag" data-credentials="include"> <script type="application/json"> { "vars": { "gtag_id": "AW-11280019357", "config": { "AW-11280019357": { "groups": "default" } } }, "triggers": { } } </script> </amp-analytics>
          <div className="dark:bg-[#0C0C1E]">
            <Header />
            <div>{children}</div>
          </div>
        </body>
      </Provider>
    </html>
  );
}
