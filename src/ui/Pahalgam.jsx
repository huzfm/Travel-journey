import { useMemo } from 'react';
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

const Pahalgam = () => {
      const location = "Pahalgam";

      const bgStyles = useMemo(() => ({
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
            backgroundImage: `url(${bg})`,
      }), []);

      return (
            <div className="relative" style={bgStyles}>
                  <div className="flex justify-center items-center pt-10">
                        <button className="text-white backdrop-blur-lg px-20 py-5 rounded-md font-bold transition-all duration-300">
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
                  >
                        {['nature-2', 'nature-3', 'nature-4', 'nature-5'].map((image, idx) => (
                              <SwiperSlide key={idx}>
                                    <img src={`https://swiperjs.com/demos/images/${image}.jpg`} alt={`Nature ${idx + 1}`} className="w-full h-auto" />
                              </SwiperSlide>
                        ))}
                  </Swiper>

                  <div className="pt-5 pb-5">
                        <div className="hidden sm:block">
                              <Scroll />
                        </div>
                  </div>

                  {/* Description & Map Section */}
                  <div style={bgStyles} className="flex flex-col md:flex-row items-center justify-center px-4 py-6 space-y-6 md:space-y-0 md:space-x-6">
                        <section className="mt-[200px] sm:mt-0 flex w-full md:w-[500px] h-auto text-base sm:text-lg md:text-xl lg:text-2xl p-6 rounded-lg bg-black/50 backdrop-blur-lg">
                              <p className="text-white text-justify">
                                    Pahalgam, known as the Valley of Shepherds is a breathtakingly beautiful town in Jammu and Kashmir, nestled at the confluence of the Lidder River and Sheshnag Lake.This picturesque destination is not just a haven for nature lovers but also a hub for adventure enthusiasts, being the starting point of the revered Amarnath Yatra and offering exciting trekking trails to stunning locations like Aru Valley and Betaab Valley. The serene Lidder River adds to Pahalgam’s charm, offering opportunities for thrilling white-water rafting. Aru Valley, known for its peace and trekking trails, and Baisaran Valley, often called Mini Switzerland for its pristine beauty
                              </p>

                        </section>

                        <div className="w-full md:w-[1000px]">
                              <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.42202273834!2d75.2950248854554!3d34.010438907510895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f2a7b9509df%3A0x8c1cff001fb18c5!2sPahalgam!5e0!3m2!1sen!2sin!4v1731589843614!5m2!1sen!2sin"
                                    width="100%"
                                    height="550"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                              />
                        </div>
                  </div>

                  {/* Video Section */}
                  <div className="px-4 py-10 sm:pt-rounded-sm" style={bgStyles}>
                        <div className="flex justify-center items-center pt-20 mt-[200px] sm:mt-0" style={{ height: "500px" }}>
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

export default Pahalgam;
