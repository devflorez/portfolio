import React from "react";
import Navbar from "../Navbar";
import Head from "next/head";
import Polygon from "../Polygon";
import { COLOR, POINTS_POLYGON } from "../../utils/constants";
export default function Main({ navbar, head={
    title: "Cristian Florez | Frontend Developer",
    description: "Cristian Florez | Frontend Developer",
    keys: "Cristian David Florez Merlano, Reactjs, Angular, Frontend, portfolio,"
}

  , children }) {
  const { primary, secondary } = COLOR;
  const { top } = POINTS_POLYGON;
  return (
    <>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={
          head.description
        }/>
        <meta name="keywords" content={head.keys} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative marker:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute -z-10 top-0 left-0 right-0 bottom-0">
          <Polygon
            colorPolygon={primary}
            points={top}
            backgroundColor="trasparent"
          />
        </div>
        <Navbar navbar={navbar} />
        {children}
      </main>
    </>
  );
}
