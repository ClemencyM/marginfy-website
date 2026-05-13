# Marginfy — Deployment Guide

## Prerequisites

- Node.js 18+
- npm 9+
- Vercel account
- Custom domain: www.marginfy.com

---

## 1. Install Dependencies

```bash
npm install
```

You will also need these two Tailwind plugins:

```bash
npm install tailwindcss-animate @tailwindcss/typography
```

---

## 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in all values:

```bash
cp .env.example .env.local
```

### Required Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (G-XXXXXXXXXX) |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID |
| `RESEND_API_KEY` | Resend API key for contact form emails |
| `RESEND_FROM_EMAIL` | Sending email (must be verified in Resend) |
| `RESEND_TO_EMAIL` | Where to receive contact form submissions |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly booking URL |
| `NEXT_PUBLIC_SITE_URL` | `https://www.marginfy.com` |

### Optional Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta/Facebook Pixel ID |

---

## 3. Calendly Setup

1. Create a Calendly account at calendly.com
2. Create an event type: "Discovery Call" (30 minutes)
3. Copy the booking URL (e.g. `https://calendly.com/clemency-mdaya/discovery-call`)
4. Add to `.env.local` as `NEXT_PUBLIC_CALENDLY_URL`

---

## 4. Resend Setup (Email)

1. Create account at resend.com
2. Add and verify your domain (marginfy.com)
3. Create an API key with `Sending access`
4. Add to `.env.local`:
   - `RESEND_API_KEY=re_...`
   - `RESEND_FROM_EMAIL=noreply@marginfy.com`
   - `RESEND_TO_EMAIL=admin@marginfy.com`

---

## 5. Google Analytics 4

1. Create GA4 property at analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local` as `NEXT_PUBLIC_GA_ID`

---

## 6. Microsoft Clarity

1. Create project at clarity.microsoft.com
2. Get the project ID (10-character alphanumeric)
3. Add to `.env.local` as `NEXT_PUBLIC_CLARITY_ID`

---

## 7. Add Founder Photo

Replace the placeholder in `components/sections/FounderSection.tsx` with a real photo.

Add the image to `public/images/clemency-mdaya.jpg` and update the component to use:

```tsx
import Image from "next/image";
<Image
  src="/images/clemency-mdaya.jpg"
  alt="Clemency Mdaya — Founder & Fractional CFO, Marginfy"
  fill
  className="object-cover object-top"
  priority
/>
```

---

## 8. Add Logo/Favicon

Replace the placeholder logo with an SVG or PNG:
- `public/favicon.ico` — 32×32 favicon
- `public/icon.svg` — SVG icon
- `public/apple-touch-icon.png` — 180×180 PNG
- `public/icon-192.png` — 192×192 PNG for manifest
- `public/icon-512.png` — 512×512 PNG for manifest
- `public/images/marginfy-logo.svg` — Full logo for schema markup

---

## 9. Google Search Console

1. Go to search.google.com/search-console
2. Add property for `www.marginfy.com`
3. Get verification meta tag token
4. Replace `YOUR_SEARCH_CONSOLE_TOKEN` in `app/layout.tsx`

---

## 10. Local Development

```bash
npm run dev
```

Visit http://localhost:3000

---

## 11. Deploy to Vercel

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: GitHub Integration

1. Push repository to GitHub
2. Import project in Vercel dashboard
3. Add all environment variables in Vercel project settings
4. Deploy

---

## 12. Custom Domain

In Vercel project settings:
1. Go to Settings → Domains
2. Add `marginfy.com` and `www.marginfy.com`
3. Follow DNS configuration instructions
4. Set `www.marginfy.com` as primary (redirect bare domain to www)

---

## 13. Content Editing

### Blog Posts

Blog posts are MDX files in `/content/blog/`.

Each file uses this frontmatter:

```yaml
---
title: "Your Post Title"
description: "Meta description (120–155 chars)"
date: "2025-01-15"
author: "Clemency Mdaya"
category: "Pricing Strategy"
tags: ["pricing", "profitability"]
readingTime: "5 min read"
featured: false
---
```

Add new posts by creating new `.mdx` files. They appear automatically in `/blog`.

### Case Studies

Case studies are in `/content/case-studies/`. Same MDX format with additional frontmatter fields (`industry`, `challenge`, `outcome`, `metrics`).

---

## 14. Performance Checklist

Before going live:
- [ ] All environment variables set in Vercel
- [ ] Founder photo added
- [ ] Logo/favicon created and added
- [ ] Calendly URL configured
- [ ] Resend domain verified and email tested
- [ ] GA4 property created
- [ ] Search Console verified
- [ ] Test contact form
- [ ] Check all pages load on mobile
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Verify llms.txt at `/llms.txt`
- [ ] Update ABN in Footer once registered

---

## 15. SEO Checklist

- [ ] Update `YOUR_SEARCH_CONSOLE_TOKEN` in `app/layout.tsx`
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Business Profile (if applicable)
- [ ] Install and verify Google Analytics 4

---

## Support

Contact: admin@marginfy.com
