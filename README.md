# OS on the Web — iOS Simulator in the Browser

A pixel-faithful **iOS simulator that runs entirely in the browser**: an iPhone frame with a working lock screen, home screen, app library, control center, dynamic island, status bar — plus a suite of mock apps (Messages, Music, Notes, Phone, Photos, Safari, Calendar, Clock, Camera, Weather, Settings) with animated interactions. No backend, no device — just a web page.

## What It Does

- **iPhone frame** — rounded device frame with Dynamic Island, home indicator, and status bar
- **Lock screen** — swipe up to unlock into the home screen
- **Home screen & app library** — app icons grid, app library, swipe gestures
- **Control center** — connectivity, focus, music, screen, and utility modules with sliders and toggles
- **Working mock apps**:
  - **Messages** — conversation list + chat view
  - **Music** — home, library, search, radio, queue, and persistent audio player
  - **Notes** — folder view + note editor
  - **Phone** — dialer keypad
  - **Photos** — gallery with photo detail view
  - **Safari** — with mock websites (Google, Vercel)
  - **Calendar, Clock, Camera, Weather, Settings** — styled mock UIs
- **Wallpaper switcher** and theme support
- **Framer Motion animations** throughout; global state via **Zustand**

## Tech Stack

- **Next.js 14** (App Router) — `output: "export"` static build
- **React 18**, **TypeScript**
- **Tailwind CSS 3**
- **Zustand** — global OS state
- **Framer Motion** — animations and gestures
- **Immer** — immutable state updates
- **lucide-react** — icons

## Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000

# production build (static export -> out/)
npm run build
```

No environment variables, no backend, no database — everything runs in the browser.

## Project Structure

```
app/
  page.tsx        # entry: renders the iPhone
  layout.tsx      # root layout + providers
components/
  iphone.tsx / iphone-frame.tsx   # device shell
  lock-screen.tsx / home-screen.tsx / home-indicator.tsx
  app-screen.tsx / app-view.tsx / app-icon.tsx / app-library.tsx
  control-center/   # control-center + modules (connectivity, focus, music, screen…)
  dynamic-island/   # music island
  messages/         # conversation-list, conversation-view, messages-app
  music/            # home/library/search/radio/queue views + player
  notes/            # folder-view, note-editor, notes-app
  phone/            # keypad, phone-app
  photos/           # gallery + photo-detail
  safari/           # safari-app + mock websites (google, vercel)
  calendar.tsx  clock.tsx  camera.tsx  weather.tsx  settings.tsx
  status-bar.tsx  wallpaper-switcher.tsx  widget.tsx  swipe-detector.tsx
lib/
  app-state.tsx / music-state.ts / messages-state.ts / wallpaper-state.tsx
  music-data.ts  # mock tracks
  use-local-storage.ts  # persistence helpers
  utils.ts / types.ts
public/           # static assets
```

## Deployment

Deployed as a **static site** — the Next.js build exports to `out/` and is served from GitHub Pages:

- Live: https://girishlade111.github.io/os-on-the-web/

Note: `next.config.js` sets `basePath: "/os-on-the-web"` for the GitHub Pages subpath. For a root-domain deploy (Vercel, Netlify, Cloudflare Pages), remove the `basePath` line and rebuild.

## Development Notes

- Images set to `unoptimized` — required for static export
- Build ignores ESLint/TypeScript errors where configured to keep static export friction-free
- Originally scaffolded with [v0](https://v0.app); customized after export

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
