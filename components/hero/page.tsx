"use client";

import styled from "styled-components";
import { motion, type Variants } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <Section id="home">
      <Container
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Title: Order 1 on mobile, top right on desktop */}
        <Title variants={itemVariants}>
          YOUR WEBSITE &<br />
          CREATIVE DESIGN PARTNER
        </Title>

        {/* Image: Order 2 on mobile, left column on desktop */}
        <ImageWrapper variants={itemVariants}>
          <Image
            src="/me.JPG" 
            alt="Adebola Clement - Website Design & Development Partner"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </ImageWrapper>

        {/* Card: Order 3 on mobile, bottom right on desktop */}
        <Card variants={itemVariants}>
          <CardBody>
            <MainDescription>
             Helping startups, agencies and businesses build modern websites, engaging user interfaces and professional brand assets with Next.js, Framer, Canva and Photoshop.
            </MainDescription>

            {/* <SubDescription>
              Trusted by Reanest, Stayvera, Bech32, and Xio to deliver
              strategic B2B Websites.
            </SubDescription> */}

            {/* Subtle grid pattern area in card lower section */}
            <GridPattern aria-hidden />

            <ButtonGroup>
              <PillButton type="button">
                <span>Book a strategy call</span>
                <IconCircle>
                  <Phone size={13} fill="currentColor" />
                </IconCircle>
              </PillButton>

              <PillButton type="button">
                <span>What Our Clients Say</span>
                <IconCircle>
                  <ArrowRight size={15} />
                </IconCircle>
              </PillButton>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Container>
    </Section>
  );
}

/* Styled Components */

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  /* Clearance for navbar */
  padding-top: 120px;
  padding-bottom: 60px;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;

  @media (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: grid;
  gap: 32px;
  align-items: stretch;

  /* Desktop Grid Configuration */
  @media (min-width: 961px) {
    grid-template-columns: 1fr 1.15fr;
    grid-template-areas:
      "image title"
      "image card";
    margin-top: 40px;
  }

  /* Mobile Grid Configuration */
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-top: 20px;
  }
`;

const Title = styled(motion.h1)`
  font-family: var(--font-inter), "Impact", "Arial Black", sans-serif;
  font-size: clamp(2.5rem, 5.2vw, 4.8rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;

  @media (min-width: 961px) {
    grid-area: title;
  }

  @media (max-width: 960px) {
    order: 1; /* First on Mobile */
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 520px;
  border-radius: 28px;
  overflow: hidden;
  background-color: #2a2a2a;

  @media (min-width: 961px) {
    grid-area: image;
    height: 100%;
  }

  @media (max-width: 960px) {
    order: 2; /* Second on Mobile */
    min-height: 380px;
  }
`;

const Card = styled(motion.div)`
  background-color: #f7f7f8;
  color: #1a1a1a;
  border-radius: 28px;
  padding: 36px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (min-width: 961px) {
    grid-area: card;
  }

  @media (max-width: 960px) {
    order: 3; /* Third on Mobile */
  }

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

const MainDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.5;
  font-weight: 600;
  color: #1c1c1e;
  margin: 0 0 20px 0;
  max-width: 95%;
`;

const SubDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.5;
  color: #4a4a4e;
  margin: 0 0 32px 0;
  max-width: 95%;
`;

const GridPattern = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
  pointer-events: none;
  z-index: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  z-index: 2;
`;

const PillButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  color: #1a1a1a;
  border: 1px solid #1a1a1a;
  border-radius: 999px;
  padding: 6px 6px 6px 18px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #1a1a1a;
    color: #ffffff;

    div {
      background-color: #ffffff;
      color: #1a1a1a;
    }
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: 2px;
  }
`;

const IconCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #1a1a1a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
`;