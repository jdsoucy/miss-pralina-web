import React from "react"
import { Link, graphql } from "gatsby"
import { Router } from "@reach/router"
import Layout from './components/layout';
import Hero from './components/hero';
import './styles.scss'


const About = () => {
  return (
    <Layout className="about">
      <Hero className="small" />
      <div className="container">
        <h1>About</h1>
        <p>Originally from West Africa, Miss Pralina was born in Brussels but has been living in Montreal for many years. She is a contemporary artist who is influenced by illustration, design, graffiti, contemporary African and European art. Her use of geometric forms and bright colours, bring us in a surreal world which represents her vision of our modern society.</p>
      </div>
    </Layout>
  )
}

export default About;
