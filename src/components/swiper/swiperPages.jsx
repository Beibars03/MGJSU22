import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useRef } from "react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import Main from "../main/main";
import About from "../about/about";
import Agenda from "../agenda/agenda";
import Registration from "../registration/registration";
const SwiperPages = () =>{
    const swiperRef = useRef();
    const toSlide = (index) =>{
        swiperRef.current.slideTo(index)
    }
    return(
        <>
            <Swiper
                onSwiper={(swiper) =>{
                    swiperRef.current = swiper;
                }}
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
                <SwiperSlide><Main toSlide={toSlide}/></SwiperSlide>
                <SwiperSlide><About/></SwiperSlide>
                <SwiperSlide><Agenda/></SwiperSlide>
                <SwiperSlide><Registration/></SwiperSlide>
   
            </Swiper>
        </>
    )
}

export default SwiperPages