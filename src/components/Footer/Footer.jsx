import React, { useEffect } from 'react'
import './footer.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import video2 from '../../assets/video2.mp4';
import { FiSend, FiChevronRight } from 'react-icons/fi'
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FaTripadvisor } from 'react-icons/fa'

function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>

      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4" ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small data-aos="fade-up">KEEP IN TOUCH</small>
            <h2 data-aos="fade-up">Travel with us</h2>
          </div>

          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>


        <div  className="footerCard flex">
          <div className="footerIntro flex">

            <div className="logoDiv">
              <a href="/" className="logo flex">
                <MdOutlineTravelExplore className="icon" />Travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerPararaph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis voluptates, officia dolorum tempora ratione fugiat neque sit natus et voluptatum id eaque illum, suscipit, beatae at nihil accusamus quas.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>

          </div>

          <div className="footerLinks grid">

            {/* Group one */}

            <div data-aos="fade-up" data-aos-duration="2000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourisim
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>


            </div>

             {/* Group two */}

             <div data-aos="fade-up" data-aos-duration="2000" className="linkGroup">
              <span className="groupTitle">
               PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripMate
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>


            </div>
             {/* Group Three */}

             <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
              CITIES
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Peshawar
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Islamabad
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Lahore
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Karachi
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Skardu
              </li>


            </div>


          </div>


          <div data-aos="fade-up"  data-aos-duration="3000" className="footerDiv flex">
            <small >BEST TRAVEL WEBSITE THEME</small>
            <small  >COPYRIGHTS RESERVED - TECHCREATORS 2023</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer;