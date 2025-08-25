# JLportfolio

A modern, responsive portfolio website showcasing full-stack development skills and projects. Built with Next.js and featuring a dark tech theme with electric blue accents.

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 14+** - React framework with App Router
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript

### Styling & Design
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **CVA (Class Variance Authority)** - Component variant management
- **Lucide React** - Icon library
- **Custom Design System** - Dark slate theme with electric blue accents

### Typography
- **Playfair Display** - Elegant serif font for headings
- **Source Sans 3** - Clean sans-serif font for body text

### Development Tools
- **ESLint** - Code linting
- **TypeScript Config** - Type checking configuration
- **Next.js Config** - Framework configuration

### Key Features
- 🎨 **Dark Tech Theme** - Professional dark slate background with high-contrast colors
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Electric Blue Accents** - Glowing animations and hover effects
- 🧩 **Reusable Components** - Modular component architecture
- 🎯 **Accessibility** - WCAG compliant design
- 🚀 **Performance Optimized** - Fast loading and smooth animations

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── hero.tsx           # Hero section with introduction
│   ├── about.tsx          # About section with skills
│   ├── projects.tsx       # Featured projects showcase
│   ├── experience.tsx     # Professional experience timeline
│   ├── contact.tsx        # Contact form and information
│   ├── navigation.tsx     # Main navigation component
│   └── resume-modal.tsx   # Resume viewer modal
├── data/                  # Added data configuration files
│   ├── projects.ts        # Project data and configurations
│   └── skills.ts          # Skills and technology data
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/               # Static assets and images
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary**: Dark Teal (`oklch(0.35 0.15 200)`)
- **Accent**: Dark Purple (`oklch(0.4 0.2 280)`)
- **Background**: Dark Slate (`oklch(0.08 0.01 220)`)
- **Electric Blue**: Custom electric blue with glow effects

### Component Architecture
- **Reusable Components**: Fully modular card and button components
- **Data Separation**: Content extracted from presentation logic into data files
- **Button Variants**: Default, Electric, Electric Outline, Navigation, with XL sizing
- **Responsive Design**: Mobile-first with breakpoint optimization
- **Animation System**: Smooth hover effects and transitions

### Key Architecture Features
- 🏗️ **Separation of Concerns** - Content data separated from presentation components
- 🔄 **Reusable Components** - Modular card and button systems with variant support
- 📊 **Type Safety** - Full TypeScript interfaces for all data structures
- 🎛️ **Easy Content Management** - Centralized data files for projects and skills

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone [(https://github.com/Jozewski/JLportfolio.git)l]
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📧 Contact

- **Email**: joanneliszewski@gmail.com
- **Location**: Mesa, Arizona
- **GitHub**: [github.com/Jozewski](https://github.com/Jozewski)
- **LinkedIn**: [linkedin.com/in/joanne-liszewski-437036125](https://linkedin.com/in/joanne-liszewski-437036125)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
