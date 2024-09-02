import dalin from "../../assets/photoaboutus/dalin.png";
import nita from "../../assets/photoaboutus/nita.png";
import raksa from "../../assets/photoaboutus/raksa.png";
function Ourteam() {
  return (
    <div>
      <div className="bg-gray-100 h-screen flex flex-col justify-center py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Meet Our Team</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src={dalin}
                alt="Team Member 1"
                className="w-40 h-40 rounded-full mx-auto image-contain"
                style={{
                  objectFit: "cover",
                }}
              />
              <p className="text-lg mt-4 font-semibold">Dok Dalin</p>
            </div>
            <div className="text-center">
              <img
                src={nita}
                alt="Team Member 2"
                className="w-40 h-40 rounded-full mx-auto image-contain"
                style={{
                  objectFit: "cover",
                }}
              />
              <p className="text-lg mt-4 font-semibold">Chom Thonida</p>
            </div>
            <div className="text-center">
              <img
                src={raksa}
                alt="Team Member 3"
                className="w-40 h-40 rounded-full mx-auto image-contain"
                style={{
                  objectFit: "cover",
                }}
              />
              <p className="text-lg mt-4 font-semibold">Nhe Sokraksa</p>
            </div>
          </div>
          <p className="text-xl mt-8 max-w-2xl mx-auto">
            We’re university students majoring in Information Technology
            Engineering, and we created this website as part of a project
            practicum. Our team chose to focus on forests because we’re
            passionate about the topic and excited to share our knowledge and
            insights with you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
