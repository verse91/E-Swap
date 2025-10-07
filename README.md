<div align="center">
  
  <img width="397" height="422" alt="E-Swap Logo" src="https://github.com/user-attachments/assets/6c95cbf2-dd60-493e-b280-0a5ba575004b" />
  
  # E-Swap
  
  ⚡ Smart Electric Motorbike Battery Swapping Platform
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![Supabase](https://img.shields.io/badge/Supabase-2.74-3ecf8e?style=flat-square&logo=supabase)](https://supabase.com/)
  [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

  [Website](https://e-swap.vercel.app) • [Documentation](docs/) • [Contributing](CONTRIBUTING.md)

</div>

---

## 🌟 Overview

**E-Swap** offers a smart electric motorbike battery swapping infrastructure powered by 100% on-site solar energy, creating an open and zero-emission platform for Vietnam's urban transport.

Our mission is to accelerate the transition to clean energy transportation by making battery swapping convenient, affordable, and sustainable.

## ✨ Features

- 🔋 **Smart Battery Management** - Real-time tracking and optimization
- ⚡ **Fast Swap Technology** - Replace your battery in under 60 seconds
- 🌞 **100% Solar Powered** - Sustainable charging infrastructure
- 📱 **Mobile App Integration** - Find stations and manage subscriptions
- 🔐 **Secure Authentication** - Supabase-powered user management
- 🌍 **Multi-language Support** - Vietnamese and English interfaces
- 💳 **Flexible Pricing** - Pay-per-swap or subscription plans

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [Supabase Auth](https://supabase.com/auth)
- **Database**: [Supabase PostgreSQL](https://supabase.com/database)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Package Manager**: [Yarn](https://yarnpkg.com/)

## 📦 Installation

### Prerequisites

- Node.js 18+ or Bun
- Yarn package manager
- Supabase account

### Quick Start

```bash
# Clone the repository
git clone https://github.com/verse91/E-Swap.git
cd E-Swap

# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📜 Available Scripts

```bash
# Development
yarn dev          # Start development server with Turbopack
yarn build        # Build for production
yarn start        # Start production server

# Code Quality
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript compiler check

# Testing
yarn test         # Run tests (if configured)
```

## 🏗️ Project Structure

```
E-Swap/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   └── login-form.tsx
│   ├── lib/             # Utility functions and configs
│   │   ├── auth-context.tsx
│   │   ├── supabaseClients.ts
│   │   └── terms.ts
│   └── styles/          # Global styles
├── public/              # Static assets
├── .env.local          # Environment variables (gitignored)
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a Pull Request to the `dev` branch

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:
- Commit conventions
- Code style
- PR process
- Branch naming

## 🔄 Git Workflow

```
main (production)
  └── dev (development)
       ├── feat/feature-name
       ├── fix/bug-name
       └── docs/doc-name
```

- `main`: Production-ready code
- `dev`: Development branch for integration
- Feature branches: Created from `dev`, merged back to `dev`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Verse** - [@verse91](https://github.com/verse91) - Project Lead
- **Khoa Minh** - Authentication & UI/UX

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Supabase](https://supabase.com/) for backend infrastructure
- [shadcn](https://ui.shadcn.com/) for beautiful UI components
- Vietnamese EV community for inspiration

## 📞 Contact & Support

- **Email**: versedev.store@proton.me
- **GitHub Issues**: [Create an issue](https://github.com/verse91/E-Swap/issues)
- **Discussions**: [GitHub Discussions](https://github.com/verse91/E-Swap/discussions)

---

<div align="center">
  Made with ❤️ in Vietnam 🇻🇳
  
  ⚡ Powering the Future of Urban Mobility
</div>

