import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import MenuCategories from "@/components/home/MenuCategories";
import InstagramSection from "@/components/home/InstagramSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MenuCategories />
      <InstagramSection />
      {/*
        Sections à venir via Prompt 4 :
        — Section À propos (histoire du restaurant)
        — Témoignages clients
      */}
      <Footer />
    </main>
  );
}
