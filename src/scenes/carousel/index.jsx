import React, { useState } from 'react';
import { carouselImages } from 'constants';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  const handleNextClick = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrevClick = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="relative w-[300px] h-[300px] mb-4" onClick={openModal}>
        <img
          src={carouselImages[currentImage].image}
          alt={`Product ${carouselImages[currentImage].id}`}
          className="w-full h-full object-cover rounded-lg cursor-pointer"
        />
      </div>
      <div className="lg:grid lg:grid-cols-4 gap-2 w-[300px] hidden lg:block">
        {carouselImages.map((img, index) => (
          <div
            key={img.id}
            className={`relative w-full h-[70px] rounded-lg cursor-pointer ${
              currentImage === index ? 'border-2 border-orange-2 opacity-50' : 'border-2 border-transparent'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={img.thumb}
              alt={`Thumbnail ${img.id}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-[500px] h-[500px]">
            <button
              onClick={handlePrevClick}
              className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
            >
              <img src="/images/icon-previous.svg" alt="prev" className="w-2 h-2" />
            </button>
            <img
              src={carouselImages[currentImage].image}
              alt={`Product ${carouselImages[currentImage].id}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={handleNextClick}
              className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
            >
              <img src="/images/icon-next.svg" alt="next" className="w-2 h-2" />
            </button>
            <button
              onClick={closeModal}
              className="absolute top-[-30px] right-0  rounded-full p-1 shadow-md"
            >
              <img src="/images/icon-close.svg" alt="close" className="hover:text-orange-2" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
