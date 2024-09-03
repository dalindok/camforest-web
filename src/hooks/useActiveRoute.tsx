import { useLocation } from "react-router-dom";

export default () => {
  const param = useLocation();
  return param.pathname.split("/")[1]; // get the second part of the path (which is the route name)
};
