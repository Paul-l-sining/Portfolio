/** @format */

import Head from "next/head";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { NotificationContainer } from "react-notifications";
export default function Index() {
  return (
    <div className="mx-2">
      <Head>
        <title>Paul | Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://toppng.com/uploads/preview/alien-11569184369mxcbuyahny.png"
        />
      </Head>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <NotificationContainer />
    </div>
  );
}
