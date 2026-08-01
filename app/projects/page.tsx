"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { webProjects as projects } from "@/data/projects";

export default function AllProjectsPage() {
  return (
    <Section>
      <Container>
        <Header>
          <BackButton href="/">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </BackButton>
          <Title>ALL COMPLETED PROJECTS</Title>
        </Header>

        <StackContainer>
          {projects.map((project, index) => (
            <Card key={project.name} $index={index}>
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
                      style={{ objectFit: "cover" }}
                    />
                  </ImageFrame>
                </RightCol>
              </CardContent>
            </Card>
          ))}
        </StackContainer>
      </Container>
    </Section>
  );
}

/* Styled Components */

const Section = styled.section`
  color: #ffffff;
  padding: 100px 24px;
  min-height: 100vh;
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
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #b3b3b3;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  width: fit-content;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const Title = styled.h1`
  font-family: "Impact", "Bebas Neue", "Arial Black", sans-serif-condensed, sans-serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin: 0;
  color: #ffffff;
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

const ProjectName = styled.h2`
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

const RightCol = styled.div<{ $bg?: string }>`
  background-color: ${({ $bg }) => $bg || "#d1d5db"};
  border-radius: 20px;
  padding: 24px;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 960px) {
    min-height: 240px;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);

  @media (max-width: 960px) {
    height: 200px;
  }
`;