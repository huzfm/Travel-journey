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

const Yusmarg = () => {
      const location = "Yusmarg"
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
                              <img src="https://media.gettyimages.com/id/987796500/photo/yusmarg.jpg?s=612x612&w=0&k=20&c=Zo0TNlCEaHWJuf2A-3nj07G30l8ye_oU0ozr8IuirOs=" alt="Nature 2" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1540651088/photo/yusmarg-india-indian-men-fishing-in-a-lake-jammu-and-kashmir-yusmarg-india-on-june-13-2023-in.jpg?s=612x612&w=0&k=20&c=ixR6FBhx1qvDprKNw1O7GlMk05PHnWaYIwc11tMT24g=" alt="Nature 3" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1540523522/photo/yusmarg-india-horse-in-the-meadow-jammu-and-kashmir-yusmarg-india-on-june-13-2023-in-yusmarg.jpg?s=612x612&w=0&k=20&c=9j-SP7ZmaTUNZJRog-4kH1gpxBBd8MuUGBrh1pY-uSs=" alt="Nature 4" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.gettyimages.com/id/1517813273/photo/yusmarg-jammu-and-kashmir-india-a-kashmiri-man-works-at-a-wild-flower-field-in-yusmarg-some.jpg?s=612x612&w=0&k=20&c=mQpuyaJOXFwAiluFExVBDksBVmj54YtXbwG1vYnehJo=" alt="Nature 5" className="w-full h-auto" />
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
                                    Yusmarg, meaning Meadow of Jesus is a captivating and serene destination located in the Srinagar district of Jammu and Kashmir. Tucked away in the Pir Panjal range, Yusmarg is a breathtaking valley known for its lush green meadows, dense pine forests, and snow-capped mountains. The valley is often less crowded than other famous spots in Kashmir, which makes it a perfect retreat for those seeking peace and tranquility amidst nature.
                              </p>
                        </section>



                        <div className="w-full md:w-[1000px]">
                              <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.2531053386524!2d74.66182767555065!3d33.83158277324091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1ebec1a2e5857%3A0x4a7a26a00667903!2sYousmarg!5e0!3m2!1sen!2sin!4v1732286220929!5m2!1sen!2sin"
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
                                    url="https://www.youtube.com/watch?v=fqqNYPyfkg0"
                                    width="100%"
                                    height="100%"
                                    className="rounded-xl"
                              />
                        </div>
                  </div>




                  <Footer />
            </div >
      );
};

export default Yusmarg;
