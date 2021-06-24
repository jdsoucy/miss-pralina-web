import React from "react"
import { Link, graphql } from "gatsby"
import { Router } from "@reach/router"
import Layout from './components/layout';
import Hero from './components/hero';
import './styles.scss'

const artworks = [
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE I N1 WEB",
  //   img: "FREESTYLE_I_N1_WEB.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE I N2 WEB",
  //   img: "FREESTYLE_I_N2_WEB.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE I N3 WEB",
  //   img: "FREESTYLE_I_N3_WEB.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE II N1 P1 5",
  //   img: "FREESTYLE_II_N1_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE II N2 P1 5",
  //   img: "FREESTYLE_II_N2_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE III N1 P1 5",
  //   img: "FREESTYLE_III_N1_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE III N2 P1 5",
  //   img: "FREESTYLE_III_N2_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE III N3 P1 5",
  //   img: "FREESTYLE_III_N3_P1_5.jpg",
  // },
  // {
  //   category: "freestyle",
  //   title: "FREESTYLE III N4 P1 5",
  //   img: "FREESTYLE_III_N4_P1_5.jpg",
  // },
  {
    id: "alimatou",
    category: "blackhairsmatter",
    title: "Alimatou",
    img: "BLACKHAIRSMATTER_purple_small_7652a1.png",
    color: "7652a1"
  },
  {
    id: "koumba",
    category: "blackhairsmatter",
    title: "Koumba",
    img: "BLACKHAIRSMATTER_orange_small_ef4d23.png",
    color: "ef4d23"
  },
  {
    id: "lika",
    category: "blackhairsmatter",
    title: "Lika",
    img: "BLACKHAIRSMATTER_yellow_small_fdbb13.png",
    color: "fdbb13"
  },
  {
    id: "aminata",
    category: "blackhairsmatter",
    title: "Aminata",
    img: "BLACKHAIRSMATTER_tuquoize_small_40bc9b.png",
    color: "40bc9b"
  },
  {
    id: "fatou",
    category: "blackhairsmatter",
    title: "Fatou",
    img: "BLACKHAIRSMATTER_blue_small_3c4ca0.png",
    color: "3c4ca0"
  },
  {
    id: "assia",
    category: "blackhairsmatter",
    title: "Assia",
    img: "BLACKHAIRSMATTER_pink_small_b91f5d.png",
    color: "b91f5d"
  },
  {
    id: "curiosity",
    category: "putamask",
    title: "Curiosity",
    img: "PutAmask_curiosity_small.png",
  },
  {
    id: "devotion",
    category: "putamask",
    title: "Devotion",
    img: "PutAmask_devotion_small.png",
  },
  {
    id: "toughness",
    category: "putamask",
    title: "Toughness",
    img: "PutAmask_toughness_small.png",
  },
]

const About = () => {
  return (
    <Layout className="artwork">
      <div className="container">
        <h1>All Artwork</h1>
        <div className="artworks">
          {artworks.map((artwork, index) => (
            <article key={index}>
              <img style={{backgroundColor: artwork.color ? `#${artwork.color}` : ''}} src={artwork.img} />
              <div>{artwork.title}</div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default About;
