import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./components/StyledComponentsRegistry";
import { StoreProvider } from "./shared/react-store/StoreProvider";
import { Lang } from "./shared/react-store/store";
import { getManyLangs } from "./shared/api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shakita Blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const langs: Lang[] = await getManyLangs();
  const actualLang = langs[0];

  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <StoreProvider initData={{ langs, actualLang, posts: [] }}>
            <Header />
            <Main>
              <div id="content">{children}</div>
            </Main>
            <Footer />
          </StoreProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
