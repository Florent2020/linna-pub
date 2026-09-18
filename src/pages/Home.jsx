import React from "react";
import styled from "styled-components";
import {
  ArrowDown,
  ArrowUpRight,
  Music,
  Users,
  Landmark,
  Beer,
} from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Body,
  Button,
  Reveal,
} from "../components/UI";
import { photos, activities, palette } from "../data/site";
const Hero = styled.section`
  min-height: 100svh;
  background:
    linear-gradient(90deg, #100d0bdc, #100d0b30),
    url("${photos.hero}") center/cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  & > ${Container} {
    width: 100%;
    max-width: 1200px;
    flex: 0 0 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
  position: relative;
  color: white;
  padding: 120px 0 85px;
  h1 {
    font:
      500 clamp(57px, 8vw, 115px)/1.05 "Playfair Display",
      serif;
    max-width: 750px;
    text-align: left;
    letter-spacing: -0.05em;
    margin: 0 0 26px;
  }
  p:not(:first-child) {
    max-width: 540px;
    line-height: 1.8;
    color: #e3d9cc;
    font-size: 16px;
  }
  .actions {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 35px;
  }
  .scroll {
    position: absolute;
    bottom: 27px;
    right: 6%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 10px;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    color: #e5d7c8;
  }
`;
const Editorial = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 65px;
  align-items: center;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  img {
    height: 450px;
    width: 100%;
    object-fit: cover;
  }
  p {
    line-height: 1.9;
    color: #655b50;
  }
`;
const Quote = styled.div`
  border-left: 2px solid ${palette.gold};
  padding: 20px 30px;
  font:
    italic 500 clamp(24px, 3vw, 38px)/1.5 "Playfair Display",
    serif;
  max-width: 850px;
  margin: 45px 0;
`;
const PubIntro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: clamp(32px, 5vw, 76px);
  align-items: center;
  width: 100%;
  .intro-copy {
    min-width: 0;
    text-align: left;
  }
  .intro-copy h2 {
    font-size: clamp(42px, 4.3vw, 68px);
    line-height: 1.15;
    letter-spacing: -0.045em;
    margin: 18px 0 25px;
    text-align: left;
  }
  .intro-copy p {
    max-width: 570px;
    line-height: 1.9;
    margin: 0;
    color: #655b50;
  }
  .intro-photo {
    display: block;
    width: 100%;
    height: clamp(380px, 40vw, 550px);
    object-fit: cover;
    object-position: center;
    border: 0;
  }
  .intro-perks {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    margin: 35px 0 33px;
  }
  .intro-perk {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 0 19px;
    border-right: 1px solid #d8cbbc;
    font-size: 13px;
    line-height: 1.5;
    color: #2a211c;
  }
  .intro-perk:first-child {
    padding-left: 0;
  }
  .intro-perk:last-child {
    border-right: 0;
  }
  .intro-perk svg {
    flex-shrink: 0;
    color: #633a36;
  }
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 35px;
    .intro-photo {
      height: 420px;
    }
  }
  @media (max-width: 540px) {
    .intro-photo {
      height: 290px;
    }
    .intro-perk {
      padding: 0 12px 0 0;
      margin: 0 12px 14px 0;
      font-size: 12px;
    }
    .intro-copy h2 {
      font-size: clamp(38px, 10vw, 55px);
    }
  }
`;
const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 9%;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  img {
    width: 100%;
    height: 540px;
    object-fit: cover;
    @media (max-width: 750px) {
      height: 350px;
    }
  }
`;
const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin-top: 45px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  article {
    border-top: 1px solid #c5b9aa;
    padding-top: 24px;
  }
  h3 {
    font:
      500 23px "Playfair Display",
      serif;
  }
  p {
    font-size: 13px;
    line-height: 1.8;
    color: #655b50;
  }
`;
const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 45px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  article {
    border-top: 1px solid #ffffff44;
    padding: 28px 0;
  }
  h3 {
    font:
      500 27px "Playfair Display",
      serif;
  }
  p {
    font-size: 13px;
    color: #b9aea2;
    line-height: 1.8;
  }
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 40px;
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  img {
    width: 100%;
    height: 270px;
    object-fit: cover;
    @media (max-width: 650px) {
      height: 180px;
    }
  }
  img:first-child {
    grid-column: span 2;
    height: 350px;
    @media (max-width: 650px) {
      height: 230px;
    }
  }
`;
const Closing = styled.section`
  background:
    linear-gradient(#1714119c, #171411bd),
    url("${photos.bar}") center/cover;
  text-align: left;
  padding: 110px 0;
  color: #fff;
  h2 {
    font:
      500 clamp(40px, 6vw, 70px) "Playfair Display",
      serif;
    margin: 0 0 22px;
  }
  p {
    color: #ddd0c0;
    margin-bottom: 35px;
  }
`;
export default function Home() {
  return (
    <>
      <Hero>
        <Container>
          <Reveal>
            <Eyebrow>Velkommen til Linna Pub · Notodden</Eyebrow>
            <h1>
              Et fristed
              <br />
              for sjelen.
            </h1>
            <p>
              Et sted å senke skuldrene, finne roen og dele gode øyeblikk.
              Velkommen inn i en atmosfære med historie og sjel.
            </p>
            <div className="actions">
              <Button to="/om-oss">
                Oppdag Linna <ArrowUpRight size={16} />
              </Button>
              <Button $outline to="/kontakt">
                Planlegg besøket
              </Button>
            </div>
          </Reveal>
        </Container>
        <span className="scroll">
          Scroll for å utforske <ArrowDown size={15} />
        </span>
      </Hero>
      <Section>
        <Container>
          <PubIntro>
            <Reveal>
              <div className="intro-copy">
                <Eyebrow>Mer enn bare en pub</Eyebrow>
                <Heading>
                  Et sted hvor tiden
                  <br />
                  går litt saktere.
                </Heading>
                <Body>
                  Inspirert av klassiske engelske og skotske puber, med røtter i
                  Notoddens industrielle historie. Her handler det om atmosfære,
                  fellesskap og de gode samtalene.
                </Body>
                <div className="intro-perks">
                  <div className="intro-perk">
                    <Beer size={25} />
                    <span>
                      Gode
                      <br />
                      drikker
                    </span>
                  </div>
                  <div className="intro-perk">
                    <Users size={25} />
                    <span>
                      Fellesskap
                      <br />
                      og samtaler
                    </span>
                  </div>
                  <div className="intro-perk">
                    <Music size={25} />
                    <span>
                      Musikk
                      <br />
                      og kultur
                    </span>
                  </div>
                </div>
                <Button to="/om-oss">
                  Oppdag Linna <ArrowUpRight size={16} />
                </Button>
              </div>
            </Reveal>
            <Reveal>
              <img
                className="intro-photo"
                src="/english-scottish-pub.png"
                alt="Illustrasjon av en tradisjonell engelsk-skotsk pub med mørkt treverk, lune lamper og peis"
                loading="lazy"
              />
            </Reveal>
          </PubIntro>
        </Container>
      </Section>
      <Section $alternate>
        <Container>
          <Split>
            <Reveal>
              <img
                src={photos.interior}
                alt="Stemningsbilde fra et tradisjonelt serveringssted"
                loading="lazy"
              />
            </Reveal>
            <Reveal>
              <Eyebrow>Vår historie</Eyebrow>
              <Heading>Inspirert av 1930-tallets pubtradisjon.</Heading>
              <Body>
                Vi henter inspirasjon fra en tid da puben var nabolagets
                naturlige samlingssted. Mørke materialer, varme toner og plass
                til å være seg selv.
              </Body>
              <Button to="/om-oss">
                Les historien <ArrowUpRight size={16} />
              </Button>
            </Reveal>
          </Split>
        </Container>
      </Section>
      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Opplev Linna</Eyebrow>
            <Heading>
              Små øyeblikk.
              <br />
              Store minner.
            </Heading>
          </Reveal>
          <FeatureGrid>
            {[
              [
                "God atmosfære",
                "Et rom for å senke skuldrene. Varme materialer, dempet belysning og gode sitteplasser inviterer til lange samtaler, spontane møter og en liten pause fra hverdagen.",
                Landmark,
              ],
              [
                "Mat & drikke",
                "Se for deg noe godt i glasset, små smaker å dele og en kveld uten hastverk. Menyinnholdet her er et redaksjonelt konsept og må godkjennes av puben.",
                Users,
              ],
              [
                "Kultur & fellesskap",
                "Musikk, historier og felles opplevelser gjør en vanlig kveld til noe mer. Her er det plass til både gamle venner, nye bekjentskaper og lokale tradisjoner.",
                Music,
              ],
            ].map(([t, d, Icon]) => (
              <article key={t}>
                <Icon size={25} color={palette.wine} />
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </FeatureGrid>
        </Container>
      </Section>
      <Section $dark>
        <Container>
          <Reveal>
            <Eyebrow>Det skjer på Linna</Eyebrow>
            <Heading>
              En pub med liv
              <br />
              og historie.
            </Heading>
            <Body $light>
              En god pub handler også om det som skjer mellom menneskene.
              Forestill deg levende musikk, spill rundt bordet og kvelder der
              historiene får god tid. Aktivitetene nedenfor er konseptforslag;
              datoer og program er ikke bekreftet.
            </Body>
          </Reveal>
          <EventGrid>
            {activities.map((a, i) => (
              <article key={a.title}>
                <Eyebrow>0{i + 1} / Opplevelse</Eyebrow>
                <h3>{a.title}</h3>
                <p>
                  {a.text}{" "}
                  {
                    [
                      "En intim ramme for toner, rytmer og samtaler etter musikken.",
                      "Samle vennegjengen til brettspill, quiz-inspirerte møter og uformelle utfordringer.",
                      "Et sted der lokale fortellinger og pubtradisjoner kan møtes over samme bord.",
                    ][i]
                  }
                </p>
                <Button $outline to="/aktiviteter">
                  Utforsk <ArrowUpRight size={15} />
                </Button>
              </article>
            ))}
          </EventGrid>
        </Container>
      </Section>
      <Section $alternate>
        <Container>
          <Editorial>
            <Reveal>
              <Eyebrow>Et bord å samles rundt</Eyebrow>
              <Heading>Den beste kvelden trenger ingen stor anledning.</Heading>
              <p>
                En rolig prat etter jobb, et gjensyn med venner eller en spontan
                tur ut. Linna-konseptet setter den uformelle opplevelsen først:
                finn favorittplassen, bli sittende litt lenger og la kvelden ta
                sin egen retning.
              </p>
              <p>
                Med inspirasjon fra britisk pubkultur og Notoddens
                industrihistorie er ambisjonen å skape et sted som føles kjent,
                selv første gang du kommer inn.
              </p>
              <Button to="/om-oss">
                Bli kjent med oss <ArrowUpRight size={16} />
              </Button>
            </Reveal>
            <img
              src={photos.social}
              alt="Illustrasjonsfoto av et varmt og sosialt serveringssted"
              loading="lazy"
            />
          </Editorial>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>En liten pause</Eyebrow>
          <Heading>Finn din plass. Bli en stund.</Heading>
          <Quote>
            «Noen av de beste historiene begynner med at noen setter seg ned ved
            samme bord.»
          </Quote>
          <Body>
            Kom innom for atmosfæren, samtalene eller bare for å utforske et
            pubkonsept med særpreg. Se våre sider for mat, aktiviteter og
            besøksinformasjon.
          </Body>
          <Button to="/mat-og-drikke">
            Utforsk mat & drikke <ArrowUpRight size={16} />
          </Button>
        </Container>
      </Section>
      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Et glimt av stemningen</Eyebrow>
            <Heading>Galleri</Heading>
            <Body>
              Et visuelt innblikk i stemningen vi ønsker å formidle. Bildene er
              illustrative og må erstattes med bilder fra Linna Pub før
              publisering.
            </Body>
          </Reveal>
          <Gallery>
            {[
              photos.hero,
              photos.interior,
              photos.bar,
              photos.social,
              photos.food,
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Illustrativt pub-stemningsbilde ${i + 1}`}
                loading="lazy"
              />
            ))}
          </Gallery>
          <div style={{ marginTop: 30 }}>
            <Button to="/galleri">
              Se hele galleriet <ArrowUpRight size={16} />
            </Button>
          </div>
        </Container>
      </Section>
      <Closing>
        <Container>
          <Eyebrow>Vi gleder oss til å se deg</Eyebrow>
          <h2>Velkommen inn.</h2>
          <p>Finn veien til Linna Pub i Notodden.</p>
          <Button to="/kontakt">
            Finn oss <ArrowUpRight size={16} />
          </Button>
        </Container>
      </Closing>
    </>
  );
}
