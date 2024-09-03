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
          <Slider {...settings}>
            <div className="relative p-5">
              <img src={item.imageUrl} alt="board" className="object-cover" />
              <div className="absolute flex items-center flex-col bottom-20 right-28 p-10">
                <p className="text-4xl font-bold italic">{item.title}</p>
                <p className="text-5xl m-10 font-light">{item.description}</p>
              </div>
            </div>
          </Slider>
        );
      })}
    </div>
  );
};

export default Board;
