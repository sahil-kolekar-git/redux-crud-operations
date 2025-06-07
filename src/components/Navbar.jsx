import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updatePost } from "../Features/postSlice";

const Navbar = () => {
  let { data } = useSelector((state) => state.posts);
  let dispatch = useDispatch();

  return (
    <nav className="w-[calc(100vw-15px)] flex justify-between items-center px-2.5 py-1.5 bg-violet-500 text-white">
      <div className="flex space-x-10 items-center">
        <h3 className="text-[19px] font-bold">Redux - Crud Operations</h3>
        <div className="flex space-x-3 font-extralight">
          <Link to={"/create"}>Create Posts</Link>
          <Link to={"/post"}>All Posts {`(${data && data.length})`}</Link>
        </div>
      </div>
      <div className="flex space-x-1 items-center">
        <input
          onChange={(e) => {
            console.log(e.target.value);

            dispatch(updatePost(e.target.value));
          }}
          type="text"
          placeholder="search here"
          className="bg-white px-2 py-1 rounded-[5px] outline-none flex items-center text-gray-600  "
        />
        <button
          className="px-2 py-1 cursor-pointer bg-white text-black font-light rounded-[5px] hover:bg-black
        hover:text-white"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
