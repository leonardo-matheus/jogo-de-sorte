import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <>
      {/* Header section */}
      <Header />
      {children}
      {/* Footer section */}
      <Footer />
      {/* scroll-to-top start */}
      <ScrollToTop />
    </>
  );
}
