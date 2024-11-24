

import { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Places.css';
import Footer from './Footer';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Swipe from './Swipe';

const Places = () => {
      const [searchQuery, setSearchQuery] = useState('');

      const slidesData = [
            { img: "https://images.pexels.com/photos/27138094/pexels-photo-27138094/free-photo-of-a-forested-area-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600", text: 'Pahalgam', link: '/places/pahalgam' },
            { img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29ubWFyZ3xlbnwwfHwwfHx8MA%3D%3D", text: 'Sonamarg', link: '/places/sonamarg' },
            { img: "https://images.pexels.com/photos/15232505/pexels-photo-15232505/free-photo-of-chalets-at-a-skiing-resort.jpeg?auto=compress&cs=tinysrgb&w=600", text: 'Gulmarg', link: '/places/gulmarg' },
            { img: "https://images.pexels.com/photos/11121858/pexels-photo-11121858.jpeg?auto=compress&cs=tinysrgb&w=600", text: 'Drung Waterfall', link: '/places/drung' },
            { img: "https://vargiskhan.com/log/wp-content/uploads/2018/09/doodhpathri-3.jpg", text: 'Dhoodhpathri', link: '/places/dhoodhpathri' },
            { img: "https://vargiskhan.com/log/wp-content/uploads/2018/09/srinagar-to-aharbal-4.jpg", text: 'Aharbal Waterfall', link: '/places/ahrabal' },
            { img: "https://www.kashmirhills.com/wp-content/uploads/2024/01/Yusmarg-KAHMIRHILLS3.jpg", text: 'Yusmarg', link: '/places/yusmarg' },
            { img: "https://media.gettyimages.com/id/632209937/photo/ruins-of-naranag-temple-naranag-valley-gandarbat-jammu-kashmir-india.jpg?s=612x612&w=0&k=20&c=7trkTKMI5n5_NwvNEfGddS3aLIrcriyEeWdPgPszlcY=", text: 'Naranag', link: '/places/naranag' },
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
                        <Swipe />
                  </div>

                  <Footer />
            </div>
      );
};

export default Places;
