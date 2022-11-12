import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import Main from "../main/main";
import About from "../about/about";

const SwiperPages = () =>{
    return(
        <>
            <Swiper
                direction={"vertical"}
                speed = {800}
                slidesPerView={"auto"}
                loop = {true}
                loopedSlides = {3}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="swiper-pages"
            >
                <SwiperSlide><Main/></SwiperSlide>
                <SwiperSlide><About/></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                
            </Swiper>
        </>
    )
}

export default SwiperPages