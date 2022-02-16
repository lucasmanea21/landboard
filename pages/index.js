import Head from "next/head";
import AppAbout from "../Components/AppAbout/AppAbout";
import Concept from "../Components/Concept/Concept";
import Contact from "../Components/Contact/Contact";
import Faq from "../Components/Faq/Faq";
import Featured from "../Components/Featured/Featured";
import Footer from "../Components/Footer/Footer";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import Navbar from "../Components/Navbar/Navbar";
import Chart from "../Components/Chart/Chart";
import RoadMap from "../Components/RoadMap/RoadMap";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Landboard</title>
        <meta
          name="description"
          content="Landboard is a metaverse decentralized application aiming to revolutionize virtual land ownership and advertising."
        />
        <link rel="icon" href="https://i.ibb.co/zSJh0Bg/HQ3.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Navbar />
      <HeroBanner />
      <Chart />
      <Concept />
      <RoadMap />
      {/* <AppAbout /> */}
      <Featured />
      <Faq />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
