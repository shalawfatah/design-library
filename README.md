# Design Library

A production-ready design library based on Tailwind with reusable components, consistent styling, and developer-friendly APIs.

## Installation

\`\`\`bash
npm install design-library
\`\`\`

## Usage

\`\`\`tsx
import { Button } from 'design-library';
import 'design-library/styles';

function App() {
return (

      Click me

);
}
\`\`\`

## Development

\`\`\`bash

# Install dependencies

npm install

# Start Storybook

npm run storybook

# Build library

npm run build

# Type check

npm run type-check
\`\`\`

## Features

- ✨ Reusable UI components
- 📱 Responsive and mobile-first design
- 🌗 Dark mode support
- 🎨 Theming and customization
- ♿ Accessible and semantic HTML
- 📚 Documentation with live examples
- 🚀 Optimized for production

```

## Next Steps

1. Create all the directories and files as shown above
2. Run `npm install` to install all dependencies
3. Run `npm run storybook` to start Storybook
4. Visit `http://localhost:6006` to see your Button component
5. Build your next components following the Button pattern

## Component Development Pattern

For each new component:
1. Create folder in `src/components/ComponentName/`
2. Create `ComponentName.tsx` with variants using CVA
3. Create `ComponentName.stories.tsx` for Storybook
4. Create `index.ts` to export the component
5. Add export to `src/components/index.ts`

## Recommended Next Components

- Input (text, email, password)
- Select / Dropdown
- Checkbox
- Radio
- Badge
- Avatar
- Card
- Modal/Dialog
```
