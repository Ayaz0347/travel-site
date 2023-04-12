import React,{useEffect, useState} from 'react';
// import vid1 from '../../assets/vid1.mp4';
import vid2 from '../../assets/vid2.mp4';
import './home.scss';
import {GrLocation} from 'react-icons/gr';
import {HiFilter} from 'react-icons/hi';
import {FiFacebook} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {BsListTask} from 'react-icons/bs';
import {TbApps} from 'react-icons/tb';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = ()=> {
  const [value, setValue] = useState(0);
  // const []
  useEffect(()=>{
    Aos.init({duration: 3000})
  },[])
  return (
   <section className="home">
      <div className="overlay"></div>
        <video muted autoPlay loop src={vid2} typeof="video/mp4"></video>
      
        <div className="homeContent container">
          <div className="textDiv">

            <span data-aos="fade-up" className="smallText">
              Our Packages
            </span>

            <h1 data-aos="fade-up" className="homeTitle">
              Search Your Holiday
            </h1>
          </div>

          <div  data-aos="fade-up" className="cardDiv grid">
           
            <div className="destinationInput">
              <label htmlFor="city">Search Your Destination</label>
              <div className="input flex">
                <input type="text" placeholder='Enter name here...' />
                <GrLocation className='icon'/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Select Your Date:</label>
              <div className="input flex">
                <input type="date"/>
              </div>
            </div>

            <div className="priceInput">
             <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">${value}</h3>
             </div>

             <div className="input flex">
              <input type="range" max="5000" min="1000" name="" id="" onChange={(e)=>setValue(e.target.value)}/>
             </div>
            </div>

          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>
          </div>

          <div  data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
            </div>
            <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>

            </div>
          </div>
        </div>
     
   </section>
  )
}

export default Home;