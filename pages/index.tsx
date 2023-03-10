import Head from "next/head";
// import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Home-page/Home-page";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resume - Biki Kumar Thakur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="font-FredokaOne">
        <div className="home mb-24">
          <NavBar />
          <HomePage />
          <AboutMe />
          <Services />
          <ContactMe />
          <Footer />
        </div>
      </main>
    </>
  );
}
