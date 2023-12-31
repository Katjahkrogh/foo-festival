import React from "react";
import Ticket from "../../components/Billet";
import VipTicket from "../../components/VipBillet";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "FooFest | Billetter",
};


function Billetter() {
  return (
    <>
      <Header />
      <main>
        <h1
          className={`${bebasNeue.className} text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-32 text-center text-fooYellow-200`}
        >
          Billetter
        </h1>
        <section className="flex flex-col items-center gap-20 md:flex-row md:justify-center md:items-end md:gap-10 mt-20 mb-20">
          <Ticket />
          <VipTicket />
        </section>
        <section className="mx-4 md:mx-40 lg:mx-60 xl:mx-80">
          <Faq />
        </section>
      </main>
      <Footer />
    </>
  );;
}

export default Billetter;
;
