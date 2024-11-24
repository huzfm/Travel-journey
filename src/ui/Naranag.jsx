import bg from '../assets/bg.webp';
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../components/Places.css';
import Weather from "../components/Weather";

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Swipe from '../components/Swipe';

const Naranag = () => {
      const location = "Naranag"
      const bgStyles = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
      };

      return (
            <div className="relative" style={{ ...bgStyles, backgroundImage: `url(${bg})` }}>
                  <div className="flex justify-center items-center pt-10">
                        <button className=" text-white  backdrop-blur-lg px-20 py-5 rounded-md font-bold  transition-all duration-300">
                              <Weather location={location} />
                        </button>


                  </div>



                  {/* Swiper Section */}
                  <Swiper

                        effect={'coverflow'}
                        grbgursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                              rotate: 50,
                              stretch: 0,
                              depth: 500,
                              modifier: 1,
                              slideShadows: true,
                        }}
                        pagination={{ clickable: true }}  // Add clickable option for pagination
                        modules={[EffectCoverflow, Pagination]}  // Import necessary Swiper modules
                        className="mySwiper"
                        initialSlide={2}
                  >
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/632209931/photo/local-man-sitting-at-ruins-of-naranag-temple-naranag-valley-gandarbat-jammu-kashmir-india.jpg?s=612x612&w=0&k=20&c=W3Y6QsVUXF88OpCeg48TS1puvAYYTE6YSpohs9L58i4=" alt="Nature 2" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1540692010/photo/kangan-india-indian-tourists-in-naranag-temple-basin-jammu-and-kashmir-kangan-india-on-june.jpg?s=612x612&w=0&k=20&c=Y6BIjOPC2KLfpkIWSwGDHgsY2hBCe57lYvZOsfXOQFM=" alt="Nature 3" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1540665559/photo/kangan-india-ruins-of-naranag-temple-on-ancient-hindu-pilgrimage-site-jammu-and-kashmir.jpg?s=612x612&w=0&k=20&c=A4n8ReHf-0DyW4lpJqhFEDRLrLZcpaD2s-8YfNQh-K4=" alt="Nature 4" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1540661560/photo/kangan-india-ruins-of-naranag-temple-on-ancient-hindu-pilgrimage-site-jammu-and-kashmir.jpg?s=612x612&w=0&k=20&c=D0fubiTMvB5vYc8TiB4QPFhpWJxo5Pie_XCochKHHMQ=" alt="Nature 5" className="w-full h-auto" />
                        </SwiperSlide>
                  </Swiper>

                  <div className="pt-5 pb-5">
                        <div className="hidden sm:block">
                              <Scroll />
                        </div>
                  </div>
                  <Swipe />

                  {/* Section with Description & Map */}
                  <div
                        style={{ ...bgStyles, backgroundImage: `url(${bg})` }}
                        className="flex flex-col md:flex-row items-center justify-center px-4 py-6 space-y-6 md:space-y-0 md:space-x-6 "
                  >
                        <section className="mt-[200px] sm:mt-0 flex w-full md:w-[500px] h-auto text-base sm:text-lg md:text-xl lg:text-2xl p-6 rounded-lg bg-black/50 backdrop-blur-lg">

                              <p className="text-white text-justify ">

                                    Naranag is a picturesque village located in the Ganderbal district of Jammu and Kashmir, nestled amidst the lush green meadows and towering mountains of the Pir Panjal range. Known for its natural beauty and historical significance, Naranag is a perfect destination for those seeking a blend of tranquility, adventure, and cultural heritage.One of the most notable features of Naranag is its ancient Hindu temple complex, dedicated to Lord Shiva. The Naranag Temple, believed to date back to the 8th century, is a significant archaeological site and attracts pilgrims and history enthusiasts alike. The temple’s intricate stone carvings and its serene setting amidst alpine meadows make it a must-visit spot for anyone exploring the spiritual heritage of Kashmir
                              </p>
                        </section>



                        <div className="w-full md:w-[1000px]">
                              <iframe

                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.8406552647425!2d74.976018875574!3d34.35453327304468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e3d5f1d4294d43%3A0xc1ae7bf7efe3ced9!2sNaranaag!5e0!3m2!1sen!2sin!4v1732286529875!5m2!1sen!2sin"
                                    width="100%"
                                    height="550"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                              ></iframe>
                        </div>
                  </div>


                  {/* Video Section */}

                  <div className="px-4 py-10 sm:pt-rounded-sm"
                        style={{ ...bgStyles, backgroundImage: `url(${bg})` }}
                  >
                        <div className="flex justify-center items-center pt-20 mt-[200px] sm:mt-0" style={{ height: "500px" }}>
                              <ReactPlayer
                                    url="https://www.youtube.com/watch?v=XA2hT3oghmk"
                                    width="100%"
                                    height="100%"
                                    className="rounded-xl"
                              />
                        </div>
                  </div>




                  <Footer />
            </div>
      );
};

export default Naranag;
