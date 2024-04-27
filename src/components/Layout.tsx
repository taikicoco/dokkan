import { Footer } from "@/components/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <main className="xl:px-60 lg:px-32 md:px-16 px-4">{children}</main>
      <Footer />
    </div>
  );
};
