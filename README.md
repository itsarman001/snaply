# 📸 Snaply

> **Don't share a link. Share an experience.**

![Project Status](https://img.shields.io/badge/Status-In%20Development-orange)
![Tech Stack](https://img.shields.io/badge/Built%20With-Nuxt%203%20%7C%20Tailwind%20%7C%20Drive%20API-green)

## 📖 About The Project

### 🚨 The Issue
While Google Drive is the industry standard for event and wedding photographers to deliver high-volume images cost-effectively, it destroys brand equity. When a client shares a standard Drive link with hundreds of wedding guests, the viewing experience is sterile and generic. The photographer loses all visibility—there is no branding, no bio, and no easy way for an impressed guest to contact the creator. The photographer does the hard work, but the platform takes the interface, resulting in a massive loss of potential referral business.

### 🎯 The Purpose
**Snaply** bridges the gap between effortless file management and premium client delivery. It acts as a sleek, zero-CMS frontend wrapper that transforms a standard Google Drive folder into an immersive, native-feeling, Pinterest-style gallery across mobile, tablet, and desktop. By keeping the photographer's contact information accessible via a "Dynamic Island" header, Snaply turns every shared client gallery into a beautiful, high-converting lead generation tool without disrupting the photographer's existing workflow.

---

## ✨ Features & Roadmap

The development of Snaply is broken down into three core phases:

### 🟢 P0: Minimum Viable Product (Core Experience)
- **Google Drive Integration:** Fetch images dynamically from a provided Drive Folder ID using the Google Drive API.
- **Immersive Masonry Grid:** A Pinterest/Honeycomb style layout that handles mixed aspect ratios seamlessly.
- **Dynamic Island Header:** A floating, glassmorphic UI element holding the photographer's branding that expands on tap for social links and shrinks on scroll.
- **Responsive UI:** Tailored views for Mobile (immersive feed), Tablet (organized discovery sidebar), and Desktop (cinematic grid).
- **Directory Navigation:** Map Google Drive sub-folders (e.g., "Mehendi", "Reception") to dynamic routes.

### 🟡 P1: High-Value Additions (Growth Phase)
- **Basic Search:** Filter the gallery based on folder names and file creation dates.
- **Featured Section:** An Instagram-stories style horizontal scroll at the top for "Highlights," powered by filtering for "Starred" images in Drive.
- **Analytics Dashboard:** Track most viewed pictures, most downloaded images, and session time.
- **Access Control:** Basic password protection or profile-based access to hide specific folders from the general guest link.

### 🔴 P2: Advanced Features (SaaS Phase)
- **People Section (Face Recognition):** Auto-categorize images by faces using an AI vision backend.
- **Advanced Search:** Extract EXIF data for GPS coordinates and tie into the facial recognition database.
- **Image-Based Threads:** A database-driven social layer allowing guests to upvote, react, and leave comments on specific images.

---

## 🛠️ Tech Stack

- **Framework:** [Nuxt 3](https://nuxt.com/) (Vue.js)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [@vueuse/motion](https://motion.vueuse.org/) (for Dynamic Island physics)
- **Logic & Scroll:** [@vueuse/core](https://vueuse.org/)
- **Data Source:** Google Drive API v3

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- A Google Cloud Project with the **Google Drive API** enabled.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/snaply.git](https://github.com/your-username/snaply.git)
   cd snaply

```

2. Install dependencies:
```bash
npm install

```


3. Configure Environment Variables:
Create a `.env` file in the root directory and add your Google Cloud credentials:
```ini
# Service Account JSON string or API details
GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."

# Target Drive Folder ID
NUXT_PUBLIC_DRIVE_FOLDER_ID="your_folder_id_here"

```


4. Start the development server:
```bash
npm run dev

```


Open `http://localhost:3000` to view the app.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License.