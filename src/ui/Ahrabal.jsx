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

const Ahrabal = () => {
      const location = "Aharbal"
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
                        initialSlide={2}
                  >
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1246170483/photo/kulgam-jammu-and-kashmir-india-a-view-of-partially-frozen-waterfall-of-aharbal-during-a-cold.jpg?s=612x612&w=0&k=20&c=GS4N-a0kIfguCd2TH807tbsSDfWsNGS4feYEupuEt0I=" alt="Nature 2" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1242676089/photo/a-general-view-of-the-aharbal-waterfall-also-known-as-niagara-waterfall-of-kashmir-in-kulgam.jpg?s=612x612&w=0&k=20&c=j4DJByYAz8d0BX1-3oKPPkZu8fdYkHGjRYoFaPnK9FQ=" alt="Nature 3" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1242675849/photo/visitors-explore-the-aharbal-waterfall-also-known-as-niagara-waterfall-of-kashmir-in-kulgam.jpg?s=612x612&w=0&k=20&c=m4QGVUx0AufQuegl5RGUT0eA0j4W7FTMigRsNChpMDo=" alt="Nature 4" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1156970801/photo/aharbal-kulgam-india-river-veshu-flows-under-the-foothill-of-himalayas-during-a-cloudy-day-in.jpg?s=612x612&w=0&k=20&c=AXwXTcaDeiFoj9Zc21U2Izk0fY9pKvsR7gkf8MKP5B4=" alt="Nature 5" className="w-full h-auto" />
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
                                    Aharbal Waterfall, often referred to as the Niagara of Kashmir is a breathtaking natural wonder located in the Kupwara district of Jammu and Kashmir. Nestled in the verdant forests of the Pir Panjal range, Aharbal is one of the most stunning and lesser-known waterfalls in the region. The waterfall cascades down from a height of about 25 meters, creating a spectacular sight as the water crashes into the gorge below, surrounded by steep cliffs and lush greenery.


                              </p>
                        </section>



                        <div className="w-full md:w-[1000px]">
                              <iframe

                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13286.247962246816!2d74.76741315652406!3d33.64259732302001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1e3548f1b25a1%3A0x4767c81005a48274!2sAharbal%20192303!5e0!3m2!1sen!2sin!4v1732285733788!5m2!1sen!2sin"
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
                                    url="https://www.youtube.com/watch?v=T3lDh_ggKbU"
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

export default Ahrabal;
