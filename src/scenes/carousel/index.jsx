// import React, { useState } from 'react';
// import { carouselImages } from 'constants';

// const Carousel = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleThumbnailClick = (index) => {
//     setCurrentImage(index);
//   };

//   const handleNextClick = () => {
//     setCurrentImage((prevIndex) => (prevIndex + 1) % carouselImages.length);
//   };

//   const handlePrevClick = () => {
//     setCurrentImage((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <section className="flex flex-col items-center">
//       <div className="relative w-[300px] h-[300px] mb-4">
//         <img
//           src={carouselImages[currentImage].image}
//           alt={`Product ${carouselImages[currentImage].id}`}
//           className="w-full h-full object-cover rounded-lg cursor-pointer"
//           onClick={openModal}
//         />
//         <button
//           onClick={handlePrevClick}
//           className="absolute left-[10px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md md:hidden"
//         >
//           <img src="/images/icon-previous.svg" alt="prev" className="w-2 h-2" />
//         </button>
//         <button
//           onClick={handleNextClick}
//           className="absolute right-[10px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md md:hidden"
//         >
//           <img src="/images/icon-next.svg" alt="next" className="w-2 h-2" />
//         </button>
//       </div>
//       <div className="lg:grid lg:grid-cols-4 gap-2 w-[300px] hidden ">
//         {carouselImages.map((img, index) => (
//           <div
//             key={img.id}
//             className={`relative w-full h-[70px] rounded-lg cursor-pointer ${
//               currentImage === index ? 'border-2 border-orange-2 opacity-50' : 'border-2 border-transparent'
//             }`}
//             onClick={() => handleThumbnailClick(index)}
//           >
//             <img
//               src={img.thumb}
//               alt={`Thumbnail ${img.id}`}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-75 hidden md:flex">
//           <div className="relative w-[500px] h-[500px]">
//             <button
//               onClick={handlePrevClick}
//               className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
//             >
//               <img src="/images/icon-previous.svg" alt="prev" className="w-2 h-2 text-white-100" />
//             </button>
//             <img
//               src={carouselImages[currentImage].image}
//               alt={`Product ${carouselImages[currentImage].id}`}
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <button
//               onClick={handleNextClick}
//               className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
//             >
//               <img src="/images/icon-next.svg" alt="next" className="w-2 h-2" />
//             </button>
//             <button
//               onClick={closeModal}
//               className="absolute top-[-30px] right-0 rounded-full p-1 shadow-md hover-svg"
//             >
//               <img src="/images/icon-close.svg" alt="close" className="" />
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Carousel;

import { carouselImages } from "constants";
import React, { useState } from "react";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  const handlePrevClick = () => {
    setCurrentImage(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const handleNextClick = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  return (
    <section className="flex flex-col items-center">
      <div className=" relative w-[300px] h-[300px] mb-4">
        <img
          src={carouselImages[currentImage].image}
          alt={`Product ${carouselImages[currentImage].id}`}
          className="w-full h-full rounded-lg object-cover cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-[10px] transform -translate-y-1/2 rounded-full p-3 bg-white-100 shadow-md md:hidden "
        >
          <img src="/images/icon-previous.svg" alt="prev" className="w-2 h-2" />
        </button>

        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-[10px] transform -translate-y-1/2 rounded-full p-3 bg-white-100 shadow-md md:hidden "
        >
          <img src="/images/icon-next.svg" alt="prev" className="w-2 h-2" />
        </button>
      </div>

      <div className="w-[300px] lg:grid lg:grid-cols-4 gap-2 hidden">
        {carouselImages.map((img, index) => (
          <div
            key={img.id}
            className={`relative w-full h-[70px] rounded-lg cursor-pointer ${
              currentImage === index
                ? "border-2 border-orange-2 opacity-50"
                : "border-2 border-transparent"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={img.thumb}
              alt="thumbnail"
              className="w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black-100 z-10 md:flex items-center hidden justify-center bg-opacity-75">
          <div className="w-[500px] h-[500px] relative">
            <img
              src={carouselImages[currentImage].image}
              alt={`Product ${carouselImages[currentImage].id}`}
              className="w-full h-full rounded-lg object-cover cursor-pointer"
            />
            <button
              onClick={handlePrevClick}
              className="absolute top-1/2 left-[-16px] transform -translate-y-1/2 rounded-full p-3 bg-white-100 shadow-md "
            >
              <img
                src="/images/icon-previous.svg"
                alt="prev"
                className="w-2 h-2"
              />
            </button>

            <button
              onClick={handleNextClick}
              className="absolute top-1/2 right-[-16px] transform -translate-y-1/2 rounded-full p-3 bg-white-100 shadow-md "
            >
              <img src="/images/icon-next.svg" alt="prev" className="w-2 h-2" />
            </button>

            <button className="absolute right-0 top-[-18px]" onClick={() => setIsModalOpen(false)}>
              <img src="/images/icon-close.svg" alt="close" className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
