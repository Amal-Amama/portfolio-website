import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill, BsGithub } from "react-icons/bs";
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LE'S BUILS SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi,I'm <span className="text-[#5651e5]">Amal</span>
          </h1>
          <h1 className="py-4 text-gray-700"> An Engineer Student</h1>
          <p className="py-4 text-gray-600 maw-w-[70%] m-auto">
            student in the 3rd year of the engineering cycle at the Higher
            Institute of Informatics and Communication Technologies of Hammam
            Sousse, specializing in IT, I am looking for an internship
            opportunity to realize my end-of-study project (PFE). I am
            determined to bring the best of myself to a professional
            environment.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300   ">
              <Link href="https://www.linkedin.com/in/amama-amal-381231186">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300   ">
              <Link href="https://github.com/Amal-Amama">
                <BsGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300   ">
              <a href="mailto:amalamama5@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300   ">
              <Link href="/#about">
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
