import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Head from "next/head";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Seo from "../components/SEO";
import Product from "../components/Products";

export default function Home() {
  return (
    <>

      <main>
        <Nav />
        <Hero />
        <Features />
        <Product />
        <Mission />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
