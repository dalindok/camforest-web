import { AboutUsImages } from "../../utils/images";

function Aboutus() {
  return (
    <div className="w-screen h-screen flex flex-row pb-10 pt-3">
      <div
        className="w-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutUsImages.aboutUs})` }}>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mt-2">About Us</h1>
          <p className="text-2xl text-white mt-8">
            Welcome to CamForesty! Discover detailed information
          </p>
          <p className="text-2xl text-white mt-2">
            about different tree species, their benefits, and where to find
            them.
          </p>
          <p className="text-2xl text-white mt-2">
            We’re excited to help you explore and appreciate the beauty and
            importance of trees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
