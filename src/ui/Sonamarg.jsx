import abc from '../assets/abc.jpg';
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

const Sonamarg = () => {
      const location = "Sonamarg";
      const bgStyles = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
      };

      return (
            <div className="relative" style={{ ...bgStyles, backgroundImage: `url(${abc})` }}>
                  <div className="absolute top-[100px] right-0 z-10 md:top-[100px] md:right-0 md:absolute bottom-0">
                        <div className="text-white">

                        </div>
                  </div>


                  <div className="flex justify-center items-center pt-10">
                        <button className=" text-white  backdrop-blur-lg px-20 py-5 rounded-md font-bold  transition-all duration-300">
                              <Weather location={location} />
                        </button>


                  </div>



                  {/* Swiper Section */}
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
                        pagination={{ clickable: true }}  // Add clickable option for pagination
                        modules={[EffectCoverflow, Pagination]}  // Import necessary Swiper modules
                        className="mySwiper"
                  >
                        <SwiperSlide>
                              <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" className="w-full h-auto" />
                        </SwiperSlide>
                  </Swiper>

                  <div className="pt-5 pb-5">
                        <div className="hidden sm:block">
                              <Scroll />
                        </div>
                  </div>

                  {/* Section with Description & Map */}
                  <div
                        style={{ ...bgStyles, backgroundImage: `url(${abc})` }}
                        className="flex flex-col md:flex-row items-center justify-center px-4 py-6 space-y-6 md:space-y-0 md:space-x-6"
                  >
                        <section className="mt-[200px] sm:mt-0 flex w-full md:w-[500px] h-auto text-base sm:text-lg md:text-xl lg:text-2xl p-6 rounded-lg bg-black/50 backdrop-blur-lg">

                              <p className="text-white text-justify ">
                                    Sonamarg, meaning Meadow of Gold is a breathtakingly beautiful hill station located in the northern Indian state of Jammu and Kashmir. Nestled in the Kashmir Valley, Sonamarg is known for its lush green meadows, snow-capped mountains, pristine rivers, and glacial beauty, making it one of the most picturesque destinations in the region. Located at an altitude of around 2,740 meters (8,990 feet) above sea level, Sonamarg lies about 80 kilometers northeast of Srinagar, the summer capital of Jammu and Kashmir.
                              </p>
                        </section>



                        <div className="w-full md:w-[1000px]">
                              <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.42202273834!2d75.2950248854554!3d34.010438907510895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f2a7b9509df%3A0x8c1cff001fb18c5!2sPahalgam!5e0!3m2!1sen!2sin!4v1731589843614!5m2!1sen!2sin"
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

                  <div className="px-4 py-10 sm:pt-rounded-sm mt-[200px] sm:mt-0"
                        style={{ ...bgStyles, backgroundImage: `url(${abc})` }}
                  >
                        <div className="flex justify-center items-center pt-20" style={{ height: "500px" }}>
                              <ReactPlayer
                                    url="https://youtu.be/MHZpkHqB-U0?si=pnDL28Stf-UfH9_R"
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

export default Sonamarg;
