# Contributing to E-Swap

Thank you for your interest in contributing to E-Swap! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Yarn package manager
- Git

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/verse91/E-Swap.git
cd E-Swap

# Install dependencies
yarn install

# Copy environment variables
cp .env.example .env.local
# Then edit .env.local with your Supabase credentials

# Start development server
yarn dev
```

## 🔄 Development Workflow

1. **Create a feature branch** from `dev`:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** following our code style guidelines

3. **Test your changes**:
   ```bash
   yarn lint
   yarn build
   ```

4. **Commit your changes** using conventional commits (see below)

5. **Push your branch**:
   ```bash
   git push origin feat/your-feature-name
   ```

6. **Open a Pull Request** to the `dev` branch

## 📝 Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, missing semi-colons, etc)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build process or auxiliary tools
- `ci`: Changes to CI configuration files and scripts

### Examples

```bash
# Feature
git commit -m "feat(auth): add Google OAuth sign-in"

# Bug fix
git commit -m "fix(login): resolve password validation error"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Refactor
git commit -m "refactor(components): extract reusable modal component"

# Style
git commit -m "style(login-form): improve spacing and colors"
```

### Detailed Example

```bash
feat(auth): implement email/password authentication

- Add sign-in and sign-up forms with validation
- Integrate Supabase authentication
- Add Vietnamese localization for all messages
- Implement terms and conditions display

Closes #123
```

## 🔀 Pull Request Process

### Before Creating a PR

1. ✅ Ensure your code passes all lint checks: `yarn lint`
2. ✅ Test your changes locally: `yarn dev`
3. ✅ Build the project successfully: `yarn build`
4. ✅ Update documentation if needed
5. ✅ Follow commit conventions for all commits

### PR Title Format

Use the same format as commit messages:

```
feat(scope): brief description
fix(scope): brief description
docs(scope): brief description
```

### PR Description Template

```markdown
## 📝 Description
Brief description of what this PR does

## 🎯 Type of Change
- [ ] 🐛 Bug fix
- [ ] ✨ New feature
- [ ] 🔨 Breaking change
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI update

## 🧪 Testing
How has this been tested?
- [ ] Local development
- [ ] Production build
- [ ] Manual testing

## 📸 Screenshots (if applicable)
Add screenshots or GIFs

## ✅ Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed my own code
- [ ] Commented code in hard-to-understand areas
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests that prove my fix/feature works
- [ ] New and existing tests pass locally

## 🔗 Related Issues
Closes #(issue number)
```

### Review Process

1. **Automatic Checks**: GitHub Actions will run lint and build checks
2. **Code Review**: At least one maintainer review is required
3. **Changes Requested**: Address feedback and push updates
4. **Approval**: Once approved, maintainers will merge to `dev`
5. **Release**: Changes in `dev` will be merged to `main` for production

### Branch Naming Convention

- `feat/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/doc-name` - Documentation
- `refactor/refactor-name` - Code refactoring
- `style/style-name` - UI/UX improvements
- `test/test-name` - Test additions or fixes

## 🎨 Code Style

### TypeScript/React

- Use functional components with hooks
- Use TypeScript for type safety
- Follow ESLint rules (run `yarn lint`)
- Use Prettier for formatting

### Component Structure

```tsx
"use client";

// 1. External imports
import { useState } from "react";

// 2. Internal imports
import { Button } from "@/components/ui/button";

// 3. Type definitions
interface ComponentProps {
  title: string;
}

// 4. Component
export default function Component({ title }: ComponentProps) {
  // State and hooks
  const [count, setCount] = useState(0);

  // Event handlers
  const handleClick = () => {
    setCount(count + 1);
  };

  // Render
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={handleClick}>Count: {count}</Button>
    </div>
  );
}
```

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use custom colors from theme

### File Naming

- Components: `PascalCase.tsx` (e.g., `LoginForm.tsx`)
- Utilities: `kebab-case.ts` (e.g., `auth-utils.ts`)
- Hooks: `use-camelCase.ts` (e.g., `use-auth.ts`)

## 🐛 Reporting Bugs

Create an issue with:
- Clear title describing the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos if applicable
- Environment info (browser, OS, etc.)

## 💡 Requesting Features

Create an issue with:
- Clear title describing the feature
- Detailed description of the feature
- Use cases and benefits
- Mockups/examples if applicable

## 📞 Questions?

- Create a discussion in GitHub Discussions
- Email: versedev.store@proton.me

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to E-Swap! 🎉
