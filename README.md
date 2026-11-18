# Salesforce Trailblazer Profile Clone

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SaiSakthiMk/trailblazer-profile-clone)

**GitHub Repository:** [https://github.com/SaiSakthiMk/trailblazer-profile-clone](https://github.com/SaiSakthiMk/trailblazer-profile-clone)  
**Profile:** **SAISAKTHI MK**  
**Original URL:** [https://www.salesforce.com/trailblazer/uosi9ld098jtpwbu87](https://www.salesforce.com/trailblazer/uosi9ld098jtpwbu87)

---

## 🔍 Profile Analysis & Extracted Metadata

Inspection of Salesforce's backend chassis and GraphQL API (`https://profile.api.trailhead.com/graphql`) retrieved the following verified details:

| Field | Value |
|---|---|
| **Full Name** | **SAISAKTHI MK** |
| **Salesforce ID** | `005xi008a654vs1AAA` |
| **Profile Slug** | `uosi9ld098jtpwbu87` |
| **Theme Banner** | `https://profile.digital.salesforce.com/images/u/default/golden-sun.png` |
| **Privacy Status** | `isPublicProfile: false` (`PrivateProfile`) |

> ℹ️ **Note on Privacy Status:**
> The profile on Salesforce is currently configured as **Private** (`PrivateProfile`). Salesforce hides user badges, rank, certifications, and learning history from anonymous public visitors and displays *"This profile is private"*.
>
> In this clone, you can toggle between **Public Portfolio View** (unlocked showcase) and **Locked View** (the exact Salesforce private state).

---

## 🚀 Features of the Clone

1. **Lightning Design System (SLDS) Styling:**
   - Authentic Salesforce brand colors (`#0176D3`, `#032D60`, `#00A1E0`), typography, elevated cards, and responsive layout.
2. **Interactive Simulation Toolbar:**
   - **Public Portfolio View:** Unlocks the full Trailblazer profile with Ranger rank, Superbadges, active certifications, skills breakdown, and points.
   - **Locked View:** Demonstrates the exact private profile lock card shown by Salesforce.
   - **Customize Profile:** Built-in modal to modify name, title, bio, points, and badges with real-time preview and `localStorage` persistence.
   - **Live SF SPA:** Opens the official Salesforce SPA wrapper (`index_salesforce_live.html`).
3. **Filterable & Searchable Badges:**
   - Filter awards by Superbadges, Modules, Projects, and Community Events.
4. **Official Salesforce High-Res Badges & Ranks:**
   - Linked directly to Salesforce and Cloudinary verified assets.

---

## 💻 How to Run

### Option 1: Direct in Browser
Simply double-click or open `index.html` in any modern web browser.

### Option 2: Using the Python Server
Run the included lightweight local server:
```bash
python3 server.py
```
Then visit: [http://localhost:3000/index.html](http://localhost:3000/index.html)

---

## 📁 Project Structure

- `index.html` — The main standalone Salesforce Trailblazer profile application.
- `styles.css` — Lightning Design System responsive stylesheet.
- `app.js` — Interactive profile logic, tabs, filtering, and persistence.
- `index_salesforce_live.html` — The original Salesforce SPA shell with patched CDN endpoints.
- `extract_profile.py` — Python utility to fetch and query Trailhead GraphQL data.
- `server.py` — Local HTTP server for testing.
