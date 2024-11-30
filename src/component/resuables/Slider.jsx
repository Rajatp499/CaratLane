import React, { useState, useEffect, useRef } from "react";
import ImageSliderControls from "./ImageSliderControls";
const Slider = () => {
    const images = [
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/Banner/GoldenFriday/01/Desktop.webp",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/10_OCT/Banner/Egold/1/Desktop_1920x694.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/Banner/Blog/Desktop_1920x694.jpg",
    ];

    const mobileImages = [
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/Banner/GoldenFriday/01/Mobile.webp",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/10_OCT/Banner/Egold/1/Mobile_768x890.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/Banner/Blog/Mobile_768x890.jpg",
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null); // Use useRef to store the interval ID
    const blob =
        "bg-[url('https://assets.cltstatic.com/images/responsive/common-sprite.png?v2.0')] bg-[length:600px] bg-[position:-149px_-200px] inline-block cursor-pointer w-[88px] h-[42px]  top-[100%] left-[50%] transform translate-y-[-39%] translate-x-[-50%] absolute bottom-0 z-10  ";

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);
    };

    // Function to reset the interval
    const resetInterval = () => {
        clearInterval(intervalRef.current);
        startInterval();
    };

    useEffect(() => {
        startInterval(); // Start the interval when the component mounts

        return () => clearInterval(intervalRef.current); // Cleanup the interval when the component unmounts
    }, []);

    const onPrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        resetInterval();
    };

    const onNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        resetInterval();
    };

    return (
        <div className="relative flex flex-col items-center">
            {window.innerWidth > 980
                ? images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`w-full object-cover transition-opacity ${
                            index === currentImageIndex
                                ? "opacity-100"
                                : "opacity-0 absolute top-0 left-0"
                        }`}
                    />
                ))
                : mobileImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`w-full object-cover transition-opacity ${
                            index === currentImageIndex
                                ? "opacity-100"
                                : "opacity-0 absolute top-0 left-0"
                        }`}
                    />
                ))}

            {/* Blob Div */}
            <ImageSliderControls
                totalSlides={images.length}
                currentSlide={currentImageIndex}
                onPrev={onPrev}
                onNext={onNext}
            />
            <div className={blob}></div>
        </div>
    );
};

export default Slider;
