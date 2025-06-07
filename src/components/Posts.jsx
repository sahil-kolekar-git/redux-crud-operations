import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPost } from "../Features/postSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { isError, isLoading, data } = useSelector((state) => state.posts);

  if (isLoading) {
    return (
      <div className="flex h-[94vh] justify-center bg-violet-400 w-[calc(100vw-15px)] space-x-4 p-4 items-center">
        <AiOutlineLoading3Quarters className="class=mr-3 size-15 animate-spin text-white" />
        <button
          type="button"
          className=" text-white font-bold text-6xl"
          disabled
        >
          Loading Data…
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="box-border bg-violet-100 w-[calc(100vw-15px)] p-2 grid mt-3 gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center">
        {data &&
          data.map((post) => {
            let { id, name, image } = post;
            return (
              <div key={id} className="w-full flex flex-col space-y-1.5">
                <img src={image} alt={name} className=" object-cover" />
                <div className="flex justify-between items-center px-[12px]">
                  <div>
                    <span className="font-medium text-[18px] mr-2">{id}</span>
                    <span className="font-medium text-[18px]">{name}</span>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="cursor-pointer mr-1"
                      onClick={() => {
                        navigate(`/post/${id}`);
                      }}
                    >
                      <FaEdit className="text-xl" />
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(deletePost(id));
                      }}
                    >
                      <MdDeleteOutline className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Posts;
