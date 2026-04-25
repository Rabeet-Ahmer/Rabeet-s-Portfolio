<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2&height=250&section=header&text=Rabeet%20Ahmer&fontSize=80&animation=fadeIn&fontAlignY=38&desc=Full-Stack%20Developer%20%7C%20Agentic%20AI%20Engineer&descAlignY=55&descSize=20" alt="Capsule Render Waving Banner" />

  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=800&size=30&duration=3000&pause=1000&color=3B82F6&center=true&vCenter=true&width=800&height=80&lines=Building+Intelligent+Web+Applications;Crafting+Premium+Digital+Experiences;Turning+Complex+Ideas+Into+Reality" alt="Typing SVG" />
  </a>

  <h3>A highly interactive, award-winning-style portfolio.</h3>

  <p>
    Built with <strong>Next.js 14</strong>, <strong>React</strong>, <strong>GSAP</strong>, and <strong>Tailwind CSS</strong> to showcase projects, skills, and AI expertise through a premium, 60fps cinematic web experience.
  </p>

  <div>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  </div>
</div>

<br/>

## ✨ Key Features

- **Cinematic Animations**: Implements Awwwards-level GSAP scrolling, pinning, and stagger animations running at a strict 60fps.
- **Smooth Scrolling**: Lenis integration for fluid, continuous scrolling physics natively hooked into GSAP `ScrollTrigger`.
- **Interactive UI**: Magnetic cursors, interactive hover states, and dynamic form validation.
- **Modern Architecture**: Next.js App Router, React Server Components, and modular Base UI integrations.
- **Contact Integration**: Fully functional FormSubmit endpoints mapped directly to inquiries.

---

## 🏗️ Architecture & Component Flow

```mermaid
graph TD
    A[User Journey] --> B(Landing / Hero)
    A --> C(About / Experience)
    A --> D(Projects Gallery)
    A --> E(Contact Section)

    B -->|GSAP ScrollTrigger| C
    C -->|Lenis Smooth Scroll| D
    D -->|FormSubmit Hook| E

    subgraph Animations Stack
        F[Lenis Core] -.->|Syncs| G[GSAP Ticker]
        G -.->|Drives| H[React Refs]
        H -.->|Transforms| I[DOM Elements]
    end

    style A fill:#09090b,stroke:#a855f7,stroke-width:2px,color:#fff
    style Animations Stack fill:#18181b,stroke:#3b82f6,color:#fff
```

---

## 🛠️ Technology Stack

| Domain | Tools Used | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16, React 19 | App Router, Server Components, SEO |
| **Styling** | Tailwind CSS, Base UI | Utility-first styling, Accessible components |
| **Animation** | GSAP, Framer Motion | High-performance timelines, Spring physics |
| **Scrolling** | Lenis | Virtual scrolling, momentum physics |
| **Language** | TypeScript | End-to-end type safety |

---

## 🚀 Getting Started

To run this portfolio locally, ensure you have Node.js 18+ installed.

### 1. Clone the repository
```bash
git clone https://github.com/Rabeet-Ahmer/rabeet-portfolio.git
cd rabeet-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live application.

---

## 🎨 Design Philosophy

This portfolio bridges the gap between **Intelligent AI Systems** and **Premium Digital Craftsmanship**.

> *“Code should be functional, but the interface must be an experience.”*

The design relies heavily on dark mode aesthetics, vibrant gradients, and glassmorphism to create a sense of depth. Micro-interactions reward user curiosity, while robust architecture ensures scalability.

---

<p align="center">
  <i>Developed and designed by Rabeet Ahmer</i><br/>
  <a href="https://www.linkedin.com/in/rabeet-ahmer-b4204a332/">LinkedIn</a> • 
  <a href="https://github.com/Rabeet-Ahmer">GitHub</a> • 
  <a href="mailto:rabeetahmer9749@gmail.com">Email</a>
</p>
