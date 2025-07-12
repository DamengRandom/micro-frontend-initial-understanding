# Micro-Frontend (MFE) - (Quick Demo)

## How to start locally

```bash
cd apps/header && pnpm i && pnpm run build
cd apps/trending && pnpm i && pnpm run build
cd host && pnpm i && pnpm run dev
```

## Basic concept

- Shared shell: the shell that is used for share the global states, stylings, and etc
- MFE apps:
  - header: vue app
  - articles list: react app

Later on, these apps can be hosted by a separate domain, and can be injected by the dynamic import

Eg:

```jsx
import { mount as mountHeader } from 'https://header.news-portal.com/dist/header.js';
import { mount as mountTrending } from 'https://tredning.news-portal.com/dist/trending.js';

// Or hosted by some microservices:
[
  {
    "name": "Header",
    "url": "https://header.news-portal.com/dist/header.js"
  },
  {
    "name": "Trending",
    "url": "https://trending.news-portal.com/dist/trending.js"
  }
]

// Then in main.js, can call like this:

export default {
  data() {
    return {
      modules: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://news-portal.com/microfrontends.json');
      const microfrontends = await response.json();

      for (const mfe of microfrontends) {
        const module = await import(mfe.url);
        this.modules.push({
          name: mfe.name,
          component: module.default,
        });
      }
    } catch (error) {
      console.error('Failed to load microfrontends:', error);
    }
  },
  template: `
    <div>
      <h1>Shell App</h1>
      <div v-for="module in modules" :key="module.name">
        <component :is="module.component" />
      </div>
    </div>
  `,
};
```