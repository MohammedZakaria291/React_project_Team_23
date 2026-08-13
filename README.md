# Faculty of Computer Science — Benha National University (React Clone)

A React clone of https://cs.bnu.edu.eg/, matching the real site's navigation, pages, and content (programs, news, staff, student union, etc.). Built with React, React Router v7, Tailwind CSS, and i18next.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Pages (matching the real site's structure)

- **Home** — carousel hero, latest news, programs, about preview, vision & mission
- **About the College** (`/about`)
- **Program Director's Speech** (`/dean-speech`)
- **Faculty & Staff Members** (`/staff-members`)
- **Programs** (`/programs`) + program detail pages (`/programs/:id`)
- **News** (`/news`) + article detail pages (`/news/:id`)
- **Contact Us** (`/contact`) — real address, embedded Google Map, contact form
- **Bachelor Student Regulations** (`/bachelor-student-regulations`) — links to the real PDF
- **Study Schedules**, **Exam Schedules**, **Student Guide** — mirror the real site (not yet published there either)
- **Student Union Council** (`/student-union`)
- **404 Not Found**

## Notes on data & images

- Text content (news, programs, staff names/roles, about/dean's-speech copy) is sourced from the live site and rewritten in our own words — copyright rules mean we can't reproduce their article text verbatim.
- Images are **hot-linked directly from `cs.bnu.edu.eg`** (same URLs the live site uses) rather than downloaded/re-hosted, since this is a class/portfolio clone, not a redistribution of their media.
- The exact `<img>` path for the site logo couldn't be confirmed (only alt text was recoverable), so it has an automatic fallback to a plain "CS" badge if that URL turns out to be wrong — swap in the real logo file once you have it.
- The real site's Arabic content wasn't available to scrape, so UI chrome (nav, buttons, forms, footer) is fully bilingual via `locales/`, but the actual page content (news/program/staff text) is English-only, matching what's publicly viewable.
- "Students" in the navbar is a dropdown-only menu with no page of its own — that matches the real site (`/students` 404s there too).

## Features

- Full client-side routing (React Router v7) with a 404 page
- Arabic / English language switcher with RTL / LTR support for site chrome
- Real dropdown navigation matching the live site (Home ▾, Students ▾, Programs, Contact Us, Join Us)
- Contact form with client-side validation, embedded Google Map
- Loading / Empty / Error state components
- Fully responsive (mobile navbar with collapsible dropdown groups)
