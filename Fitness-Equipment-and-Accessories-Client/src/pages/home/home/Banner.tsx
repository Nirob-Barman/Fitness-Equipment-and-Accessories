import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-[50vh] md:h-[100vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper flex justify-center items-center"
      >
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <img
              src={
                "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className=" w-full h-[50vh] md:h-[100vh]"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato text-orange-600">
              <h1 className="font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-orange-800 to-orange-500 bg-clip-text text-transparent pb-5">
                FiTFlex{" "}
              </h1>
              <p className="text-4xl text-orange-600 font-bold mx-10 bg-[#ebe6e6] opacity-90 py-2">
                We provide fitness equipment and accessories like you desire.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-800 to-orange-600 text-white font-bold rounded text-xl mt-10">
                All Products
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <img
              src={
                "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className=" h-[50vh] md:h-[100vh] w-screen"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato text-orange-600">
              <h1 className="font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent pb-5">
                FiTFlex{" "}
              </h1>
              <p className="text-4xl text-orange-600 font-bold mx-10 py-2">
                We provide fitness equipment and accessories like you desire.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-800 to-orange-600 text-white font-bold rounded text-xl mt-10">
                All Products
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <img
              src={
                "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className=" h-[50vh] md:h-[100vh] w-screen"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato text-orange-600">
              <h1 className="font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent pb-5">
                FiTFlex{" "}
              </h1>
              <p className="text-4xl text-orange-600 font-bold mx-10 py-2">
                We provide fitness equipment and accessories like you desire.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-800 to-orange-600 text-white font-bold rounded text-xl mt-10">
                All Products
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <img
              src={
                "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className=" h-[50vh] md:h-[100vh] w-screen"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato text-orange-600">
              <h1 className="font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent pb-5">
                FiTFlex{" "}
              </h1>
              <p className="text-4xl text-orange-600 font-bold mx-10 py-2">
                We provide fitness equipment and accessories like you desire.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-800 to-orange-600 text-white font-bold rounded text-xl mt-10">
                All Products
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <img
              src={
                "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className=" w-full h-[50vh] md:h-[100vh]"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato text-orange-600">
              <h1 className="font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-orange-800 to-orange-500 bg-clip-text text-transparent pb-5">
                FiTFlex{" "}
              </h1>
              <p className="text-4xl text-white font-bold mx-10  py-2">
                We provide fitness equipment and accessories like you desire.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-800 to-orange-600 text-white font-bold rounded text-xl mt-10">
                All Products
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <img
              src={
                "https://images.unsplash.com/photo-1590239926044-4131f5d0654d?q=80&w=1391&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className=" h-[50vh] md:h-[100vh] w-screen"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato text-orange-600">
              <h1 className="font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent pb-5">
                FiTFlex{" "}
              </h1>
              <p className="text-4xl text-orange-500 font-bold mx-10 py-2">
                We provide fitness equipment and accessories like you desire.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-800 to-orange-600 text-white font-bold rounded text-xl mt-10">
                All Products
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
