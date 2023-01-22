import Head from "next/head";
import Navbar from "../components/app/Navbar";
import Hero from "../components/app/Hero";
import Calculator from "../components/app/Calculator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navbar />
        <Hero />
        <Calculator />
      </main>
    </>
  );
}
