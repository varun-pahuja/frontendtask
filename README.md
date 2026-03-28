# Research Quest - Hackathon Landing Page

A modern, responsive hackathon landing page built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Interactive Elements**: ReactBits + 21st.dev
- **Components**: ReactBit + 21st Dev
- **Deployment**: Vercel/Netlify (Ready)

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header nav
│   ├── Footer.tsx          # Footer
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Themes.tsx
│       ├── Timeline.tsx
│       ├── Prizes.tsx
│       ├── FAQ.tsx
│       └── Contact.tsx
└── lib/                    # Utilities & helpers
```

## 🎨 Design System

- **Primary Color**: `#0f0f0f` (Dark)
- **Secondary**: `#1a1a1a`
- **Accent**: `#FF6B5B` (Coral)
- **Font**: Inter (body), Display font (headings)
- **Theme**: Dark mode with coral accents

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Features Implemented

- ✅ Responsive Navigation with mobile menu
- ✅ Hero section with countdown timer
- ✅ Features/Benefits grid (About)
- ✅ Hackathon themes/tracks
- ✅ Timeline with events
- ✅ Prize pool display
- ✅ FAQ accordion
- ✅ Contact form
- ✅ Footer
- ✅ Dark theme with coral accents
- ✅ Mobile-first responsive design
- ✅ Smooth animations & transitions

## 🔄 Integration Points Ready

### ReactBits + 21st.dev Elements
- Hero section right panel (placeholder ready)
- Update `src/components/sections/Hero.tsx` with ReactBits/21st.dev component

### ReactBit Components
- Can be integrated into any section
- Maintains consistent styling with existing components

### 21st Dev Components
- Ready for custom animations
- Color scheme aligned with design system

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=.next
```

## 📝 GitHub Setup

```bash
git add .
git commit -m "Initial commit: Next.js 14+ hackathon landing page"
git push origin main
```

## 🎯 Next Steps

1. **Finalize ReactBit components** - Integrate into respective sections
2. **Configure ReactBits + 21st.dev components** - Add to Hero section
3. **Integrate 21st Dev animations** - Add smooth transitions
4. **Connect form backend** (optional) - Email/database integration
5. **Deploy to production** - Vercel or Netlify
6. **SEO optimization** - Meta tags, structured data
7. **Performance audit** - Lighthouse optimization

## 📞 Support

For questions or support, reach out via:
- Email: hello@researchquest.tech
- GitHub Issues: [Create an issue]

## 📄 License

MIT License - Feel free to use this for your hackathon!

---

**Built with ❤️ using Next.js 14+ and modern web technologies**
