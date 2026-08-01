"use client";

import styled from "styled-components";
import { Code2, Frame, Palette, Headphones } from "lucide-react";

type Service = {
  icon: "dev" | "framer" | "design" | "support";
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "dev",
    title: "Web Development (Next.js & HTML)",
    description:
      "I design and build fast, scalable, and conversion-focused web applications using Next.js and modern HTML/CSS. From initial concept to live deployment, I ensure clean code architecture, responsive interfaces, and optimal site performance.",
  },
  {
    icon: "framer",
    title: "Website Development (Framer)",
    description:
      "I create interactive, visually stunning websites with Framer, perfect for startups and brands that want bold design, smooth animations, and flexibility. With Framer, I bring ideas to life quickly, blending creativity with performance.",
  },
  {
    icon: "design",
    title: "Graphic & Content Design",
    description:
      "Leveraging Photoshop and Canva, I craft compelling visual identity materials including high-converting email designs, social media content, flyers, and digital marketing assets designed to capture attention and boost engagement.",
  },
  {
    icon: "support",
    title: "Ongoing Support",
    description:
      "Ongoing support for your web app, including regular updates, bug fixes, performance optimization, and ongoing improvements. Ensuring your app remains secure, scalable, and up-to-date with the latest features.",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <Header>
          <Title>WHAT I DO</Title>
        </Header>

        <Grid>
          {services.map((service) => (
            <Card key={service.title}>
              <IconBox>
                {service.icon === "dev" && <Code2 size={22} color="#1a1a1a" />}
                {service.icon === "framer" && <Frame size={22} color="#1a1a1a" />}
                {service.icon === "design" && <Palette size={22} color="#1a1a1a" />}
                {service.icon === "support" && <Headphones size={22} color="#1a1a1a" />}
              </IconBox>
              <CardTitle>{service.title}</CardTitle>
              <CardDesc>{service.description}</CardDesc>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

/* Styled Components */

const Section = styled.section`
  color: #ffffff;
  padding: 100px 24px;
  box-sizing: border-box;

  @media (max-width: 960px) {
    padding: 60px 16px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 56px;
`;

const Title = styled.h2`
  font-family: "Impact", "Bebas Neue", "Arial Black", sans-serif-condensed, sans-serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 868px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Card = styled.div`
  background-color: #1c1c1e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 28px 20px;
  }
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const CardTitle = styled.h3`
  font-size: 1.45rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px 0;
  letter-spacing: -0.01em;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #a1a1aa;
  margin: 0;
`;