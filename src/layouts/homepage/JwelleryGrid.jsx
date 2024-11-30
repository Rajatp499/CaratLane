import React from "react";
import { useEffect, useState } from "react";
import classNames from "classnames";
function JwelleryGrid() {
    const jwellery = [
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/Desktop_1.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/Desktop_2.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/Desktop_3.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/Desktop_4.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/Desktop_5.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/Desktop_6.jpg",
    ];
    const jwelleryMobile = [
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/mobile_1.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/mobile_2.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/mobile_3.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/mobile_4.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/mobile_5.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/APPLP/6tiles/01/mobile_6.jpg",
    ];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    const outerStyle = classNames(
        "grid grid-cols-2 gap-5 justify-center items-center place-content-center",
        "md:grid-cols-3"
    );
    const imageStyle = classNames("rounded-md w-full h-full object-cover");
    return (
        <div className="p-6 sm:p-3">
            <div className={outerStyle}>
                {(windowWidth > 1024 ? jwellery : jwelleryMobile).map(
                    (jwellery, index) => (
                        <div
                            key={index}
                            className="hover:scale-[101%] transform transition duration-150"
                        >
                            <img
                                src={jwellery}
                                alt="jwellery"
                                className={imageStyle}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
export default JwelleryGrid;
