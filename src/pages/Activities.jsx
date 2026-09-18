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
const Notice = styled.div`
  border-left: 3px solid ${palette.gold};
  padding: 18px 23px;
  background: #fff9f0;
  font-size: 13px;
  line-height: 1.8;
  color: #665a4d;
  margin: 30px 0;
`;
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.95;
  color: ${(p) => (p.$light ? "#d2c6b7" : "#655b50")};
  max-width: 680px;
`;
const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin: 45px 0;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  article {
    border-top: 1px solid #bda98e;
    padding-top: 24px;
  }
  h3 {
    font:
      500 26px "Playfair Display",
      serif;
  }
  p {
    font-size: 14px;
    line-height: 1.85;
    color: #655b50;
  }
`;
const DarkText = styled.div`
  color: #f4eee5;
  ${Paragraph} {
    color: #d2c6b7;
  }
`;

export function Activities() {
  return (
    <>
      <PageHero
        eyebrow="Opplevelser"
        title="Det skjer på Linna."
        description="Et sted for gode møter, musikk, historier og nye tradisjoner."
        image={photos.social}
      />
      <Section>
        <Container>
          <Eyebrow>Aktiviteter</Eyebrow>
          <Heading>Alltid rom for fellesskap.</Heading>
          <Paragraph>
            En levende pub er summen av menneskene som møtes der. Noen kvelder
            handler om musikk, andre om et spill rundt bordet eller bare en
            samtale som varer litt lenger enn planlagt.
          </Paragraph>

          <Cards>
            {activities.map((a, i) => {
              const Icon = [Music, Users, Landmark][i];
              return (
                <article key={a.title}>
                  <Icon color={palette.wine} />
                  <h3>{a.title}</h3>
                  <p>
                    {
                      [
                        "Tenk deg en kveld hvor tonene fyller rommet uten å overdøve samtalene. Jazz og akustisk musikk passer naturlig inn i det varme pubmiljøet.",
                        "Et spill på bordet, en vennlig utfordring og mye latter. Sosiale kvelder kan gi både faste gjester og nye ansikter noe å samles om.",
                        "Historien om Notodden og klassisk britisk pubkultur gir et naturlig utgangspunkt for samtaler, fortellinger og kulturelle møter.",
                      ][i]
                    }
                  </p>
                </article>
              );
            })}
          </Cards>
        </Container>
      </Section>
      <Section $alternate>
        <Container>
          <Split>
            <img
              src={photos.lounge}
              alt="Illustrasjonsfoto av en sosial møteplass"
              loading="lazy"
            />
            <Reveal>
              <Eyebrow>Musikk og øyeblikk</Eyebrow>
              <Heading>En kveld med sin egen rytme.</Heading>
              <Paragraph>
                Musikk kan skape en helt egen stemning. I dette konseptet ser vi
                for oss intime opplevelser, der publikum er nær musikken og det
                fortsatt er plass til gode samtaler.
              </Paragraph>
              <Paragraph>
                Et eventuelt faktisk program, artister og tidspunkt skal legges
                inn først når informasjonen er bekreftet av arrangøren.
              </Paragraph>
              <Button to="/kontakt">
                Spør om programmet <ArrowUpRight size={16} />
              </Button>
            </Reveal>
          </Split>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>Tre måter å oppleve Linna på</Eyebrow>
          <Heading>Velg din type kveld.</Heading>
          <Timeline>
            {[
              [
                "01",
                "Den rolige kvelden",
                "Finn en god plass og nyt atmosfæren. En rolig kveld trenger ikke mer enn et hyggelig sted.",
              ],
              [
                "02",
                "Den sosiale kvelden",
                "Ta med venner, oppdag nye bekjentskaper og la samtalene gå sin gang.",
              ],
              [
                "03",
                "Den kulturelle kvelden",
                "La musikk, lokale historier eller en aktivitet gi kvelden et ekstra innslag.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <Eyebrow>{n} / Opplevelse</Eyebrow>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </Timeline>
        </Container>
      </Section>
      <Section $dark>
        <Container>
          <DarkText>
            <Eyebrow>Vil du vite mer?</Eyebrow>
            <Heading>Hva skjer neste gang?</Heading>
            <Paragraph $light>
              Et oppdatert program bør vise dato, klokkeslett, beskrivelse og
              eventuell påmelding. Inntil informasjonen er godkjent, kan du
              kontakte puben direkte for spørsmål.
            </Paragraph>
            <Button $outline to="/kontakt">
              Ta kontakt <ArrowUpRight size={16} />
            </Button>
          </DarkText>
        </Container>
      </Section>
    </>
  );
}
