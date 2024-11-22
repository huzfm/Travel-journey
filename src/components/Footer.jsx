const Footer = () => {
      return (
            <>
                  {/* First Footer Section */}
                  <div className="bg-gray-950">

                        <div className='flex items-center justify-center  text-white h-[50px] flex-col px-4 py-2'>
                              <p className="text-yellow-400 text-base sm:text-base md:text-base text-center">
                                    If you like this, give it a &#9733; on <a className="text-lg text-white" href="#">Github</a>
                              </p>
                        </div>
                        <div className='flex items-center justify-center  text-white h-[50px] flex-col px-4 py-2'>
                              <p className="font-semibold text-center mb-2  sm:text-base">
                                    Made with &#10084;&#65039; by <a className="underline hover:text-yellow-400">Huzaif Mushtaq</a>
                              </p>
                        </div>
                  </div>

                  {/* Second Footer Section */}
            </>
      );
};

export default Footer;
