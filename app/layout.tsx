import "./globals.css";
import { Montserrat } from "next/font/google";
import Provider from "@/components/Provider";
import Header from "@/components/Header";
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
      <Provider>
        <body className={montserrat.className}>
          <div className="dark:bg-[#0C0C1E]">
            <Header></Header>
            <div>{children}</div>
          </div>
        </body>
      </Provider>
    </html>
  );
}
