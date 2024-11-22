
export default function Scroll() {
  return (
    <div className="pt-12">
      <div className="absolute scroll-down bottom-10  left-1/2 transform -translate-x-1/2 translate-y-0 flex flex-col items-center z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start overflow-hidden">
          <div className="w-1 h-1 bg-white mt-1 animate-scroll"></div>
        </div>
        <p className="t mt-1 text-sm text-white">Scroll Down</p>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(1.5rem);
          }
          100% {
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .scroll-down {
            bottom: 4rem;
          }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}