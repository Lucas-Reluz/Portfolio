import { SwiperSlide } from "swiper/react";
import Navbar from "../../components/statics/navbar";
import Slider from "../../components/swiper/slider";
import '../projects/projects.css'


const settings = {
    spaceBetween: 50,
    sliderPerView: 3,
};

function Projects() {
    return (
        <>
            <Navbar />
            <div className="ds">
                <Slider settings={settings}>
                    <SwiperSlide className="swp">
                        <h1>OI1</h1>
                    </SwiperSlide>
                    <SwiperSlide className="swp">
                        <h1>OI2</h1>
                    </SwiperSlide>
                    <SwiperSlide className="swp">
                        <h1>OI3</h1>
                    </SwiperSlide>
                    <SwiperSlide className="swp">
                        <h1>OI4</h1>
                    </SwiperSlide>
                </Slider>
            </div>
        </>
    )
}
export default Projects;