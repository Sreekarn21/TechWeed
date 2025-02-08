"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const courses = [
  { 
    id: 1, 
    name: "AI Track", 
    description: "Master AI and ML with real-world applications.", 
    image: "/images/ai.jpg",
    bgColor: "bg-blue-700",
    link: "/ai"
  },
  { 
    id: 2, 
    name: "Full Stack", 
    description: "Learn modern web development with MERN stack.", 
    image: "/images/fullstack.jpg",
    bgColor: "bg-green-700",
    link: "/fullstack"
  },
  { 
    id: 3, 
    name: "Data Science", 
    description: "Data visualization, ML, and deep learning.", 
    image: "/images/datascience.jpg",
    bgColor: "bg-purple-700",
    link: "/datascience"
  },
  { 
    id: 4, 
    name: "Cyber Security", 
    description: "Learn ethical hacking and cybersecurity strategies.", 
    image: "/images/cybersecurity.jpg",
    bgColor: "bg-orange-700",
    link: "/cybersecurity"
  }
];

export default function Courses() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-900 text-white px-10 py-16">
      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold tracking-wide mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore Our Courses
      </motion.h1>

      {/* Course Tiles - Large & Horizontal */}
      <div className="grid grid-cols-4 gap-10">
        {courses.map((course) => (
          <Link key={course.id} href={course.link}>
            <motion.div
              className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-2xl ${course.bgColor} text-white w-96 h-96 cursor-pointer transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={course.image} alt={course.name} width={200} height={200} className="rounded-lg" />
              <h2 className="text-3xl font-bold mt-6">{course.name}</h2>
              <p className="mt-4 text-gray-200 text-lg text-center">{course.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
