

import { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Places.css';
import Footer from './Footer';
import pahalgam from '../assets/places/pahalgam.webp';
import sonamarg from '../assets/places/sonamarg.webp';
import gulmarg from '../assets/places/gulmarg.webp';
import drung from '../assets/places/drung.webp';
import doodhpathri from '../assets/places/doodhpathri.webp';
import aharbal from '../assets/places/aharbal.webp';
import Yusmarg from '../assets/places/Yusmarg.webp';
import naranag from '../assets/places/naranag.webp';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Places = () => {
      const [searchQuery, setSearchQuery] = useState('');

      const slidesData = [
            { img: pahalgam, text: 'Pahalgam', link: '/places/pahalgam' },
            { img: sonamarg, text: 'Sonamarg', link: '/places/sonamarg' },
            { img: gulmarg, text: 'Gulmarg', link: '/places/gulmarg' },
            { img: drung, text: 'Drung Waterfall', link: '/places/drung' },
            { img: doodhpathri, text: 'Dhoodhpathri', link: '/places/dhoodhpathri' },
            { img: aharbal, text: 'Aharbal Waterfall', link: '/places/ahrabal' },
            { img: Yusmarg, text: 'Yusmarg', link: '/places/yusmarg' },
            { img: naranag, text: 'Naranag', link: '/places/naranag' },
      ];

      const filteredSlides = slidesData.filter((slide) =>
            slide.text.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const bgStyles = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
      };

      return (
            <div
                  className="flex flex-col min-h-screen"
                  style={{ backgroundImage: `url(${bg})`, ...bgStyles }}
            >
                  {/* Search Bar */}
                  <div className="relative pt-[100px]">
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 lg:w-[500px] sm:w[200px] bg-white rounded-2xl z-0">
                              <input
                                    type="text"
                                    placeholder="Search places..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full p-2 border rounded placeholder:text-black"
                              />
                        </div>
                  </div>


                  {/* Content Section */}
                  <div className="flex-grow">
                        {filteredSlides.length > 0 ? (
                              <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                          rotate: 50,
                                          stretch: 0,
                                          depth: 500,
                                          modifier: 1,
                                          slideShadows: true,
                                    }}
                                    pagination={true}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="mySwiper"
                              >
                                    {filteredSlides.map((slide, index) => (
                                          <SwiperSlide key={index} className="flex flex-col items-center">
                                                <Link to={slide.link} className="w-full flex flex-col items-center">
                                                      <p className="text-2xl text-white font-bold w-full rounded-3xl mb-2 text-center p-3 mt-3">
                                                            {slide.text}
                                                      </p>
                                                      <img
                                                            src={slide.img}
                                                            alt={slide.text}
                                                            className="w-full h-auto object-cover"
                                                            loading='lazy'
                                                      />
                                                </Link>
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                        ) : (
                              <div className="flex justify-center items-center h-full">
                                    <p className="text-3xl text-red-700 font-bold">
                                          No places found.

                                    </p>
                              </div>
                        )}
                  </div>

                  <Footer />
            </div>
      );
};

export default Places;
