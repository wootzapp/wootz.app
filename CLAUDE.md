# Wootzapp Mobile Browser - Static Site

## Project Overview
This is a Next.js static site for Wootzapp Mobile Browser, deployed on GitHub Pages at www.wootz.app. The site markets an Android enterprise browser with security and mobile workforce management features.

## Technical Stack
- **Framework**: Next.js 15.3.4 with TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **UI Library**: Radix UI primitives
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Icons**: Lucide React

## Key Configuration
- **Static Export**: `next.config.ts` configures `output: "export"` for static site generation
- **Build Output**: Exports to `out/` directory for GitHub Pages compatibility
- **Domain**: Custom domain www.wootz.app configured via `public/CNAME`
- **Branch**: Main branch is `fixes-sec` (used for deployments)

## Deployment
- **Platform**: GitHub Pages
- **Automation**: GitHub Actions workflow at `.github/workflows/deploy.yml`
- **Trigger**: Automatic deployment on pushes to `fixes-sec` branch
- **Build Process**: `npm install` → `npm run build` → deploy `out/` folder

## Site Structure
```
src/app/
├── page.tsx                           # Homepage (main marketing page)
├── layout.tsx                         # Root layout with fonts and metadata
├── globals.css                        # Global styles
├── data-transfer/page.tsx             # Data transfer solutions page
├── eula/page.tsx                      # End User License Agreement
├── future-of-enterprise-browsers/page.tsx # Enterprise browser research
├── genai/page.tsx                     # GenAI solutions page
├── industries/page.tsx                # Industry-specific solutions
├── privacy-policy/page.tsx            # Privacy policy
└── terms/page.tsx                     # Terms of service

src/components/
├── header.tsx                         # Site header with navigation
├── footer.tsx                         # Site footer
└── ui/                               # Reusable UI components
    ├── button.tsx
    ├── card.tsx
    └── select.tsx
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (generates static export)
- `npm run start` - Start production server (not used for static deployment)
- `npm run lint` - Run ESLint

## Content Overview
The site promotes Wootzapp Mobile Browser as an enterprise security solution featuring:
- Zero-trust access and built-in DLP
- Device health monitoring and adaptive controls
- VDI/VPN replacement capabilities
- Mobile workforce security management
- Chrome policy enforcement for unmanaged devices

## Key Features
- **Responsive Design**: Mobile-first with responsive navigation
- **Interactive Components**: Tabbed sections with comparison views
- **Call-to-Actions**: Links to Google Calendar for demos/trials
- **Static Generation**: Optimized for fast loading and SEO
- **Enterprise Focus**: B2B marketing site for IT/security decision makers

## Important Files
- `next.config.ts` - Static export configuration
- `public/CNAME` - Custom domain configuration
- `.github/workflows/deploy.yml` - Deployment automation
- `src/app/page.tsx` - Main homepage with product features
- `src/components/header.tsx` - Site navigation

## Deployment Notes
- Site automatically deploys when code is pushed to `fixes-sec` branch
- Uses GitHub Pages with custom domain www.wootz.app
- Static files are served from the `out/` directory after build
- No server-side rendering - fully static site