
// import img1 from '../assets/home/img1.webp';
// import img2 from '../assets/home/img2.webp';
// import img3 from '../assets/home/img3.webp';
// import article1 from '../assets/articles/article1.webp'
// import article2 from '../assets/articles/article2.webp'
// import article3 from '../assets/articles/article3.webp'

// import abc from '../assets/abc.jpg';
// import { useEffect, useState } from 'react';

// import Footer from './Footer';
// import Scroll from './Scroll';
// import Form from './Form';

// const Home = () => {
//       const bgStyles = {
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//       };

//       const images = [img1, img2, img3];
//       const [currentIndex, setCurrentIndex] = useState(0);

//       // Move to the next image in the carousel
//       const nextImage = () => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       };

//       useEffect(() => {
//             const interval = setInterval(nextImage, 3000); // Set the interval for automatic image transition
//             return () => clearInterval(interval); // Clean up the interval when the component unmounts
//       }, []);

//       return (
//             <div className="flex flex-col min-h-screen">
//                   {/* <Navbar /> */}
//                   <div className="flex-1" style={{ ...bgStyles, backgroundImage: `url(${abc})` }}>
//                         <section className="flex items-center justify-center py-10">
//                               <div
//                                     className="relative overflow-hidden w-[800px] h-[500px] "
//                                     style={{
//                                           position: 'relative',
//                                     }}
//                               >
//                                     {/* Flex container for images */}

//                                     <div
//                                           className="mt-[100px] flex transition-transform duration-1000 ease-in-out  sm:mt-10"
//                                           style={{
//                                                 transform: `translateX(-${currentIndex * 100}%)`,
//                                                 width: `${images.length * 40}%`,
//                                           }}
//                                     >
//                                           {images.map((image, index) => (
//                                                 <img
//                                                       key={index}
//                                                       src={image}
//                                                       alt={`carousel-${index}`}
//                                                       className="w-full h-full object-contain"
//                                                 />
//                                           ))}
//                                     </div>


//                               </div>
//                               <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-name2 text-lg sm:text-sm lg:text-4xl font-bold z-10 w-[400px] sm:w-[800px] md:w-[1000px] text-center">
//                                     If there is a paradise on earth,
//                                     It is this,it is this
//                               </p>

//                         </section>

//                         <Scroll />

//                         <div
//                               className="flex justify-center items-center h-[500px] pt-5"
//                               style={{
//                                     backgroundImage: `url(${abc})`,
//                                     backgroundSize: '100% auto', // Keep width 100%, auto-adjust the height
//                                     backgroundPosition: 'center',
//                                     backgroundRepeat: 'no-repeat',
//                               }}
//                         >
//                               <div className="h-auto w-full sm:w-[1000px] backdrop-blur-sm px-5 pt-10 rounded-3xl mt-10" id="about">
//                                     <p className="text-white font-bold lg:text-2xl sm:text-xs text-justify">
//                                           Kashmir, often called Paradise on Earth is renowned for its breathtaking
//                                           landscapes, majestic mountains, and serene lakes that seem straight out of a
//                                           dream. Encircled by the snow-capped peaks of the Himalayas and adorned with
//                                           lush valleys and emerald forests, Kashmir natural beauty is unmatched. The
//                                           famous Dal Lake, dotted with colorful shikaras (wooden boats) and floating
//                                           gardens, reflects the surrounding mountains and offers a tranquil experience
//                                           to visitors. During spring, the valleys burst into a vibrant array of colors
//                                           as flowers bloom across the region, while in winter, a soft blanket of snow
//                                           transforms Kashmir into a wonderland for skiers and nature lovers alike. The
//                                           sound of flowing rivers, the sight of verdant meadows, and the fragrance of
//                                           saffron and pine make Kashmir a sensory haven, drawing travelers from around
//                                           the world to its unparalleled splendor.
//                                     </p>
//                               </div>


//                         </div>

//                         <div className="flex items-center justify-center pt-10">
//                               <h1 className="text-white bg-emerald-950 px-6 sm:px-10 md:px-[150px] py-3 sm:py-5 rounded-3xl  text-base sm:text-xl md:text-3xl lg:text-4xl text-center mt-20 sm:mt-0">
//                                     You can read more from these articles
//                               </h1>
//                         </div>


//                         <div className="flex flex-col sm:flex-row sm:space-x-[50px] space-y-6 sm:space-y-0 items-center justify-center pt-[50px]" >
//                               <div className="flex flex-col items-center" >
//                                     <a href="https://www.thomascook.in/india-tourism/kashmir" target='_blank'>
//                                           <img src={article1} alt="Image 1" className="h-[200px] rounded-2xl" />
//                                     </a>
//                                     {/* <p className="mt-2 text-center text-2xl text-white">Image 1 Description</p> */}
//                               </div>
//                               <div className="flex flex-col items-center">
//                                     <a href="https://the-shooting-star.com/what-no-one-tells-you-about-visiting-kashmir/" target='_blank'>
//                                           <img src={article2} alt="Image 2" className="h-[200px] rounded-2xl" />
//                                     </a>
//                                     {/* <p className="mt-2 text-center text-2xl text-white">Image 2 Description</p> */}
//                               </div>
//                               <div className="flex flex-col items-center">
//                                     <a href="https://www.jktdc.co.in/" target='_blank'>
//                                           <img src={article3} alt="Image 3" className=" h-[200px] rounded-2xl" />
//                                     </a>
//                                     {/* <p className="mt-2 text-center text-2xl text-white">Image 3 Description</p> */}
//                               </div>
//                         </div>



//                         <Form />
//                   </div>
//                   <Footer />
//             </div>
//       );
// };

// export default Home;



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Places.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';




import img1 from '../assets/home/img1.webp';
import img2 from '../assets/home/img2.webp';
import img3 from '../assets/home/img3.webp';
import article1 from '../assets/articles/article1.webp'
import article2 from '../assets/articles/article2.webp'
import article3 from '../assets/articles/article3.webp'

import abc from '../assets/abc.jpg';

import Footer from './Footer';
import Scroll from './Scroll';
import Form from './Form';

const Home = () => {
      const bgStyles = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
      };



      return (
            <div className="flex flex-col min-h-screen">
                  {/* <Navbar /> */}
                  <div className="flex-1" style={{ ...bgStyles, backgroundImage: `url(${abc})` }}>
                        <section className="flex items-center justify-center py-10 ">
                              <div
                                    className="relative overflow-hidden  "
                                    style={{
                                          position: 'relative',
                                    }}
                              >

                                    <Swiper
                                          effect={'coverflow'}
                                          grabCursor={true}
                                          centeredSlides={true}
                                          slidesPerView={'auto'}
                                          coverflowEffect={{
                                                rotate: 50,
                                                stretch: 0,
                                                depth: 100,
                                                modifier: 1,
                                                slideShadows: true,
                                          }}
                                          pagination={true}
                                          modules={[EffectCoverflow, Pagination]}
                                          className="mySwiper"
                                    >
                                          <SwiperSlide>
                                                <img src={img1}
                                                      loading='lazy'
                                                />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <img src={img2} />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <img src={img3} />
                                          </SwiperSlide>

                                    </Swiper>



                              </div>
                              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-name2 text-lg sm:text-sm lg:text-5xl font-bold z-10 w-[400px] sm:w-[800px] md:w-[1000px] text-center">
                                    If there is a paradise on earth,
                                    It is this,it is this
                              </p>

                        </section>

                        <Scroll />

                        <div
                              className="flex justify-center items-center h-[500px] pt-5"
                              style={{
                                    backgroundImage: `url(${abc})`,
                                    backgroundSize: '100% auto', // Keep width 100%, auto-adjust the height
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                              }}
                        >
                              <div className="h-auto w-full sm:w-[1000px] backdrop-blur-sm px-5 pt-10 rounded-3xl mt-10" id="about">
                                    <p className="text-white font-bold lg:text-2xl sm:text-xs text-justify">
                                          Kashmir, often called Paradise on Earth is renowned for its breathtaking
                                          landscapes, majestic mountains, and serene lakes that seem straight out of a
                                          dream. Encircled by the snow-capped peaks of the Himalayas and adorned with
                                          lush valleys and emerald forests, Kashmir natural beauty is unmatched. The
                                          famous Dal Lake, dotted with colorful shikaras (wooden boats) and floating
                                          gardens, reflects the surrounding mountains and offers a tranquil experience
                                          to visitors. During spring, the valleys burst into a vibrant array of colors
                                          as flowers bloom across the region, while in winter, a soft blanket of snow
                                          transforms Kashmir into a wonderland for skiers and nature lovers alike. The
                                          sound of flowing rivers, the sight of verdant meadows, and the fragrance of
                                          saffron and pine make Kashmir a sensory haven, drawing travelers from around
                                          the world to its unparalleled splendor.
                                    </p>
                              </div>


                        </div>

                        <div className="flex items-center justify-center pt-10">
                              <h1 className="text-white bg-emerald-950 px-6 sm:px-10 md:px-[150px] py-3 sm:py-5 rounded-3xl  text-base sm:text-xl md:text-3xl lg:text-4xl text-center mt-20 sm:mt-0">
                                    You can read more from these articles
                              </h1>
                        </div>


                        <div className="flex flex-col sm:flex-row sm:space-x-[50px] space-y-6 sm:space-y-0 items-center justify-center pt-[50px]" >
                              <div className="flex flex-col items-center" >
                                    <a href="https://www.thomascook.in/india-tourism/kashmir" target='_blank'>
                                          <img src={article1} alt="Image 1" className="h-[200px] rounded-2xl" />
                                    </a>
                                    {/* <p className="mt-2 text-center text-2xl text-white">Image 1 Description</p> */}
                              </div>
                              <div className="flex flex-col items-center">
                                    <a href="https://the-shooting-star.com/what-no-one-tells-you-about-visiting-kashmir/" target='_blank'>
                                          <img src={article2} alt="Image 2" className="h-[200px] rounded-2xl" />
                                    </a>
                                    {/* <p className="mt-2 text-center text-2xl text-white">Image 2 Description</p> */}
                              </div>
                              <div className="flex flex-col items-center">
                                    <a href="https://www.jktdc.co.in/" target='_blank'>
                                          <img src={article3} alt="Image 3" className=" h-[200px] rounded-2xl" />
                                    </a>
                                    {/* <p className="mt-2 text-center text-2xl text-white">Image 3 Description</p> */}
                              </div>
                        </div>



                        <Form />
                  </div>
                  <Footer />
            </div>
      );
};

export default Home;




