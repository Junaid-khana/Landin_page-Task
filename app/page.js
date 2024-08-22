import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="max-w--[1440px] px-[64px] mx-auto  " >
      <Header />
      <Hero />
      <Footer />
   </main>
  );
}
