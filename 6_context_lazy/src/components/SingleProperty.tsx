import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import useSWR from "swr";

type Props = {};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SingleProperty: React.FC<Props> = ({}): JSX.Element => {

  return (
    <section className="container">
      <hr />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            style={{
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url(${"https://cvr.com.vn/app/uploads/2022/09/z3704931436576_211281f87c476a4322f3458b3f96453e.jpg"})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url(${"https://cvr.com.vn/app/uploads/2022/09/z3704931436576_211281f87c476a4322f3458b3f96453e.jpg"})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url(${"https://cvr.com.vn/app/uploads/2022/09/z3704931436576_211281f87c476a4322f3458b3f96453e.jpg"})`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>

      <hr />
      <div className="row">
        <div className="col-9">
          <h1>title</h1>
          <h2>Price: 200$</h2>

          <p className="lead">Excerpt</p>

          <ul className="list-group">
            <li className="list-group-item">Bedrooms: 3</li>
            <li className="list-group-item">Baths: 2</li>
            <li className="list-group-item">Space: 100 square meters</li>
          </ul>
        </div>

        <div className="col-3">
          <button 
          type="button" className="btn btn-primary">
            I'm interested in this property
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProperty;
