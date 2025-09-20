# Countdown Timer v2

A modern, responsive countdown timer application that can be deployed as a static application. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring a state machine architecture for precise timer control.

## 🚀 Features

- **State Machine Architecture**: 4-state timer control (ready, running, paused, completed)
- **Visual Countdown Display**: Two concentric circles showing remaining time
- **Configurable Duration**: Set countdown duration (default: 2 minutes)
- **Warning Threshold**: Visual warning when time is low (default: 1 minute)
- **Interactive Controls**: Start, Pause, Resume, Completed, and Reset states
- **Static Deployment**: Can be deployed as a static application
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **TypeScript**: Full type safety and better development experience
- **Next.js 15**: Latest Next.js features with App Router and Turbopack

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Runtime**: React 19.1.0
- **Build Tool**: Turbopack (for faster development)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd countdown-timer-v2
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

## 📁 Project Structure

```
countdown-timer-v2/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── [static assets]
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🎯 Usage

### Application Overview

The countdown timer operates as a state machine with 4 distinct states:

#### **States:**
- **Ready**: Initial state, timer is ready to start
- **Running**: Timer is actively counting down
- **Paused**: Timer is temporarily stopped
- **Completed**: Timer has finished counting down

#### **Input Fields:**
- **Duration**: Countdown duration in minutes (default: 2 minutes)
- **Warning Threshold**: Warning threshold in minutes (default: 1 minute)

#### **Visual Design:**
- **Inner Circle**: Shows remaining time in minutes and seconds with light blue fill
- **Outer Circle**: Transparent fill with stroke (10% of inner circle width)
  - Visualizes remaining time as a clockwise segment starting from the top
  - **Dark blue stroke**: When remaining time is above threshold
  - **Red stroke**: When remaining time is equal to or below threshold

#### **Control Buttons:**
- **Start**: Initial label, starts the countdown (Ready → Running)
- **Pause**: Pauses the countdown (Running → Paused)
- **Resume**: Resumes the countdown (Paused → Running)
- **Completed**: Final state when countdown finishes (Running → Completed)
- **Reset**: Resets timer to ready state (Any state → Ready)

### Basic Usage
1. Start the development server: `npm run dev`
2. Open your browser to `http://localhost:3000`
3. Set your desired countdown duration and warning threshold
4. Click "Start" to begin the countdown
5. Use "Pause"/"Resume" to control the timer
6. Use "Reset" to return to ready state at any time
7. Timer will show "Completed" when finished

### Customization
- Modify `app/page.tsx` to change the main component
- Update `app/globals.css` for global styles
- Configure Tailwind CSS in `tailwind.config.js`

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 📝 Development Notes

### Recent Updates
- **State Machine Implementation**: Implemented 4-state countdown timer (ready, running, paused, completed)
- **Visual Design**: Added two concentric circles for countdown visualization
- **Input Controls**: Added duration and warning threshold input fields
- **Button States**: Implemented Start/Pause/Resume/Completed button functionality
- **Reset Functionality**: Added Reset button to return timer to ready state
- **UI Layout**: Optimized button layout to horizontal row with equal sizing

### Planned Features
- **Static Deployment**: Optimize for static site generation
- **Sound Alerts**: Audio notifications for threshold and completion
- **Preset Durations**: Quick-select buttons for common durations
- **Keyboard Shortcuts**: Space bar for start/pause, R for reset

### Known Issues
- *No known issues at this time*

## 📋 Development Prompts

This section tracks all prompts and requirements that have shaped the development of this countdown timer application.

### Prompt #1: Initial Setup
**Date**: Initial setup
**Request**: "continuously update the documentation in the readme file based on the prompts"
**Implementation**: Created comprehensive README structure with dynamic sections for easy updates

### Prompt #2: Package Manager Standardization
**Date**: Initial setup
**Request**: "use only npm as package manager"
**Implementation**: 
- Removed references to yarn, pnpm, and bun from installation instructions
- Updated all command examples to use npm exclusively
- Streamlined documentation for consistency

### Prompt #3: Application Specifications
**Date**: Initial setup
**Request**: "the purpose of this app is a countdown timer that can be deployed as a static application..."
**Implementation**:
- Defined 4-state state machine (ready, running, paused, completed)
- Specified input fields for duration (default: 2 min) and warning threshold (default: 1 min)
- Designed visual layout with two concentric circles
- Implemented color logic (dark blue above threshold, red at/below threshold)
- Created button state transitions (Start → Pause → Resume → Completed)

### Prompt #4: Code Implementation
**Date**: Initial setup
**Request**: "create the code based on the previous prompt"
**Implementation**:
- Built complete React component with TypeScript
- Implemented state machine logic with proper transitions
- Created visual design with SVG circles and animations
- Added input validation and user interface controls
- Configured Next.js for static export deployment

### Prompt #5: Documentation Tracking
**Date**: Current
**Request**: "add a section to the readme file containing all the prompts, continuously adding new prompts"
**Implementation**: Created this prompts tracking section for continuous documentation updates

### Prompt #6: Reset Button Implementation
**Date**: Current
**Request**: "add another button called 'Reset' that is enabled when the state is not ready. when pressed, the state is changed to ready, the remaining time is set to the value specified in the duration input field, the outer circle is reset to 360 degree segment, and the color corresponding to time above threshold value"
**Implementation**:
- Added Reset button with proper enabled/disabled states
- Implemented reset functionality to return to ready state
- Reset remaining time to full duration value
- Reset outer circle progress to 360-degree segment
- Applied proper color logic (dark blue when above threshold)
- Clear any running intervals when resetting
- Updated UI layout to accommodate both buttons

### Prompt #7: Button Layout Optimization
**Date**: Current
**Request**: "put the two buttons on the same row, and make them equal in size"
**Implementation**:
- Changed button layout from vertical stack to horizontal flex layout
- Applied `flex-1` class to both buttons for equal width distribution
- Added consistent gap spacing between buttons
- Standardized button styling (same padding, font size, and height)
- Maintained responsive design with proper centering

---

*This section will be continuously updated as new prompts and requirements are received.*

## 🚀 Deployment

### Static Deployment

This countdown timer is designed to be deployed as a static application. Configure Next.js for static export:

```bash
npm run build
```

The built files will be in the `out` directory, ready for static hosting.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Static Hosting Options
- **Netlify**: Deploy the `out` directory
- **GitHub Pages**: Upload static files to GitHub Pages
- **AWS S3**: Host static files on Amazon S3
- **Cloudflare Pages**: Deploy directly from GitHub

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Review the code examples

---

*This README is automatically updated based on development prompts and project changes.*
