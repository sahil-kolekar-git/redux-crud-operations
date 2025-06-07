import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../Features/postSlice";

const Home = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return (
    <>
      <div className="flex h-[94vh] justify-center bg-violet-400 w-[calc(100vw-15px)] space-x-4 p-4 items-center">
        <span className="text-white font-bold text-6xl">Home Component</span>
      </div>
    </>
  );
};

export default Home;
