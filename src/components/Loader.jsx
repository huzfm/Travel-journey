import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
      return (
            <div className="bg-black w-screen h-screen flex items-center justify-center">
                  <InfinitySpin
                        visible={true}
                        width="200"  // Increase the size of the loader
                        height="200" // Optionally add height (if supported)
                        color="white"
                        ariaLabel="infinity-spin-loading"
                  />
            </div>
      );
};

export default Loader;
