import React from 'react';
import './Home1.css'; // Assuming there's a CSS file for styling
import { Gallery } from './Gallery';
import { About } from './About';
import { Content } from './Content';
import { Shop } from './Shop';


const Home = () => {
  return (
  
    <div className="container">
        
      <main className="main-content">
        <h2>Textile artist & painter based in Cornwall.</h2>
        <p>
          Adam Halls' use of materials, paint and machine stitching have established him as an exciting artist with a distinctive technique. 
          His sensitive observations of the Cornish Landscape cannot help but draw you in.
        </p>
        <div className="gallery">
          <img src='pic1.jpeg' alt="Artwork 1" className="gallery-img" />
          <img src='pic2.avif' alt="Artwork 2" className="gallery-img" />
          <img src="pic3.webp" alt="Artwork 3" className="gallery-img" />
        </div>
      </main>
      <hr/>
      <Gallery/>
      <hr/>
      <About/>
      <hr/>
      <Shop/>
      <hr/>
      <Content/>
    </div>
  );
}

export default Home;