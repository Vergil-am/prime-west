import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prime west",
  description: "Prime west property group",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <NextAuthSessionProvider> */}

      <ClerkProvider>
        <body className={inter.className}>
          <NavBar />
          <div className="mt-[85px]">{children}</div>
          <Footer />
          <Toaster />
        </body>
        {/* </NextAuthSessionProvider> */}
      </ClerkProvider>
    </html>
  );
}
