import Slider from "react-slick";

interface IBanner {
  data: IHome.Banner[];
}

const Board = (props: IBanner) => {
  const settings = {
    // dots: true, // Show navigation dots
    infinite: true, // Enable looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto swipe
    autoplaySpeed: 1500, // Time between swipes (in ms)
    fade: true, // Fade transition between slides
  };

  return (
    <div>
      {props.data.map((item, index) => {
        return (
          // <Slider {...settings}>
          <div className="relative px-5">
            <img
              src={item.imageUrl}
              alt="board"
              className="object-cover rounded-lg"
            />
            <div className="absolute flex items-center flex-col bottom-0 right-0 md:bottom-5 md:right-5 lg:bottom-20 lg:right-28 p-10">
              <p className="md:text-2xl lg:text-4xl font-bold italic">
                {item.title}
              </p>
              <p className="md:text-xl lg:text-3xl md:m-10 font-light">
                {item.description}
              </p>
            </div>
          </div>
          // </Slider>
        );
      })}
    </div>
  );
};

export default Board;
