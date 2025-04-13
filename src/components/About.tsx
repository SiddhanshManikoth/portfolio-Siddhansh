"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-10 my-10">
     
          <motion.div
           
      
          >
            <Image
              src={'/sidd4k.png'}
              width={700}
              height={700}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-[500px]  hover:rotate-0 transition duration-200"
            />
          </motion.div>
      
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&apos;m Siddhansh Manikoth - a passionate Python programmer, full-stack web developer, and UI/UX designer. Welcome to my digital portfolio!
        </Paragraph>
        <Paragraph className="mt-4">
          With a Diploma in Information Technology (89% with First Class Distinction) from B.V.I.T. Belapur, I&apos;ve built a strong foundation in both front-end and back-end development. Since 2021, I&apos;ve been working as a freelance developer, crafting digital solutions that merge functionality with elegant design.
        </Paragraph>

        <Paragraph className="mt-4">
          My technical toolkit includes Python, JavaScript, HTML5, CSS3, and SQL, along with frameworks like React, Flask, Bootstrap, and TailwindCSS. I&apos;ve developed numerous projects ranging from e-commerce platforms and automation tools to browser-based games and blockchain applications on the Internet Computer Protocol.
        </Paragraph>
        <Paragraph className="mt-4">
          What sets me apart is my dual expertise in development and design. I completed the Daily UI Challenge, creating 100 unique design components, and I&apos;ve helped clients increase user engagement by an average of 40% through intuitive interface designs. My eye for detail ensures that everything I build not only works flawlessly but also provides an exceptional user experience.
        </Paragraph>
        <Paragraph className="mt-4">
          Some of my notable projects include an e-commerce platform with payment integration, a PDF-to-speech application for visually impaired users, interactive web games (Space Invaders, Breakout, Tic-Tac-Toe), and various automation tools built with Python. I&apos;ve also created a color palette extraction tool to help designers create harmonious visual experiences from image references.
        </Paragraph>
        <Paragraph className="mt-4">
          I&apos;m constantly expanding my knowledge through courses and certifications, including Python Professional, Full-Stack Web Development, and Adobe Photoshop Essentials from Udemy. My commitment to problem-solving, time management, and creativity drives me to deliver exceptional results for every project I undertake.
        </Paragraph>
        <Paragraph className="mt-4">
          Thank you for visiting my portfolio. I&apos;m always open to new opportunities and collaborations, so feel free to reach out at devsiddhansh@gmail.com or +91-9372901271.
        </Paragraph>
      </div>
    </div>
  );
}