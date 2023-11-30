import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a computer engineering student at the Higher Institute of
            Computer Science and Communication Techniques of Hammam Sousse. I
            hold a bachelor's degree in telecommunications from the same
            institution. Currently, I aim to focus my career on the field of web
            development, specializing in creating responsive front-end
            applications that connect with APIs and other backend technologies.
            I am passionate about learning new technologies and recognize that
            there is more than one way to accomplish a task. Although I am
            particularly proficient in building front-end applications using
            HTML, CSS, JavaScript, and React and backend with NodeJs and
            MongoDb, I am a quick learner and can adapt to new tech stacks as
            needed. I believe that being a great developer is not about using a
            specific language but about choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            Throughout my academic journey, I have actively undertaken numerous
            academic projects to enhance my knowledge and skills in these
            technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects</Link>
          </p>
        </div>
        <div className="w-full he-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <Image className="rounded-xl" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
