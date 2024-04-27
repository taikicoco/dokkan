import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 xl:px-60 lg:px-32 md:px-16 px-4">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
