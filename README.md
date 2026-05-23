# FGCEOSA Alumni Association - Landing Page

A modern, responsive landing page for the Federal Government College Enugu Old Students Association (FGCEOSA), built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)

## 📦 What's Included

- ✅ **Modern Landing Page** - Fully responsive alumni association website
- ✅ **Dynamic Sections** - Hero, About, Events, Gallery, Testimonials, and more
- ✅ **Content Management** - Easy-to-update markdown-based content
- ✅ **Dark/Light Mode** - Seamless theme switching
- ✅ **Smooth Animations** - Premium interactions with GSAP
- ✅ **Mobile Optimized** - Mobile-first responsive design
- ✅ **SEO Ready** - Optimized metadata and structure

## ✨ Features

### 🏠 **Landing Page Sections**

- **Hero Section**: Eye-catching introduction with call-to-action
- **About Us**: Alumni association history and mission
- **What We Do**: Key activities and initiatives
- **Statistics**: Impact metrics and achievements
- **Our Impact**: Success stories and community contributions
- **Gallery**: Photo showcase with CTA
- **Join Us**: Membership registration
- **News & Events**: Latest updates and upcoming activities
- **Connection Banner**: Community engagement
- **Testimonials**: Alumni success stories
- **Blog**: Articles and updates
- **FAQ**: Common questions answered

### 🎨 **Design Features**

- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Dark/Light Mode**: User preference theme switching
- **Smooth Animations**: GSAP-powered transitions
- **Modern UI**: Clean, professional design
- **Interactive Elements**: Engaging user experience
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Animations**: GSAP 3.13, Lenis smooth scrolling
- **Theme**: next-themes for dark/light mode
- **Content**: Markdown support with gray-matter
- **Maps**: Leaflet with React integration
- **Carousel**: Swiper for image sliders
- **Development**: ESLint, Prettier for code quality

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd fgceosa_landing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
fgceosa_landing/
├── public/                     # Static assets
│   ├── images/                # Images and graphics
│   │   ├── home/             # Homepage images
│   │   ├── about/            # About section images
│   │   ├── gallery/          # Photo gallery
│   │   └── events/           # Event photos
│   └── favicon.ico           # Site favicon
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx         # Homepage
│   │   ├── layout.tsx       # Root layout
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── home/           # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── WhatWeDo.tsx
│   │   │   ├── Statistics.tsx
│   │   │   ├── OurImpact.tsx
│   │   │   ├── GalleryCTA.tsx
│   │   │   ├── JoinUs.tsx
│   │   │   ├── NewsEvents.tsx
│   │   │   └── ConnectionBanner.tsx
│   │   ├── shared/         # Reusable components
│   │   │   ├── header/    # Navigation
│   │   │   ├── footer/    # Footer
│   │   │   └── ui/        # UI components
│   │   └── animation/     # Animation components
│   ├── data/              # Content and data
│   │   ├── blogs/        # Blog posts (markdown)
│   │   ├── services/     # Services data
│   │   ├── team/         # Team members
│   │   └── footer-data.ts
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── types/            # TypeScript definitions
├── config.json           # Application configuration
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Development Workflow

1. **Start Development**: Run `npm run dev`
2. **Make Changes**: Edit components and see live updates
3. **Check Code**: Run `npm run lint` and `npm run format:check`
4. **Fix Issues**: Use `npm run lint:fix` and `npm run format`
5. **Test Build**: Run `npm run build` before deploying

## 🎨 Customization Guide

### Updating Content

#### Homepage Sections

Edit components in `src/components/home/`:

- `Hero.tsx` - Main hero section content
- `AboutUs.tsx` - About section content
- `WhatWeDo.tsx` - Services and activities
- `Statistics.tsx` - Metrics and numbers
- `JoinUs.tsx` - Membership call-to-action
- `NewsEvents.tsx` - Latest news and events

#### Blog Posts

Add markdown files in `src/data/blogs/`:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
author: "Author Name"
excerpt: "Brief description"
---

Your blog post content here...
```

#### Footer Content

Update `src/data/footer-data.ts`:

```typescript
export const footerData = {
  description: "Your organization description",
  social: {
    facebook: "https://facebook.com/yourpage",
    twitter: "https://twitter.com/yourhandle",
    instagram: "https://instagram.com/yourprofile"
  },
  contact: {
    email: "info@fgceosa.org",
    phone: "+234 XXX XXX XXXX"
  }
};
```

### Styling and Theme

#### Colors

Update colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      // Add more custom colors
    }
  }
}
```

#### Typography

Modify font settings in `src/utils/font.ts` or `globals.css`.

### Adding Images

1. Place images in `public/images/`
2. Organize by section (home, about, events, etc.)
3. Use Next.js Image component for optimization:

```tsx
import Image from 'next/image';

<Image
  src="/images/home/hero-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

### Configuration

Edit `config.json` for app-wide settings:

```json
{
  "siteName": "FGCEOSA",
  "siteUrl": "https://fgceosa.org",
  "socialMedia": {
    "facebook": "url",
    "twitter": "url"
  }
}
```

## 🏗️ Building for Production

### Production Build

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

### Build Optimizations

The production build includes:
- Minified JavaScript and CSS
- Optimized images with automatic WebP conversion
- Tree-shaken code for smaller bundle size
- Static generation for better performance
- Compressed assets

## 🚀 Deployment

### Vercel (Recommended)

Easiest deployment for Next.js applications:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

### Other Platforms

#### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `.next`

#### AWS Amplify

1. Connect repository
2. Build settings: Auto-detected for Next.js
3. Deploy

#### DigitalOcean App Platform

1. Create new app from GitHub
2. Select Next.js preset
3. Deploy

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=your-api-url
```

For production, set these in your hosting platform's environment settings.

## 📱 Git Workflow

### Branch Structure

- `master` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches

### Making Changes

```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Make your changes
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/your-feature-name

# Create pull request to develop
```

### Commit Message Format

Follow conventional commits:

```bash
feat: add new alumni registration form
fix: resolve mobile navigation issue
docs: update README installation steps
style: improve hero section spacing
refactor: optimize image loading
```

## 🔍 Common Tasks

### Adding a New Section to Homepage

1. Create component in `src/components/home/`:

```tsx
// src/components/home/NewSection.tsx
const NewSection = () => {
  return (
    <section className="py-20">
      <div className="main-container">
        <h2>Section Title</h2>
        {/* Section content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. Import and add to `src/app/page.tsx`:

```tsx
import NewSection from '@/components/home/NewSection';

const page = () => {
  return (
    <main>
      {/* Other sections */}
      <NewSection />
    </main>
  );
};
```

### Updating Navigation Menu

Edit navigation items in `src/components/shared/header/` component:

```tsx
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '#about' },
  { name: 'Events', path: '#events' },
  // Add more items
];
```

### Managing Events

Create event data structure in `src/data/events/`:

```typescript
export const events = [
  {
    id: 1,
    title: 'Annual Alumni Reunion',
    date: '2024-12-15',
    location: 'School Campus',
    description: 'Join us for our annual reunion...',
    image: '/images/events/reunion.jpg'
  }
];
```

## 🐛 Troubleshooting

### Common Issues

**Build fails with TypeScript errors:**
```bash
npm run lint:fix
# Fix type errors in reported files
```

**Images not loading:**
- Verify image paths start with `/`
- Check images exist in `public/` directory
- Use correct file extensions

**Styles not applying:**
- Check Tailwind class names are correct
- Verify `globals.css` is imported
- Run `npm run dev` to rebuild

**Port already in use:**
```bash
# Use different port
npm run dev -- -p 3001
```

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📧 Support

For issues, questions, or contributions:

- Create an issue in the repository
- Contact the development team
- Email: dev@fgceosa.org

## 📄 License

This project is proprietary to FGCEOSA Alumni Association.

---

**Built with ❤️ for FGCEOSA Alumni Community**
