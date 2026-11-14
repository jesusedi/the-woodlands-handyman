import { About } from "./components/About";
import { Areas } from "./components/Areas";
import { Closing } from "./components/Closing";
import { Contact } from "./components/Contact";
import { Faqs } from "./components/Faqs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MobileCallBar } from "./components/MobileCallBar";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { WhyUs } from "./components/WhyUs";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-cream focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Areas />
        <Faqs />
        <Contact />
        <Closing />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
