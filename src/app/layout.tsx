import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "@fontsource/ibm-plex-mono/500.css";
import "react-toastify/dist/ReactToastify.css";
import localFont from "@next/font/local";
import JotaiProvider from "@/lib/providers/jotaiProvider";

import ThemeProvider from "@/lib/providers/ThemeProvider";
import { FloatingNav } from "@/lib/components/layout/FloatingHeader";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = localFont({
  src: [
    {
      path: "../../public/font/NeoGramExtended.otf",
      weight: "100",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Capital Invest 360",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <JotaiProvider>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <FloatingNav />
          <video
            className="background-video show-for-xxlarge fixed top-0 -z-50 w-[100vw] h-[100vh]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <ThemeProvider>{children}</ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
