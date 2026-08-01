"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Layout } from "lucide-react";
import { webProjects, graphicDesignProjects } from "@/data/projects";

export default function Projects() {
  // Take only first 2 Web Projects for Home
  const displayedWebProjects = webProjects.slice(0, 2);
  const hasMoreWebProjects = webProjects.length > 2;

  // Take first 2 Graphic Design items
  const displayedDesignProjects = graphicDesignProjects.slice(0, 2);

  return (
    <Section id="projects">
      <Container>
        <Header>
          <Title>COMPLETED PROJECTS</Title>
          <ClientSayButton type="button">
            <span>What Our Clients Say</span>
            <IconCircle>
              <ArrowRight size={15} />
            </IconCircle>
          </ClientSayButton>
        </Header>

        {/* ---------------- WEB DEVELOPMENT SECTION ---------------- */}
        <SubHeading>Web Development</SubHeading>
        <StackContainer>
          {displayedWebProjects.map((project, index) => (
            <Card key={project.id} $index={index}>
              <CardContent>
                <LeftCol>
                  <ProjectName>{project.name}</ProjectName>
                  <Tags>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                  <ProjectDesc>{project.description}</ProjectDesc>

                  <ActionsRow>
                    <DemoButton
                      href={project.previewUrl || project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Demo</span>
                      <ExternalLink size={16} />
                    </DemoButton>
                  </ActionsRow>
                </LeftCol>

                <RightCol $bg={project.imageBg}>
                  <ImageFrame>
                    <Image
                      src={project.imageSrc}
                      alt={`${project.name} Preview`}
                      fill
                      sizes="(max-width: 960px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                      priority={index === 0}
                    />
                  </ImageFrame>
                </RightCol>
              </CardContent>
            </Card>
          ))}
        </StackContainer>

        {hasMoreWebProjects && (
          <ShowMoreWrapper>
            <ShowMoreButton href="/projects">
              <span>See More Web Projects</span>
              <IconCircle>
                <ArrowRight size={16} />
              </IconCircle>
            </ShowMoreButton>
          </ShowMoreWrapper>
        )}

        {/* ---------------- GRAPHIC DESIGN SECTION ---------------- */}
        <SubHeading style={{ marginTop: "80px" }}>Graphic Design</SubHeading>
        <GraphicGrid>
          {displayedDesignProjects.map((design) => {
            // Duplicate images to create a seamless, continuous infinite loop
            const duplicatedImages = [...design.images, ...design.images];

            return (
              <GraphicCard key={design.id}>
                <GraphicCardHeader>
                  <HeaderTitleRow>
                    <Layout size={22} color="#ffffff" />
                    <GraphicTitle>{design.title}</GraphicTitle>
                  </HeaderTitleRow>
                  <GraphicDesc>{design.description}</GraphicDesc>
                </GraphicCardHeader>

                {/* Cinematic Infinite Auto-Scroll Gallery */}
                <ScrollGalleryContainer>
                  <GalleryTrack>
                    {duplicatedImages.map((imgSrc, idx) => (
                      <GalleryImageWrapper key={`${imgSrc}-${idx}`}>
                        <Image
                          src={imgSrc}
                          alt={`Design showcase ${idx + 1}`}
                          fill
                          sizes="240px"
                          style={{ objectFit: "cover" }}
                        />
                      </GalleryImageWrapper>
                    ))}
                  </GalleryTrack>
                </ScrollGalleryContainer>

                <GraphicCardFooter>
                  <DriveButton
                    href={design.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>See More on Google Drive</span>
                    <ExternalLink size={16} />
                  </DriveButton>
                </GraphicCardFooter>
              </GraphicCard>
            );
          })}
        </GraphicGrid>
      </Container>
    </Section>
  );
}

/* ---------------- KEYFRAMES ---------------- */

const scrollInfinite = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

/* ---------------- STYLED COMPONENTS ---------------- */

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
`;

const Title = styled.h2`
  font-family: "Impact", "Bebas Neue", "Arial Black", sans-serif-condensed,
    sans-serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin: 0;
  color: #ffffff;
`;

const SubHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #e2e2e2;
  border-left: 4px solid #ffffff;
  padding-left: 12px;
`;

const ClientSayButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  padding: 8px 8px 8px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #ffffff;
    color: #1a1a1a;
    border-color: #ffffff;

    div {
      background-color: #1a1a1a;
      color: #ffffff;
    }
  }
`;

const IconCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
`;

const Card = styled.article<{ $index: number }>`
  position: sticky;
  top: calc(100px + ${({ $index }) => $index * 30}px);
  background-color: #242424;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  transition: transform 0.3s ease;

  @media (max-width: 960px) {
    position: relative;
    top: 0 !important;
    margin-bottom: 24px;
  }
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 32px;
  padding: 48px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 28px;
    gap: 24px;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectName = styled.h3`
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 20px 0;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
`;

const Tag = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #e2e2e2;
  background: rgba(255, 255, 255, 0.03);
`;

const ProjectDesc = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: #b3b3b3;
  margin: 0 0 32px 0;
  max-width: 90%;
`;

const ActionsRow = styled.div`
  display: flex;
  align-items: center;
`;

const DemoButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  color: #1a1a1a;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background-color: #e2e2e2;
    transform: translateY(-2px);
  }
`;

/* Fixed Web Dev Image Frame */
const RightCol = styled.div<{ $bg?: string }>`
  background-color: ${({ $bg }) => $bg || "#1c1c1e"};
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  height: 100%;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 960px) {
    min-height: 240px;
    padding: 16px;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 960px) {
    height: 220px;
  }
`;

const ShowMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ShowMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  padding: 10px 10px 10px 24px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background-color: #ffffff;
    color: #1a1a1a;
    border-color: #ffffff;

    div {
      background-color: #1a1a1a;
      color: #ffffff;
    }
  }
`;

/* Graphic Design Custom Styles */

const GraphicGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const GraphicCard = styled.div`
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;
`;

const GraphicCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HeaderTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GraphicTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #ffffff;
`;

const GraphicDesc = styled.p`
  color: #a1a1aa;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 850px;
`;

/* Auto-Scroll Container & Masking */
const ScrollGalleryContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 10px 0;

  /* Adds a smooth cinematic gradient blur/fade at the edges */
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const GalleryTrack = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  animation: ${scrollInfinite} 25s linear infinite;
  will-change: transform;

  /* Pauses continuous scrolling when hovering so users can view details */
  &:hover {
    animation-play-state: paused;
  }
`;

const GalleryImageWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 600px) {
    width: 170px;
    height: 220px;
  }
`;

const GraphicCardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
`;

const DriveButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  color: #1a1a1a;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background-color: #e2e2e2;
    transform: translateY(-2px);
  }
`;