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
        <Heading className="font-black">Hello, I&apos;m Siddhansh</Heading>
<Paragraph className="max-w-xl mt-4">
  I am a dedicated <Highlight>Python developer</Highlight> and <Highlight>web developer</Highlight> 
  with strong expertise in <Highlight>full-stack development</Highlight> and <Highlight>UI/UX design</Highlight>. 
</Paragraph>
<Paragraph className="max-w-xl mt-4">
  I specialize in building <Highlight>interactive applications</Highlight> and 
  <Highlight>automation solutions</Highlight> that solve real-world challenges. 
  With hands-on experience in Python, JavaScript, modern frameworks, and AI-driven tools, 
  I create digital products that are functional, scalable, and visually engaging.
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
