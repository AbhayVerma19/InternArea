import React from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../feature/UserSlice";
import { Link } from "react-router-dom";

function Profile() {
  const user = useSelector(selectuser);
  return (
    <div>
      <div className="flex items-center mt-9 mb-4 justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-lg rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                src={user.photo}
                alt=""
                className="w-32 h-32 rounded-full mx-auto"
              />
            </div>
            <div className="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                {user.name}
              </h3>
            </div>
            <div className="text-s my-3">
              <td class=" px-2 py-2 text-gray-500 font-semibold">UID</td>
              <td class="px-2 py-2">{user.uid}</td>
            </div>
            <div>
              <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td class="px-2 py-2">{user.email}</td>
            </div>
            <div className="flex justify-center mt-3">
              <Link
                to="/userapplication"
                class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative">My Applications</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
