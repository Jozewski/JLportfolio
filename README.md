# Joanne Liszewski - Portfolio

A modern, responsive portfolio website built with Next.js 14, showcasing my work as a Full-Stack Developer. The site features a clean design with smooth animations and a comprehensive UI component library.

🌐 **Live Site**: [https://j-lportfolio-omega.vercel.app/](https://j-lportfolio-omega.vercel.app/)

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Dark/Light Mode**: Theme switching with next-themes
- **Component Library**: Comprehensive UI components built on Radix UI
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Built with Next.js 14 App Router

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Geist Font** - Modern typography
- **next-themes** - Dark/light mode support

### UI Components
- **Form Handling**: React Hook Form + Zod validation
- **Charts**: Recharts for data visualization
- **Carousel**: Embla Carousel React
- **Animations**: Tailwind CSS Animate + tw-animate-css
- **Notifications**: Sonner for toast notifications
- **Modals**: Vaul for drawer components

### Development Tools
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class handling
- **date-fns** - Date manipulation utilities
- **cmdk** - Command palette component

## 📦 Key Dependencies

\`\`\`json
{
  "next": "14.2.25",
  "react": "^19",
  "typescript": "^5",
  "tailwindcss": "^4.1.9",
  "@radix-ui/react-*": "Latest versions",
  "lucide-react": "^0.454.0",
  "react-hook-form": "^7.60.0",
  "recharts": "2.15.4"
}
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Jozewski/JLportfolio.git
   cd j-lportfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   └── layout.tsx         # Root layout component
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx     # Button variants
│   │   ├── card.tsx       # Card components
│   │   ├── dialog.tsx     # Modal dialogs
│   │   └── ...           # 25+ UI components
│   └── theme-provider.tsx # Theme context provider
├── hooks/                 # Custom React hooks
│   ├── use-mobile.ts     # Mobile detection
│   └── use-toast.ts      # Toast notifications
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
    └── placeholder-*     # Placeholder images
\`\`\`

## 🎨 UI Components

The project includes a comprehensive component library built on Radix UI:

- **Layout**: Accordion, Collapsible, Separator, Tabs
- **Navigation**: Dropdown Menu, Navigation Menu, Menubar
- **Forms**: Input, Select, Checkbox, Radio Group, Switch
- **Feedback**: Alert Dialog, Toast, Progress, Tooltip
- **Data Display**: Avatar, Badge, Card, Chart, Table
- **Media**: Aspect Ratio, Carousel, Scroll Area

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is deployed on Vercel. For your own deployment:

1. **Deploy to Vercel**
   \`\`\`bash
   npx vercel
   \`\`\`

2. **Or connect your GitHub repository** to Vercel for automatic deployments

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 Performance Features

- **App Router**: Latest Next.js routing system
- **Server Components**: Optimized rendering
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Geist font with display swap
- **CSS Optimization**: Tailwind CSS purging

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Joanne Liszewski**
- Portfolio: [https://j-lportfolio-omega.vercel.app/](https://j-lportfolio-omega.vercel.app/)
- Email: [joanneliszewski@gmail.com]
- LinkedIn: [linkedin.com/in/joanne-liszewski-437036125](https://linkedin.com/in/joanne-liszewski-437036125)
- GitHub:[github.com/Jozewski](https://github.com/Jozewski)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS


