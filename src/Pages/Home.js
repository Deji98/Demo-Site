import React from 'react'
import { Link } from 'react-router-dom';
import Rimg1 from "../Images/Rimg1.jpeg"
import Rimg2 from "../Images/Rimg2.jpeg"
import Rimg3 from "../Images/Rimg3.jpeg"
import Rimg04 from "../Images/Rimg04.webp"
import Rimg05 from "../Images/Rimg05.jpeg"



function Home() {
  return (
    <div className='home-dir'>
     
      <div className='Body'>
      <div className='img04'><img id='img4' src={Rimg04} alt="04" /></div>
    <div className='home-text'>
    <h1> Create Professional <span>Testimonials Videos</span>  Easily <br /> In Your Home</h1>
<p>We help companies create and manage quality video content  through a computer or smartphone camera</p>
<Link className='btn' to="/Schedule">Schedule A Demo</Link>
    </div>
<div className='img01'>
<img id='img1' src={Rimg1} alt="01" />
</div>
    </div>
    <div className='set2' >
    <div className='img02'>
    <img id='img2' src={Rimg2} alt="02"/>
    </div>
    <div className='img03'>
      <img id='img3' src={Rimg3} alt="03" />
    </div>
    <div className='img05'>
<img id='img5' src={Rimg05} alt="05" />
    </div>
    </div>
  
  
    </div>
  
  )
}

export default Home;