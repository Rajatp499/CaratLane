import React from "react";
import { IoChevronBackCircleOutline,IoChevronForwardCircleOutline } from "react-icons/io5";
const ImageSliderControls = ({ currentSlide, totalSlides, onPrev, onNext }) => {
    return (
        <div className="flex items-center justify-center space-x-4 mt-4 absolute bottom-[26px] left-1/2 translate-x-[-50%]">
            {/* Left Arrow */}
            <IoChevronBackCircleOutline 
                onClick={onPrev}
                size={40}
            />
            {/* Dots */}
            <div className="flex items-center space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                            currentSlide === index
                                ? "bg-purple-500"
                                : "bg-gray-300"
                        }`}
                    ></div>
                ))}
            </div>

            {/* Right Arrow */}
            <IoChevronForwardCircleOutline 
                onClick={onNext}
                size={40}
            />
        </div>
    );
};
export default ImageSliderControls;
