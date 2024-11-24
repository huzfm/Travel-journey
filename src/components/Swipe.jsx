const Swipe = () => {
      return (
            <>
                  <p className="text-white text-2xl flex items-center justify-center pt-10 sm:hidden">
                        <span className="ml-4 inline-block animate-swipe font-name">
                              swipe for more &rarr;
                        </span>
                  </p>
                  <style>
                        {`
                      @keyframes swipe {
                          0% {
                              transform: translateX(0);
                          }
                          50% {
                              transform: translateX(20px);
                          }
                          100% {
                              transform: translateX(0);
                          }
                      }
  
                      .animate-swipe {
                          animation: swipe 1.5s infinite ease-in-out;
                      }
                  `}
                  </style>
            </>
      );
};

export default Swipe;
