import Footer from "@/components/footer/Footer";
import Login from "@/components/modal/Login";
import SignUp from "@/components/modal/SignUp";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import { AppProvider } from "@/context/context";
import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from "../components/common/Bootstrap";
import "../public/css/line-awesome.min.css";
import "../public/css/modal-video.scss";
import "../styles/main.sass";

export const metadata = {
  title: "Rifa - Online Lotto & Lottery Reactjs + Nextjs Template",
  description: "NextJs Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Bootstrap>
        <AppProvider>
          <body>
            {/* SignUp Modal */}
            <SignUp />
            {/* Login Modal */}
            <Login />
            {/* Header section */}

            {children}

          </body>
        </AppProvider>
      </Bootstrap>
    </html>
  );
}
