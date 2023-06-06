import { FC, useEffect, useState } from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { TheTeam } from "@/components/TheTeam";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";
import {
  IDataAbout,
  IDataHomePage,
  IDataPrices,
  IDataServices,
} from "@/types/tapes";
import axios from "axios";
import Image from "next/image";

interface IHomeProps {
  slider: IDataServices[];
  dataHomePage: IDataHomePage;
  dataAbout: IDataAbout[];
  dataPrices: IDataPrices[];
}

const Home: FC<IHomeProps> = ({
  slider,
  dataHomePage,
  dataAbout,
  dataPrices,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);


  return (
    <>
      <Head>
        <title>{dataHomePage.titleDocument}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header dataHomePage={dataHomePage} />
      <main>
        <Services windowWidth={windowWidth} slider={slider} />
        <TheTeam />
        <About dataAbout={dataAbout} />
        <Reviews />
        <GetStarted />
      </main>
      <Footer dataPrices={dataPrices} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const URL = 'http://cms05062023.c1.biz/'

  const responseDataSlider = await axios
    .get(`${URL}wp-json/wp/v2/slides`)
    .then(res => res.data)
    .catch(error => console.log(error));

  const slider = responseDataSlider.map(
    (item: any, index: number) => {
      return {
        idItem: index,
        id: item.id,
        title: item.title.rendered,
        subtitle: item.acf.subtitle,
        image: {
          src: item.acf.image.url.split('/').reverse()[0],
          width: item.acf.image.width,
          height: item.acf.image.height,
        },
        name: item.acf.name,
        profession: item.acf.profession,
        description: item.acf.description,
      };
    }
  );

  const responseDataHomePage = await axios
    .get(`${URL}wp-json/wp/v2/pages`)
    .then(
      res => res.data.filter((page: any) => page.slug === "home")[0]
    )
    .catch(error => console.log(error)); 

  const dataHomePage = {
    titleDocument: responseDataHomePage.acf.title,
    logo: {
      src: responseDataHomePage.acf.logo.url.split('/').reverse()[0],
      width: responseDataHomePage.acf.logo.width,
      height: responseDataHomePage.acf.logo.height,
    },
    titleHeader: responseDataHomePage.acf.titleHeader,
  };

  console.log(dataHomePage)

  const responseDataAbout = await axios
    .get(`${URL}wp-json/wp/v2/about`)
    .then(res => res.data)
    .catch(error => console.log(error));

  const dataAbout = responseDataAbout.map((item: any) => {
    return {
      id: item.id,
      title: item.title.rendered,
      description: item.acf.description,
      icon: {
        src: item.acf.icon.url.split('/').reverse()[0],
        width: item.acf.icon.width,
        height: item.acf.icon.height,
      },
    };
  });

  const responseDataPrices = await axios
    .get(`${URL}wp-json/wp/v2/prices`)
    .then(res => res.data)
    .catch(error => console.log(error));

  const dataPrices = responseDataPrices.map((item: any) => {
    return {
      id: item.id,
      title: item.title.rendered,
      price: item.acf.price,
      list: item.acf.data.split(";").map((item: any) => {
        return item.trim();
      }),
    };
  });
  // console.log(dataPrices);
  return {
    props: {
      slider,
      dataHomePage,
      dataAbout,
      dataPrices,
    },
    revalidate: 10,
  };
}
