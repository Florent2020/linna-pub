import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  MapPin,
  Clock,
  Mail,
  ArrowUpRight,
  Music,
  Users,
  Landmark,
  X,
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle,
  Camera,
  BookOpen,
  GlassWater,
  Heart,
  CalendarDays,
} from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Body,
  Button,
  PageHero,
  Reveal,
} from "../components/UI";
import { photos, activities, palette } from "../data/site";

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;
  align-items: center;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    @media (max-width: 750px) {
      height: 320px;
    }
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin: 40px 0;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  article {
    padding: 35px;
    background: #fffaf3;
    border: 1px solid #e2d7c9;
    transition: transform 0.3s;
    &:hover {
      transform: translateY(-4px);
    }
  }
  h3 {
    font:
      500 27px "Playfair Display",
      serif;
    margin: 17px 0;
  }
  p {
    font-size: 14px;
    line-height: 1.85;
    color: #675d52;
  }
`;
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.95;
  color: ${(p) => (p.$light ? "#d2c6b7" : "#655b50")};
  max-width: 680px;
`;
const DarkText = styled.div`
  color: #f4eee5;
  ${Paragraph} {
    color: #d2c6b7;
  }
`;

export function About() {
  return (
    <>
      <PageHero
        eyebrow="Historien vår"
        title="En pub med sjel."
        description="Britisk pubtradisjon møter Notoddens industrihistorie – en fortelling om steder, mennesker og gode øyeblikk."
        image={photos.interior}
      />
      <Section>
        <Container>
          <Split>
            <Reveal>
              <Eyebrow>Vår inspirasjon</Eyebrow>
              <Heading>En hyllest til det gode møtestedet.</Heading>
              <Paragraph>
                Linna Pub henter inspirasjon fra klassiske engelske og skotske
                puber fra 1930-tallet og Notoddens industrihistorie. I dette
                konseptet møtes mørkt treverk, varme toner og en åpen dør.
              </Paragraph>
              <Paragraph>
                Det handler om mer enn interiør. Vi ønsker å formidle følelsen
                av å komme inn et sted hvor man kan legge fra seg dagens tempo,
                finne et bord og kjenne seg hjemme.
              </Paragraph>
              <Paragraph>
                Enten du kommer for en samtale, en opplevelse eller bare et lite
                avbrekk, er tanken den samme: Her skal det være rom for å bli
                værende.
              </Paragraph>
            </Reveal>
            <img
              src={photos.bar}
              alt="Illustrasjonsbilde av et tradisjonelt pubmiljø"
              loading="lazy"
            />
          </Split>
        </Container>
      </Section>
      <Section $alternate>
        <Container>
          <Eyebrow>Vår filosofi</Eyebrow>
          <Heading>Tradisjon. Fellesskap. Atmosfære.</Heading>
          <Paragraph>
            Tre enkle ideer former Linna-konseptet. Vi lar fortiden gi karakter
            til rommet, menneskene fylle det med liv og de små detaljene gjøre
            besøket minneverdig.
          </Paragraph>
          <Cards>
            {[
              [
                "Historien",
                "Fra britiske puber til industribyen Notodden: tradisjonene gir inspirasjon til materialer, uttrykk og fortellinger. Målet er ikke å gjenskape fortiden, men å gi den en naturlig plass i nåtiden.",
                BookOpen,
              ],
              [
                "Møteplassen",
                "Et godt møtested er like relevant for en rolig stund alene som for en hel vennegjeng. Her er samtalene viktige, og det skal være lett å finne sin plass.",
                Users,
              ],
              [
                "Opplevelsen",
                "Belysning, musikk, små detaljer og gode møter skaper helheten. Vi ser for oss en varm, avslappet ramme der hver kveld kan få sin egen historie.",
                Heart,
              ],
            ].map(([h, t, Icon]) => (
              <article key={h}>
                <Icon color={palette.wine} />
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </Cards>
        </Container>
      </Section>
      <Section>
        <Container>
          <Split>
            <img
              src={photos.lounge}
              alt="Illustrasjonsfoto av et stemningsfullt serveringssted"
              loading="lazy"
            />
            <Reveal>
              <Eyebrow>Stedet og menneskene</Eyebrow>
              <Heading>Et lite pusterom midt i hverdagen.</Heading>
              <Paragraph>
                Det er noe eget med steder hvor tiden går litt saktere. Hvor det
                er plass til en god historie, en kjent melodi og et nytt
                bekjentskap.
              </Paragraph>
              <Paragraph>
                Linna-konseptet ønsker å bygge videre på ideen om puben som en
                sosial møteplass – et sted som både lokale og tilreisende kan
                oppdage på sin egen måte.
              </Paragraph>
              <Button to="/kontakt">
                Planlegg besøket <ArrowUpRight size={16} />
              </Button>
            </Reveal>
          </Split>
        </Container>
      </Section>
      <Section $dark>
        <Container>
          <DarkText>
            <Eyebrow>Detaljene teller</Eyebrow>
            <Heading>Et sted å komme tilbake til.</Heading>
            <Paragraph $light>
              Varme materialer. Klassiske referanser. Et bord med plass til én
              til. Vi vil at det visuelle uttrykket skal være gjennomført uten å
              føles utilnærmelig.
            </Paragraph>
            <Paragraph $light>
              Tekstene på denne demosiden er redaksjonelle konsepttekster og må
              godkjennes av Linna Pub før offentlig publisering.
            </Paragraph>
            <Button $outline to="/galleri">
              Se stemningen <ArrowUpRight size={16} />
            </Button>
          </DarkText>
        </Container>
      </Section>
    </>
  );
}
