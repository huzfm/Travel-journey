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

const Gulmarg = () => {
      const location = "Gulmarg"
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
                        <button className=" text-white  backdrop-blur-lg px-20 py-5 rounded-md font-bold   transition-all duration-300">
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
                              <img src="https://media.istockphoto.com/id/532959878/photo/gulmarg-high-peaks.jpg?s=612x612&w=0&k=20&c=uQi-PwVPOhJBvba63DPg9k6Cyqud5v7UgE0xLiXnJ58=" alt="Nature 2" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.istockphoto.com/id/516364306/photo/snow-scape-with-mountains-and-trees-in-kashmir.jpg?s=612x612&w=0&k=20&c=ra-dObcecgA-CY3ToZ7REtTxp20AuXXS3FSiyH7CMjg=" alt="Nature 3" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.istockphoto.com/id/665366534/photo/gandola-cable-car-in-gulmarg.jpg?s=612x612&w=0&k=20&c=15HVHYGv3e0AVTLI5B1W1RzIVAOsiAXvqFgfsbVsJYg=" alt="Nature 4" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.istockphoto.com/id/471791181/photo/snowboarding.jpg?s=612x612&w=0&k=20&c=-8D4wQfNTyLYvkjtHhDnHEfxuhlijPSim_Nne1kSoLI=" alt="Nature 5" className="w-full h-auto" />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src="https://media.istockphoto.com/id/1045556518/photo/man-jumping-with-snowboard.jpg?s=612x612&w=0&k=20&c=YSN9Yr69wGatkpYLXGhJtQ9NIDXfMvlUwclqOzZl1vQ=" alt="Nature 6" className="w-full h-auto" />
                        </SwiperSlide>
                  </Swiper>

                  <div >
                        <div className="hidden sm:block pt-0">
                              <Scroll />
                        </div>
                  </div>
                  <Swipe />

                  {/* Section with Description & Map */}
                  <div
                        style={{ ...bgStyles, backgroundImage: `url(${bg})` }}
                        className="flex flex-col md:flex-row items-center justify-center px-4 py-6 space-y-6 md:space-y-0 md:space-x-6 mt-10"
                  >
                        <section className="mt-[200px] sm:mt-0 flex w-full md:w-[500px] h-auto text-base sm:text-lg md:text-xl lg:text-2xl p-6 rounded-lg bg-black/50 backdrop-blur-lg">
                              <p className="text-white text-justify ">
                                    Gulmarg is a stunning hill station and ski resort located in the Pir Panjal range of the Indian-administered Jammu and Kashmir region. The name Gulmarg translates to the meadow of flowers in Urdu, and it truly lives up to its name with lush green meadows adorned with a wide variety of colorful wildflowers during the summer months. Situated at an altitude of around 2,690 meters (8,825 feet), Gulmarg is one of the most popular tourist destinations in India, especially known for its scenic beauty, adventure sports, and tranquil ambiance.
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
                        style={{ ...bgStyles, backgroundImage: `url(${bg})` }}
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

export default Gulmarg;
