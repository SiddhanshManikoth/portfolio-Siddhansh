import sidefolioAceternity from "public/images/p1.png";
import p2 from "public/images/p1.3.png";
import p1 from "public/images/p1.2.png";

import p22 from "public/images/p2.png";
import p221 from "public/images/p22.1.png";
import p222 from "public/images/p22.2.png";
import p331 from "public/images/p331.png";
import p332 from "public/images/p332.png";

import p441 from "public/images/p441.jpg";


import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://github.com/SiddhanshManikoth/ecomerce_site",
    title: "E-Commerce Platform",
    description:
      "A fully functional e-commerce website with product catalog, shopping cart, and secure checkout features.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, p1, p2],
    stack: ["HTML", "CSS", "JavaScript", "Python", "Payment API"],
    slug: "ecommerce-platform",
    content: (
      <div>
        <p>
          Developed a comprehensive e-commerce solution that offers a seamless shopping experience
          with an intuitive interface designed to maximize customer engagement and conversion.
          The platform features a responsive design that adapts flawlessly across all devices,
          ensuring accessibility for all users regardless of their device preferences.
        </p>
        <p>
          Key features include a dynamic product catalog with filtering and search capabilities,
          a secure shopping cart system that persists user selections, and a streamlined checkout
          process integrated with payment processing APIs. The back-end infrastructure is built
          with scalability in mind, capable of handling increased traffic and transaction volumes
          as business grows.
        </p>
        <p>
          This project resulted in a 25% increase in client conversion rates through its
          user-friendly design and optimized purchase flow, demonstrating the significant
          impact of thoughtful UX/UI design on business outcomes.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/SiddhanshManikoth/space_invaders",
    title: "Interactive Web Games",
    description:
      "A collection of browser-based games including Space Invaders, Breakout, and Tic-Tac-Toe with responsive controls.",
    thumbnail: p22,
    images: [p22, p221, p222],
    stack: ["JavaScript", "HTML5 Canvas", "CSS3"],
    slug: "interactive-games",
    content: (
      <div>
        <p>
          Created a suite of interactive browser-based games that showcase advanced JavaScript
          and HTML5 Canvas capabilities. Each game features responsive controls optimized for
          both desktop and mobile play, ensuring an engaging experience across all devices.
        </p>
        <p>
          The Space Invaders implementation includes custom sprite animations and collision
          detection algorithms, while the Breakout game demonstrates physics simulations with
          realistic ball movement and bouncing mechanics. The Tic-Tac-Toe game incorporates
          an intelligent AI opponent with multiple difficulty levels.
        </p>
        <p>
          This project demonstrates my proficiency in DOM manipulation, event handling,
          and creating engaging user interactions through vanilla JavaScript. The games
          maintain consistent performance across browsers through careful optimization
          and efficient rendering techniques.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/SiddhanshManikoth/TTS_app",
    title: "Python Automation Suite",
    description:
      "A collection of automation tools including a birthday wisher, Chrome Dino game automation, and PDF-to-speech converter.",
    thumbnail: p332,
    images: [p332, p331],
    stack: ["Python", "APIs", "Computer Vision"],
    slug: "automation-suite",
    content: (
      <div>
        <p>
          Developed a comprehensive suite of Python automation tools designed to streamline
          repetitive tasks and enhance productivity. The automated birthday wisher application
          integrates with email and SMS services to deliver personalized messages based on a
          contact database, eliminating the need to manually track important dates.
        </p>
        <p>
          The Chrome Dino game automation utilizes computer vision techniques to analyze the
          game state in real-time and trigger appropriate actions, showcasing the integration
          of Python with image processing libraries. The PDF-to-speech application converts
          document text to audio output, making digital content more accessible for visually
          impaired users.
        </p>
        <p>
          Additional tools in the suite include a web scraper for music trend analysis and an
          image watermarking tool with customizable text, opacity, and positioning options.
          Each component demonstrates practical applications of Python&apos;s versatility in solving
          real-world problems.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/DoxaFoundation",
    title: "ICP Blockchain Applications",
    description:
      "Decentralized applications (DApps) built on the Internet Computer Protocol blockchain with secure smart contracts.",
    thumbnail: p441,
    images: [p441],
    stack: ["Internet Computer Protocol", "JavaScript", "DApps"],
    slug: "blockchain-apps",
    content: (
      <div>
        <p>
          Created a series of decentralized applications (DApps) on the Internet Computer
          Protocol (ICP) blockchain, demonstrating the potential of this emerging technology
          for secure and transparent digital interactions. These applications leverage the
          unique capabilities of ICP to deliver permissionless services with high performance
          and low transaction costs.
        </p>
        <p>
          The projects include smart contracts for secure, transparent data management across
          distributed networks, ensuring immutability and tamper-proof record-keeping. The
          implementation follows best practices for blockchain development, with a focus on
          security, efficiency, and user experience.
        </p>
        <p>
          Working closely with the ICP community, I contributed to troubleshooting technical
          issues and improving platform functionality, gaining valuable insights into blockchain
          architecture and decentralized system design. These applications demonstrate my
          ability to work with cutting-edge technologies and implement secure authentication
          systems that enhance user privacy and data protection.
        </p>
      </div>
    ),
  },
];