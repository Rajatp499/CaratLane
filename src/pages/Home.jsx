import React from "react";
import ImageGrid from "../layouts/homepage/ImageGrid";
import JwelleryGrid from "../layouts/homepage/JwelleryGrid";
import Slider from "../component/resuables/Slider";
function Home() {
    return (
        <div>
            <Slider />
            <ImageGrid />
            <JwelleryGrid/>
        </div>
    );
}
export default Home;
