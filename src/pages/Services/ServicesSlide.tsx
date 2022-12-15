import {Swiper, SwiperSlide} from "swiper/react";
import icons from '../../images/icons.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
export const ServicesSlide = () => {
    return (
        <div className="swiperSlide">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >{
                arr.map((i, k) => (
                    <SwiperSlide key={k}>
                        <div className="swiperBox">
                            <h3>Интернет консультация специалистов</h3>
                            <p>Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога и других высококласных врачей</p>
                            <img src={icons} alt="icons"/>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}