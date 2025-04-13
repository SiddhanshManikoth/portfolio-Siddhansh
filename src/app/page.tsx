import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👨‍💻</span>
      <Heading className="font-black">Hello there! I&apos;m Siddhansh</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a passionate Python programmer and web developer with a strong foundation in{" "}
        <Highlight>full-stack development</Highlight> and UI/UX design
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I love creating <Highlight>interactive experiences</Highlight> and automation tools 
        that solve real-world problems. With expertise in Python, JavaScript, and modern 
        frameworks, I build applications that are both functional and visually appealing.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Featured Projects
      </Heading>
      <Products />
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-16 mb-4"
      >
        My Technical Toolkit
      </Heading>
      <TechStack />
      <Paragraph className="max-w-xl mt-10 text-gray-600">
        Looking for a developer who can bring your ideas to life? Let&apos;s connect!
      </Paragraph>
    </Container>
  );
}
