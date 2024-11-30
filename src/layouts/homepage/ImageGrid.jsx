import React, { useState, useEffect } from "react";
import classNames from "classnames";

const ImageGrid = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const images = [
        {
            src: "https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/11-Nov/Responsive/27/Responsive-05.jpg",
            alt: "Shaya Black Friday Sale",
        },
        {
            src: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/Banner/Solitaire/02/2X.webp",
            alt: "CaratLane Solitaires",
        },
        {
            src: "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/Banner/Mens/01/2x.webp",
            alt: "Signor Collection",
        },
    ];

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener to track window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const outerdiv = classNames(
        "grid  grid-cols-1 mt-6 gap-3  h-fit ",
        
        "md:p-6 md:gap-6 md:grid-cols-2"
    );

    const imageStyle = "w-full h-full object-cover  shadow-md";

    const rightColStyle = classNames(
        "col-span-1 grid grid-rows-1 gap-3",
        "md:gap-6 md:grid-rows-2"
    );
    return (
        <div className={outerdiv}>
            {windowWidth > 768 ? (
                // Desktop View
                <>
                    {/* Left Column */}
                    <div className="col-span-1">
                        <img
                            src={images[0].src}
                            alt={images[0].alt}
                            className={imageStyle}
                        />
                    </div>

                    {/* Right Column */}
                    <div className={rightColStyle}>
                        {/* Top Image */}
                        <div className="row-span-1">
                            <img
                                src={images[1].src}
                                alt={images[1].alt}
                                className={imageStyle}
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="row-span-1">
                            <img
                                src={images[2].src}
                                alt={images[2].alt}
                                className={imageStyle}
                            />
                        </div>
                    </div>
                </>
            ) : (
                // Mobile View
                <>
                    {images.map((image, index) => (
                        <div key={index} className="w-full">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={imageStyle}
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};
export default ImageGrid;
