import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { PageTypeImages } from "../../utils/images";
interface IBannerSearch {
  data: IBanner.Banner[];
}
const Search = (props: IBannerSearch) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative w-full h-screen px-5">
      <img
        src={PageTypeImages.bg}
        alt="background of search"
        className="object-cover h-screen sm:object-fill sm:w-full rounded-lg"
      />
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            className="w-full bg-white bg-opacity-80 p-4 pl-10 rounded-md"
          />
          <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};
export default Search;
