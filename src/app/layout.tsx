"use client";
import "./globals.css";
import Header from "@/components/Header";
import { Container } from "@mui/material";
import AppContextProvider from "@/context/AppContext";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isDashboardFooter = pathname.startsWith("/dashboard");
  return (
    <html lang="en" className="scroll-smooth">
      <body
        
      >
        <Container maxWidth="lg" sx={{ padding: 2, marginBottom: 5 }}>
          {!isDashboard && <Header />}
          <AppContextProvider>{children}</AppContextProvider>
          {!isDashboardFooter && <Footer />}
        </Container>
      </body>
    </html>
  );
}

