import * as React from "react"
import './styles.scss'

const items = [
  {
    category: "freestyle",
    title: "FREESTYLE I N1 WEB",
    img: "FREESTYLE_I_N1_WEB.jpg",
  },
  {
    category: "freestyle",
    title: "FREESTYLE I N2 WEB",
    img: "FREESTYLE_I_N2_WEB.jpg",
  },
  {
    category: "freestyle",
    title: "FREESTYLE I N3 WEB",
    img: "FREESTYLE_I_N3_WEB.jpg",
  },
  {
    category: "freestyle",
    title: "FREESTYLE II N1 P1 5",
    img: "FREESTYLE_II_N1_P1_5.jpg",
  },
  {
    category: "freestyle",
    title: "FREESTYLE II N2 P1 5",
    img: "FREESTYLE_II_N2_P1_5.jpg",
  },
  {
    category: "freestyle",
    title: "FREESTYLE III N1 P1 5",
    img: "FREESTYLE_III_N1_P1_5.jpg",
  },
  {
    category: "freestyle",
    title: "FREESTYLE III N2 P1 5",
    img: "FREESTYLE_III_N2_P1_5.jpg",
  },
  {
    category: "freestyle",
    title: "FREESTYLE III N3 P1 5",
    img: "FREESTYLE_III_N3_P1_5.jpg",
  },
  {
    category: "freestyle",
    title: "FREESTYLE III N4 P1 5",
    img: "FREESTYLE_III_N4_P1_5.jpg",
  },
  {
    category: "blackhairsmatter",
    title: "BLACKHAIRSMATTER N1 ALIMATOU web",
    img: "BLACKHAIRSMATTER_N1_ALIMATOU_web.png",
  },
  {
    category: "blackhairsmatter",
    title: "BLACKHAIRSMATTER N2 KOUMBA web",
    img: "BLACKHAIRSMATTER_N2_KOUMBA_web.png",
  },
  {
    category: "blackhairsmatter",
    title: "BLACKHAIRSMATTER N3 LIKA web",
    img: "BLACKHAIRSMATTER_N3_LIKA_web.png",
  },
  {
    category: "blackhairsmatter",
    title: "BLACKHAIRSMATTER N4 AMINATA web",
    img: "BLACKHAIRSMATTER_N4_AMINATA_web.png",
  },
  {
    category: "blackhairsmatter",
    title: "BLACKHAIRSMATTER N5 FATOU web",
    img: "BLACKHAIRSMATTER_N5_FATOU_web.png",
  },
  {
    category: "blackhairsmatter",
    title: "BLACKHAIRSMATTER N6 ASSIA web",
    img: "BLACKHAIRSMATTER_N6_ASSIA_web.png",
  },
]

// markup
const IndexPage = () => {
  return (
    <div className="container">
      <section className="hero">
        <h1>Miss Pralina</h1>
        <p>Originally from West Africa, Miss Pralina was born in Brussels but has been living in Montreal for over a decade. She is a contemporary artist who is influenced by illustration, design, graffiti, contemporary African and European art. Her use of geometric shapes, bright colours, and symbols represent her vision of our modern society.
        </p>
      </section>
      
      <section className="artworks">
        {items.map((item) => (
          <article>
            <img className="thumb" src={`${item.img}`} />
            <div className="title">{item.title}</div>
          </article>
        ))}
      </section>

      <h3>How do I get a Miss Pralina?</h3>
      <ul>
        <li>Click on the artwork that you want</li>
        <li>Click the buy button</li>
        <li>You will be redirected to Binance NFT website where you can buy, bid and and sell Miss Pralina NFTs</li>
      </ul>
    </div>
  )
}

export default IndexPage
