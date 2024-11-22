import Weather from './Weather';

const Test = () => {
      const location = "Goa"; // Single destination

      return (
            <div className="single-destination">
                  <h2 className="text-3xl font-bold mb-4">Explore {location}</h2>
                  <Weather location={location} />
            </div>
      );
};

export default Test;
