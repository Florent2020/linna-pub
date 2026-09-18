# Linna Pub — Expanded React redesign

A redesigned multi-page concept based on the supplied Relume layout and existing React project.

## Start
1. Extract ZIP, open the `linna-pub` folder in VS Code.
2. Run `npm install` in the terminal.
3. Run `npm start` and open http://localhost:3000.
4. For deployment, run `npm run build` and deploy the generated `build` directory. Configure your hosting provider to rewrite unknown routes to `/index.html` for React Router.

## Stack
Create React App, React 18, React Router 6, styled-components, Framer Motion, Lucide React. No global CSS, Vite, Next.js, or custom webpack configuration.

## Updates
- Left-aligned homepage hero and inner-page banners.
- More editorial sections, longer experience descriptions, additional activity content and enhanced footer.
- Expanded About, Food & Drinks, Activities, Gallery, and Contact pages.
- Contact form includes validation and a clearly labelled demonstration status. It DOES NOT send email or save submissions. Connect it to a backend, EmailJS, or Formspree before launch.
- Gallery lightbox supports keyboard Escape and arrow navigation.

## IMPORTANT: demonstration content
Some text, menu categories, and activity ideas are fictional editorial examples as requested. They are NOT verified statements about Linna Pub. No fictional prices, opening hours, address, or contact details have been presented as real. Verify all business information and obtain approval from the owner before publishing. Photographs use third-party Unsplash URLs as illustrative examples and must be replaced with licensed real venue images before launch. Image URLs may fail if removed by their provider.

## Code locations
- `src/pages/Home.jsx` — homepage
- `src/pages/Inner.jsx` — About, Menu, Activities, Gallery, Contact, 404
- `src/components/Layout.jsx` — header and footer
- `src/components/UI.jsx` — shared styled components
- `src/data/site.js` — navigation, colors, image URLs, activity data

No node_modules are included. The source has been syntax-checked, but dependency installation and a full production build have not been executed in this environment.

## Alignment update
All six page hero titles, section headings, and the homepage closing CTA are left aligned within a 1200px maximum-width container (including its horizontal padding).


## Arkitektur (oppdatert)
Hver side har sin egen JSX-fil og sine egne lokale styled-components: `Home.jsx`, `About.jsx`, `Menu.jsx`, `Activities.jsx`, `Gallery.jsx`, `Contact.jsx` og `NotFound.jsx`. `Inner.jsx` er fjernet. Felles layout-primitiver finnes i `src/components/UI.jsx`, uten global CSS.
