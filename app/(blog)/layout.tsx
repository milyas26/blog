import Footer from "@/components/footer";
import Header from "@/components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  );
};

export default DashboardLayout;
