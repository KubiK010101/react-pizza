import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card";

import "swiper/css";

export default ({ children, products,title,...props }) => {

    return (
        <div className="overflow-x-hidden pb-[50px]">
            <div className="container mx-auto">
                <div className="text-white text-3xl my-[20px]">{title}</div>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    className="overflow-visible"
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {products?.map((x) => (
                        <>
                            <SwiperSlide key={x.id} className="max-w-[329px]">
                                <Card product={x}></Card>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
