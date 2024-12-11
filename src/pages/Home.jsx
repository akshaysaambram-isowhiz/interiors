import { Fragment } from "react"

import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Stats from "../components/Stats"
import Team from "../components/Team"
import WhyUs from "../components/WhyUs"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <WhyUs />
      <Footer />
    </Fragment>
  )
}
