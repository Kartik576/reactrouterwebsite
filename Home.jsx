import React from "react";
import "./Page.css";

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to Jewellery 🚀</h1>
      <p>
        Jewellery is a decorative item worn for adornment or symbolism, made
        from metals like gold and silver, gemstones, beads, and other materials,
        with common types including necklaces, rings, earrings, and bracelets.
        People wear jewellery for personal style, status, or to express culture
        and feelings, with some functional items also evolving to be
        decorative.
      </p>

      {/* Image Row */}
      <div className="img-row">
        <img src="./img/img1.jpg" alt="jewellery 1" />
        <img src="./img/img2.jpg" alt="jewellery 2" />
        <img src="./img/img3.jpg" alt="jewellery 3" />
        <img src="./img/img4.jpg" alt="jewellery 4" />
        <img src="./img/img5.jpg" alt="jewellery 5" />
      </div>
    </div>
  );
};

export default Home;
