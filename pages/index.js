import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Head from "next/head";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Off The Road Collective</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="We Sustainable Fashion Brand that is committed to making a difference in the world."
        />
      </Head>
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
