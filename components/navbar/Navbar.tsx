"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, LayoutGrid } from "lucide-react";
import styled from "styled-components";

const links = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("projects");
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler with requestAnimationFrame throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);

          // ScrollSpy calculation
          const scrollPos = window.scrollY + 140;
          for (const link of links) {
            const id = link.href.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              const bottom = top + el.offsetHeight;
              if (scrollPos >= top && scrollPos < bottom) {
                setActive(id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Handle escape key to close menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [menuOpen, handleKeyDown]);

  return (
    <>
      <Nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        $scrolled={scrolled}
      >
        <Wrapper>
          <LogoWrap>
            <Arc viewBox="0 0 40 40" aria-hidden="true">
              <path d="M2 38 C 2 16, 20 2, 38 2" />
            </Arc>
            <Logo href="/">
              <span data-full>Clement Adebola</span>
              <span data-short>C.A.</span>
              <Sup>™</Sup>
            </Logo>
          </LogoWrap>

          <Badge type="button" onClick={() => setMenuOpen(true)}>
            <Dot aria-hidden="true" />
            <span data-full>
              Available to take on new projects! Let&apos;s chat
            </span>
            <span data-mid>Available — Let&apos;s chat</span>
            <span data-short>Chat</span>
          </Badge>

          <MenuButton
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span data-label>Menu</span>
            <LayoutGrid size={16} />
          </MenuButton>
        </Wrapper>
      </Nav>

      <AnimatePresence>
        {menuOpen && (
          <OverlayMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <Close onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X />
            </Close>

            {links.map((item, i) => (
              <MenuLink
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                $isActive={active === item.href.replace("#", "")}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                {item.name}
              </MenuLink>
            ))}
          </OverlayMenu>
        )}
      </AnimatePresence>
    </>
  );
}

/* ========================= */

const Nav = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 999;
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(13, 13, 15, 0.85)" : "rgba(13, 13, 15, 0.6)"};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.4s ease;
`;

const Wrapper = styled.div`
  width: min(1280px, 94%);
  margin: 0 auto;
  height: 76px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 640px) {
    height: 64px;
    gap: 10px;
  }

  @media (max-width: 380px) {
    height: 58px;
    gap: 6px;
  }
`;

const LogoWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
  flex-shrink: 1;
`;

const Arc = styled.svg`
  position: absolute;
  left: -6px;
  bottom: 100%;
  width: 22px;
  height: 22px;

  path {
    fill: none;
    stroke: rgba(255, 255, 255, 0.35);
    stroke-width: 1.5;
    stroke-linecap: round;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 800;
  color: white;
  letter-spacing: -1px;

  span[data-short] {
    display: none;
  }

  @media (max-width: 640px) {
    font-size: 16px;
  }

  @media (max-width: 400px) {
    font-size: 15px;

    span[data-full] {
      display: none;
    }
    span[data-short] {
      display: inline;
    }
  }
`;

const Sup = styled.span`
  font-size: 0.5em;
  font-weight: 600;
  vertical-align: super;
  margin-left: 2px;
`;

const pulse = `
  @keyframes badgePulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
    50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(74, 222, 128, 0); }
  }
`;

const Badge = styled.button`
  ${pulse}

  display: flex;
  align-items: center;
  gap: 10px;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;

  padding: 10px 20px;

  color: #e6e6ea;
  font-size: 0.88rem;
  font-weight: 500;
  white-space: nowrap;

  flex-shrink: 0;

  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.16);
  }

  span[data-mid],
  span[data-short] {
    display: none;
  }

  @media (max-width: 900px) {
    font-size: 0.8rem;
    padding: 9px 16px;
    gap: 8px;

    span[data-full] {
      display: none;
    }
    span[data-mid] {
      display: inline;
    }
  }

  @media (max-width: 560px) {
    padding: 8px 14px;

    span[data-mid] {
      display: none;
    }
    span[data-short] {
      display: inline;
    }
  }

  /* Keep short label visible on narrow screens */
  @media (max-width: 380px) {
    padding: 6px 10px;
  }
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  flex-shrink: 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: badgePulse 2s ease-in-out infinite;
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  color: white;
  font-size: 0.95rem;
  font-weight: 500;

  padding: 10px 6px;

  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    span[data-label] {
      display: none;
    }
  }
`;

const OverlayMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(4, 6, 10, 0.98);
  backdrop-filter: blur(40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  z-index: 9999;
  padding: 24px;

  @media (max-width: 480px) {
    gap: 22px;
  }
`;

const MenuLink = styled(motion(Link))<{ $isActive?: boolean }>`
  font-size: 2rem;
  color: ${({ $isActive }) => ($isActive ? "#4ade80" : "white")};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #4ade80;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  cursor: pointer;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }

  @media (max-width: 480px) {
    top: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
  }
`;