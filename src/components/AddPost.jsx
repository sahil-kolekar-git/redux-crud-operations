import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePost } from "../Features/postSlice";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [data, setData] = useState({
    name: "",
    id: "",
    image: "",
  });

  let { image, id, name } = data;
  return (
    <div className="w-[calc(100vw-15px)] bg-violet-300 h-[calc(100vh-6vh)] p-5 flex justify-center">
      <form
        className="bg-violet-50 flex flex-col w-1/2 h-fit px-3 py-2 rounded-[5px] gap-4"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(savePost(data));
          navigate("/post");
          setData({
            name: "",
            id: "",
            image: "",
          });
        }}
      >
        <input
          className="px-4 py-2 outline-none focus:bg-gray-200 text-gray-600 rounded-[5px]"
          type="text"
          name="name"
          placeholder="enter name"
          value={name}
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <input
          className="px-4 py-2 outline-none focus:bg-gray-200 text-gray-600 rounded-[5px]"
          type="number"
          name="id"
          placeholder="enter id"
          value={id}
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <input
          className="px-4 py-2 outline-none focus:bg-gray-200 text-gray-600 rounded-[5px]"
          type="text"
          name="image"
          placeholder="enter url"
          value={image}
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-fit p-2 rounded-[5px] bg-violet-400 text-white"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
