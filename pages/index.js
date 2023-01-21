import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Head from "next/head";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Seo from "../components/SEO";

export default function Home() {
  return (
    <div>
      <Seo />
      <Nav />
      <Hero />
      <Features />
      <Mission />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
