import "./globals.css";
import { Montserrat } from "next/font/google";
import Provider from "@/components/Provider";
import Header from "@/components/Header";
import Script from "next/script";
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Tahoor Ahmed | Full Stack Developer",
  description: "Tahoor Ahmed Portfolio",
  icons: [{ rel: "icon", url: "user.jpg" }],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6230327304419894"
          crossOrigin="anonymous"
        />
        <Script
          async
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11280019357"
        />
        <Script
            strategy="beforeInteractive"
          id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11280019357');`}
        </Script>
      </head>
      <Provider>
        <body className={montserrat.className}>
          <div className="dark:bg-[#0C0C1E]">
            <Header />
            <main>{children}</main>
          </div>
        </body>
      </Provider>
    </html>
  );
}
