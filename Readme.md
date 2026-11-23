# CampusPulse AI

**Unified Academic, Hackathon & Deadline Copilot for Indian College Students**

Built by **Meet Doshi** (Sanjivani College of Engineering, Kopargaon) for **[INNOVATE INDIA 2026](https://unstop.com/hackathons/innovate-hackathon-2026-devharbour-1792025) – Round 2 (Project Development, Solo Participation)**.

---

## Problem Statement

According to the [Ministry of Education AISHE 2023–24 report (PIB)](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2282525&reg=48&lang=1), India has **4.50 crore** higher-education students across **48,246 colleges**, including **1.02 crore STEM learners** ([PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2304606)). Despite this scale, critical academic, scholarship, placement, and hackathon notices remain scattered across WhatsApp groups, college ERP portals, Gmail, and Unstop—causing missed deadlines and avoidable last-minute stress.

## Solution Overview

**CampusPulse AI** converts unstructured Hinglish WhatsApp forwards, email notices, PDF/image circulars, and manually entered schedules into a single, conflict-aware, prioritized timeline with zero login friction and zero university ERP lock-in.

### Key Features
* **User Profile & Message Alerts:** Save your name, email address, phone/WhatsApp number, and preferred alert window (24h, 48h, or 7 days) to receive reminders for any **Remaining** deadline.
* **Manual & Multi-Modal Notice Capture:** Enter exams, hackathons, assignments, scholarships, or campus events manually via **+ Add Schedule**, or paste Hinglish/WhatsApp forwards and attach circular images/PDFs to extract structured deadlines automatically.
* **Live Countdown & Status Tracking:** Tracks exact submission time remaining (`Xd Yh left` / `Overdue`) alongside **Remaining** and **Done** status toggles.
* **Automatic Conflict Detection:** Flags overlapping active deadlines on the same calendar date with a **Schedule Conflict Detected** banner, conflict-only filtering, and inline reprioritization controls.
* **Actionable Prep Checklists:** Track step-by-step preparation progress per deadline with inline step creation persisted in `localStorage`.
* **Notification Dispatch & Calendar Export:** Generate reminder messages with direct WhatsApp and Email send links in **Message Log**, plus one-click **Google Calendar** and `.ics` export on every card.

## Tech Stack
* **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript (ES6+), Lucide Icons (`Inter` + `JetBrains Mono`)
* **AI Extraction Design:** Hinglish/English NLP deadline parser with Gemini Structured JSON Output schema compatibility
* **Persistence & Export:** Browser `localStorage`, WhatsApp (`wa.me`) & Email (`mailto:`) deep-links, Google Calendar URL generator, RFC 5545 `.ics` generator

## Running Locally or Deploying
1. Rename `campuspulse_ai.html` to `index.html`.
2. Open `index.html` directly in any modern browser, or deploy the repository to **Vercel** / **GitHub Pages** for a live public URL.

## Sources
* [Unstop — INNOVATE Hackathon 2026](https://unstop.com/hackathons/innovate-hackathon-2026-devharbour-1792025)
* [PIB — AISHE 2022–23 & 2023–24 Reports (July 2026)](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2282525&reg=48&lang=1)
* [PIB — India's Higher Education Sector (August 2026)](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2304606)
