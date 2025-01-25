import {useState} from "react";
import {
  FiChevronRight as RightArrow,
  FiChevronLeft as LeftArrow,
} from "react-icons/fi";

export type CarouselProps = {
  pictures: string[];
  altText: string;
};

export default function Carousel({pictures, altText}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
      {/* Image */}
      <img
        src={pictures[currentIndex]}
        alt={`${altText} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Navigation Buttons */}
      {pictures.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#FF6060] text-white p-2 rounded-full hover:bg-[#FF4040] transition"
          >
            <LeftArrow className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#FF6060] text-white p-2 rounded-full hover:bg-[#FF4040] transition"
          >
            <RightArrow className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-sm px-4 py-1 rounded-full">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}
