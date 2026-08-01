"use client";

import { useEffect } from "react";
import styled from "styled-components";
import { getCalApi } from "@calcom/embed-react";
import { Phone } from "lucide-react";

const CAL_LINK = "your-cal-username/strategy-call"; // Replace with your Cal.com link

const socials = [
  { label: "X(TWITTER)", href: "https://x.com/ziongate18" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/clement-a-8b51403b7/" },
  { label: "INSTAGRAM", href: "https://instagram.com" },
];

export default function Footer() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#4F46E5" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <FooterSection id="contact">
      <Container>
        <Card>
          {/* Top Header Row */}
          <TopRow>
            <BrandName>
              Clement Adebola<sup>™</sup>
            </BrandName>
            <StatusBadge>Available to take on new projects!</StatusBadge>
          </TopRow>

          {/* Center Title */}
          <TitleGroup>
            <CTATitle>
              READY TO LEVEL UP
              <br />
              YOUR BRAND?
            </CTATitle>

            {/* Cal.com CTA Button */}
            <CalButton type="button" data-cal-link={CAL_LINK}>
              <span>Book a strategy call</span>
              <IconCircle>
                <Phone size={13} fill="currentColor" />
              </IconCircle>
            </CalButton>
          </TitleGroup>

          {/* Bottom Footer Row */}
          <BottomRow>
            <Credit>Development by: Clement Adebola</Credit>

            <SocialGroup>
              {socials.map((s) => (
                <SocialPill
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </SocialPill>
              ))}
            </SocialGroup>

            <Copyright>©{new Date().getFullYear()} - All Rights Reserved</Copyright>
          </BottomRow>
        </Card>
      </Container>
    </FooterSection>
  );
}

/* Styled Components */

const FooterSection = styled.footer`
  padding: 60px 24px;
  box-sizing: border-box;
  background-color: "${({ theme }) => theme.colors.background}";

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 580px;
  box-sizing: border-box;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    padding: 28px 20px;
    min-height: 480px;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const BrandName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;

  sup {
    font-size: 0.65rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const StatusBadge = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 40px 0;
  gap: 32px;
`;

const CTATitle = styled.h2`
  font-family: "Impact", "Bebas Neue", "Arial Black", sans-serif-condensed, sans-serif;
  font-size: clamp(2.8rem, 7vw, 6.2rem);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const CalButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 10px 10px 10px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};

    div {
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }
`;

const IconCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }
`;

const Credit = styled.span`
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.muted};
`;

const SocialGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialPill = styled.a`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 8px 18px;
  border-radius: 999px;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Copyright = styled.span`
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.muted};
`;