import React, { useEffect } from 'react'
import './main.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
 

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';

const data = [
  {
    id: 1,
    imageSrc: img1,
    destTitle: 'Brown Bigbus',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia sapiente nihil corporis temporibus exercitationem, doloremque pariatur dolore tempore ab rem itaque, a rerum iure nulla. Ut veniam recusandae molestiae"

  },

  {
    id:2,
    imageSrc:img2,
    destTitle: 'Grey Metal Bridge',
    location: 'Sedny, Australia',
    grade: 'CULTURAL RELAX',
    fees: '$3000',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia sapiente nihil corporis temporibus exercitationem, doloremque pariatur dolore tempore ab rem itaque, a rerum iure nulla. Ut veniam recusandae molestiae"

  },
  {
    id:3,
    imageSrc:img3,
    destTitle: 'Brown High Rise Buildings',
    location: 'Pakistan',
    grade: 'CULTURAL RELAX',
    fees: '$200',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia sapiente nihil corporis temporibus exercitationem, doloremque pariatur dolore tempore ab rem itaque, a rerum iure nulla. Ut veniam recusandae molestiae"

  },
  {
    id:4,
    imageSrc:img4,
    destTitle: 'Fatima Jinnah Park',
    location: 'Pakistan',
    grade: 'REFRESHMENT',
    fees: '$230',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia sapiente nihil corporis temporibus exercitationem, doloremque pariatur dolore tempore ab rem itaque, a rerum iure nulla. Ut veniam recusandae molestiae"

  },
  {
    id:5,
    imageSrc:img5,
    destTitle: 'Pakistan Monument Islamabad',
    location: 'Pakistan',
    grade: 'CULTURAL PLACE',
    fees: '$100',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia sapiente nihil corporis temporibus exercitationem, doloremque pariatur dolore tempore ab rem itaque, a rerum iure nulla. Ut veniam recusandae molestiae"

  },
  {
    id:6,
    imageSrc:img6,
    destTitle: 'Lahore Fort Citadel',
    location: 'Pakistan',
    grade: 'CULTURAL RELAX',
    fees: '$400',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia sapiente nihil corporis temporibus exercitationem, doloremque pariatur dolore tempore ab rem itaque, a rerum iure nulla. Ut veniam recusandae molestiae"

  },
  {
    id:7,
    imageSrc:img7,
    destTitle: 'Badshahi Masjid',
    location: 'Pakistan',
    grade: 'MOSQUE',
    fees: '$100',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia sapiente nihil corporis temporibus exercitationem, doloremque pariatur dolore tempore ab rem itaque, a rerum iure nulla. Ut veniam recusandae molestiae"

  },
  {
    id:8,
    imageSrc:img8,
    destTitle: 'Islamia College Peshawar',
    location: 'Pakistan',
    grade: 'STUDY PLACE',
    fees: '$150',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia sapiente nihil corporis temporibus exercitationem, doloremque pariatur dolore tempore ab rem itaque, a rerum iure nulla. Ut veniam recusandae molestiae"

  },
  {
    id:9,
    imageSrc:img9,
    destTitle: 'Mazar-e-Quaid',
    location: 'Pakistan',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia sapiente nihil corporis temporibus exercitationem, doloremque pariatur dolore tempore ab rem itaque, a rerum iure nulla. Ut veniam recusandae molestiae"

  }

]



function Main() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <div data-aos="fade-right" className="title">
          Most visited destinations
        </div>
      </div>
      <div className="secContent grid">
        {data.map(({ id, imageSrc, destTitle, location, grade, fees, description }) => {
          return (
            <div data-aos="fade-up"  key={id} className="singleDestination">

              <div className="imageDiv">
                <img src={imageSrc} alt={destTitle} />
              </div>


              <div className="cardInfo">

                {/*title */}
                <h4 className="destTitle">
                  {destTitle}
                </h4>

                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className='name'>{location}</span>
                </span>

                {/* //Fees */}
                <div className="fees flex">
                  <div className="grade">
                    <span>{grade} <small>+1</small></span>
                  </div>

                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                {/* //Descriptions */}
                <div  data-aos="fade-up"  data-aos-duration="3000"className="desc">
                  <p>{description}</p>
                </div>

                {/* Button */}
                <div className="buttons">
                <button  data-aos="fade-up"  data-aos-duration="2000" className='btn flex'>
                  Details <HiOutlineClipboardCheck className="icon" />
                </button>
                <button  data-aos="fade-up"  data-aos-duration="2000" className='btn flex'>
                  Collect <MdOutlineCollectionsBookmark className="icon" />
                </button>
                </div>

              </div>
            </div>

          );
        })}
      </div>
    </section>
  )
}

export default Main;