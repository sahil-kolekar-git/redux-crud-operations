import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../Features/postSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Posts = () => {
  let dispatch = useDispatch();
  let { isError, isLoading, data } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex h-[94vh] justify-center bg-violet-400 w-[calc(100vw-15px)] space-x-4 p-4 items-center">
        <AiOutlineLoading3Quarters className="class=mr-3 size-15 animate-spin text-white" />
        <button type="button" class=" text-white font-bold text-6xl" disabled>
          Loading Data…
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="box-border bg-violet-100 w-[calc(100vw-15px)] p-2 grid mt-3 gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center">
        {data.map((post) => {
          let { id, name, image } = post;
          return (
            <div
              key={id}
              className="w-full flex flex-col space-y-1.5 cursor-pointer"
            >
              <img src={image} alt={name} className=" object-cover" />
              <div className="flex justify-between px-[12px]">
                <span className="font-medium text-[18px]">{id}</span>
                <span className="font-medium text-[18px]">{name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
