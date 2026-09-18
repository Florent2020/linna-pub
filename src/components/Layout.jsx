import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Menu, X, ArrowUpRight, Instagram, Facebook } from "lucide-react";
import { navigation, palette } from "../data/site";
const Shell = styled.div`
  min-height: 100vh;
  background: ${palette.cream};
  color: ${palette.dark};
  font-family: "DM Sans", sans-serif;
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    font: inherit;
    cursor: pointer;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ::selection {
    background: ${palette.gold};
    color: ${palette.dark};
  }
`;
const Header = styled.header`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  background: ${(p) =>
    p.$solid
      ? "rgba(23,20,17,.97)"
      : "linear-gradient(180deg,rgba(15,13,11,.85),transparent)"};
  transition: background 0.3s;
  border-bottom: 1px solid ${(p) => (p.$solid ? "#ffffff18" : "transparent")};
  color: #fff;
`;
const Nav = styled.nav`
  max-width: 1200px;
  margin: auto;
  padding: 19px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;
const Logo = styled(Link)`
  font-family: "Playfair Display", serif;
  font-size: 27px;
  letter-spacing: 0.08em;
  font-weight: 700;
  white-space: nowrap;
  span {
    color: ${palette.gold};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  a {
    opacity: 0.75;
    transition: 0.2s;
    &.active,
    &:hover {
      opacity: 1;
      color: ${palette.gold};
    }
  }
  @media (max-width: 850px) {
    display: ${(p) => (p.$open ? "flex" : "none")};
    position: absolute;
    top: 69px;
    left: 0;
    right: 0;
    background: ${palette.dark};
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    box-shadow: 0 20px 30px #0005;
  }
`;
const NavButton = styled(Link)`
  border: 1px solid ${palette.gold};
  padding: 12px 17px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 850px) {
    display: none;
  }
`;
const Toggle = styled.button`
  display: none;
  background: transparent;
  border: 0;
  color: #fff;
  @media (max-width: 850px) {
    display: block;
  }
`;
const Footer = styled.footer`
  background: ${palette.dark};
  color: ${palette.cream};
  padding: 90px 24px 25px;
  border-top: 1px solid #c6a36b44;
`;
const FootGrid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.7fr 1fr 1.2fr 1fr;
  gap: 45px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 30px;
    margin: 0 0 15px;
  }
  h4 {
    color: ${palette.gold};
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin: 0 0 20px;
  }
  p,
  a {
    font-size: 13px;
    line-height: 2;
    color: #c6bdb2;
  }
  a {
    display: block;
    &:hover {
      color: ${palette.gold};
    }
  }
`;
const FootBottom = styled.div`
  max-width: 1200px;
  margin: 65px auto 0;
  border-top: 1px solid #ffffff22;
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  font-size: 11px;
  color: #9e9387;
`;
export default function Layout({ children }) {
  const [open, setOpen] = useState(false),
    [solid, setSolid] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
    document.title =
      "Linna Pub | " +
      (navigation.find((x) => x[0] === loc.pathname)?.[1] || "Notodden");
  }, [loc.pathname]);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 35);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <Shell>
      <Header $solid={solid || open}>
        <Nav>
          <Logo to="/">
            LINNA<span>.</span>PUB
          </Logo>
          <Links $open={open}>
            {navigation.map(([url, name]) => (
              <NavLink key={url} to={url} end={url === "/"}>
                {name}
              </NavLink>
            ))}
          </Links>
          <NavButton to="/kontakt">
            Besøk oss <ArrowUpRight size={15} />
          </NavButton>
          <Toggle
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Toggle>
        </Nav>
      </Header>
      <main>{children}</main>
      <Footer>
        <FootGrid>
          <div>
            <h3>
              LINNA<span style={{ color: palette.gold }}>.</span>PUB
            </h3>
            <p>
              Et fristed for sjelen.
              <br />
              Et redaksjonelt pubkonsept inspirert av britisk tradisjon og
              Notoddens historie.
            </p>
            <p>Finn din plass. Bli en stund.</p>
          </div>
          <div>
            <h4>Utforsk</h4>
            {navigation.map(([url, name]) => (
              <Link key={url} to={url}>
                {name}
              </Link>
            ))}
          </div>
          <div>
            <h4>Finn oss</h4>
            <p>Notodden, Norge</p>
            <Link to="/kontakt">Kontakt og besøksinformasjon →</Link>
            <p>
              Åpningstider og kontaktinformasjon må bekreftes før publisering.
            </p>
          </div>
          <div>
            <h4>Opplevelser</h4>
            <Link to="/mat-og-drikke">Mat & drikke</Link>
            <Link to="/aktiviteter">Musikk & aktiviteter</Link>
            <Link to="/galleri">Bilder & stemning</Link>
            <Link to="/kontakt">Planlegg besøket →</Link>
          </div>
        </FootGrid>
        <FootBottom>
          <span>© {new Date().getFullYear()} Linna Pub ·</span>
          <span>Bygget med omtanke i Notodden.</span>
        </FootBottom>
      </Footer>
    </Shell>
  );
}
