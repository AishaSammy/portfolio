# Portfolio

Personal portfolio of **Ayshe Sammiyeva Gurbandurdyyeva**, a full-stack developer working with Laravel, Django, Vue.js and Nuxt.js.

A dark, terminal-inspired site with a light/dark toggle, server-side rendering and a working contact form. Built to be deployed on [Vercel](https://vercel.com).

## Features

- Nuxt 3 with server-side rendering (Vue 3, TypeScript)
- Terminal-style dark theme, with a light theme toggle that remembers the choice
- Sections: Hero, About, Projects, Tech stack, Experience, Contact
- Navigation that highlights the section you are reading, shown as `{ about }`
- Typing animation for roles, and an "years of experience" counter computed from a start date
- Contact form through a Nitro API route that sends email with [Resend](https://resend.com), with a honeypot field and input validation
- Responsive layout, from phones to wide screens
- All content in one file, `data/content.ts`

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Nuxt 3, Vue 3 |
| Language | TypeScript |
| Styling | Plain CSS with CSS variables (no UI framework) |
| Email | Resend (called from a server route) |
| Hosting | Vercel |

## Getting started

Requirements: Node.js 18 or newer (Node 22 recommended) and npm.

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

Other scripts:

```bash
npm run build      # production build
npm run preview    # preview the production build
npm run generate   # static generation (the contact API needs a server, so use build for Vercel)
```

## Editing the content

Almost everything you see on the page comes from [`data/content.ts`](data/content.ts):

- `profile`: name, tagline, availability, links, summary, career start date, highlights
- `stack`: the tech stack groups
- `languages`: spoken languages with levels
- `projects`: project cards (name, description, tech, optional `live`, `repo`, `image`)
- `experience` and `education`
- `volunteering`: written as `Role — Organization`

Images and files live in `public/`:

| File | Used for |
| --- | --- |
| `public/profile-cutout.webp` | Hero photo (transparent background, so the head sticks out of the circle) |
| `public/projects/` | Project screenshots |
| `public/resume.pdf` | The CV, downloaded as `ayshesammiyeva-resume.pdf` |
| `public/favicon.svg` | Site icon |

## Contact form setup

The form posts to `/api/contact` (`server/api/contact.post.ts`), which sends the message with Resend.

1. Create an API key at [resend.com](https://resend.com).
2. Copy `.env.example` to `.env` and fill in the values:

   ```bash
   NUXT_RESEND_API_KEY=your_key_here
   NUXT_CONTACT_TO_EMAIL=you@example.com
   NUXT_CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
   ```

3. On Vercel, add the same three variables under **Project → Settings → Environment Variables**.

`onboarding@resend.dev` works for testing. For real use, verify your own domain in Resend and use an address on it.

Without `NUXT_RESEND_API_KEY` the form shows an error message instead of sending.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Nuxt automatically, so the default build settings are fine.
4. Add the environment variables from the section above.
5. Deploy.

## Project structure

```
.
├── app.vue                  # Page layout: nav, sections, footer
├── components/              # AppNav, AppHero, AppAbout, AppProjects, AppStack, ...
├── data/content.ts          # All site content
├── assets/css/main.css      # Theme and styles
├── server/api/contact.post.ts  # Contact form endpoint
├── public/                  # Images, CV, favicon
└── nuxt.config.ts
```

## Privacy note

`public/resume.pdf` is served publicly, and so is anything inside it. Before publishing, check that the CV contains only the contact details you want to share.
