import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
      return (
            <div className="bg-black w-screen h-screen flex flex-col items-center justify-center">
                  <InfinitySpin
                        visible={true}
                        width="200" // Increase the size of the loader
                        height="200" // Optionally add height (if supported)
                        color="white"
                        ariaLabel="infinity-spin-loading"
                  />
                  <p className="text-white mt-5 text-xl font-semibold">Loading.....</p>
            </div>
      );
};

export default Loader;
