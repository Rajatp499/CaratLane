import React, { useEffect } from "react";
import { useState } from "react";
const ImageGrid = () => {
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

    const [currentwindowWidth, setCurrentWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setCurrentWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }
    , []);

    return (
        <div
            className={`grid ${window.innerWidth > 980 ? "grid-cols-2 p-4" : "grid-cols-1 mt-6"} gap-4  h-fit `}
        >
            {window.innerWidth > 770 ? (
                // Desktop View
                <>
                    {/* Left Column */}
                    <div className="col-span-1">
                        <img
                            src={images[0].src}
                            alt={images[0].alt}
                            className="w-full h-full object-cover  shadow-md"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 grid grid-rows-2 gap-4">
                        {/* Top Image */}
                        <div className="row-span-1">
                            <img
                                src={images[1].src}
                                alt={images[1].alt}
                                className="w-full h-full object-cover  shadow-md"
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="row-span-1">
                            <img
                                src={images[2].src}
                                alt={images[2].alt}
                                className="w-full h-full object-cover  shadow-md"
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
                                className="w-full object-cover  shadow-md"
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};
export default ImageGrid;
