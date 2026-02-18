# 📸 Dynamic Drive Portfolio

> **Turn a boring Google Drive folder into a stunning, branded portfolio.**
> featuring a "Dynamic Island" header and Pinterest-style masonry grid.

![Project Status](https://img.shields.io/badge/Status-Prototype-orange)
![Tech Stack](https://img.shields.io/badge/Built%20With-Nuxt%203%20%7C%20Vue.js%20%7C%20Tailwind-green)

## 📖 About The Project

Wedding and event photographers often face a dilemma: **Google Drive is easy to share, but it kills your brand.** Sending a client a generic folder link looks unprofessional and hides your contact details, making referrals difficult.

**Dynamic Drive Portfolio** acts as a sleek "wrapper" for your Google Drive folders. It fetches images dynamically using the Drive API and presents them in a premium, infinite-scroll gallery.

### ✨ Key Features
* **Honeycomb/Masonry Layout:** Handles vertical and horizontal images perfectly (like Pinterest) without cropping.
* **Dynamic Island Header:** A floating navigation pill that expands on interaction (contact info, bio, social links) and shrinks unobtrusively while scrolling.
* **Google Drive Sync:** No CMS needed. Just drop photos into your Drive folder, and the site updates automatically.
* **Smart Caching:** Uses server-side caching to prevent hitting Google API rate limits.
* **Lazy Loading:** Optimized for speed; fetches high-res thumbnails only when they enter the viewport.

---

## 🛠️ Tech Stack

This project is built to be **lightweight**, **free to host**, and **fast**.

* **Framework:** [Nuxt 3](https://nuxt.com/) (Vue.js) - *Handles Frontend & Server Routes*
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) - *Utility-first styling*
* **Motion:** [@vueuse/motion](https://motion.vueuse.org/) - *For the smooth "Dynamic Island" physics*
* **Logic:** [@vueuse/core](https://vueuse.org/) - *Scroll detection & window management*
* **Data Source:** Google Drive API v3

---

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or later)
* A Google Cloud Project with **Drive API** enabled.

### 1. Clone & Install
```bash
# Clone the repo
git clone [https://github.com/your-username/dynamic-drive-portfolio.git](https://github.com/your-username/dynamic-drive-portfolio.git)

# Enter directory
cd dynamic-drive-portfolio

# Install dependencies
npm install