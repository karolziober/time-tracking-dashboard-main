# Time Tracking Dashboard

A responsive time tracking dashboard that displays daily, weekly, and monthly activity statistics. Built as a solution to the [Frontend Mentor Time Tracking Dashboard challenge](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

![Dashboard Preview](./preview.jpg)

## Features

- **Dynamic Time Period Switching** - Toggle between Daily, Weekly, and Monthly views
- **Responsive Design** - Optimized layouts for mobile, tablet, and desktop
- **Activity Categories** - Track time across Work, Play, Study, Exercise, Social, and Self-Care
- **Accessible** - Semantic HTML with ARIA labels and keyboard navigation support
- **Smooth Interactions** - Hover states and transitions for all interactive elements

## Demo

**Live Site:** [https://karolziober.github.io/time-tracking-dashboard-main/](https://karolziober.github.io/time-tracking-dashboard-main/)

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+ Classes, Async/Await, Fetch API)

## Project Structure

```
time-tracking-dashboard-main/
├── images/              # Icons and profile images
├── design/              # Original design files
├── index.html           # Main HTML file
├── style.css            # Stylesheet with CSS variables
├── script.js            # Dashboard logic (ES6 class)
└── data.json            # Activity data
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/karolziober/time-tracking-dashboard-main.git
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   npx serve .
   ```

## Key Implementation Details

### CSS Architecture
- CSS custom properties for consistent theming and spacing
- Mobile-first responsive design with breakpoints at 764px and 1440px
- CSS Grid for the main dashboard layout
- Flexbox for component-level layouts

### JavaScript
- Object-oriented approach using ES6 classes
- Asynchronous data loading from JSON
- Event delegation for efficient click handling
- Dynamic DOM rendering based on selected time period

## Author

- GitHub - [@karolziober](https://github.com/karolziober)
- Frontend Mentor - [@karolziober](https://www.frontendmentor.io/profile/karolziober)

## Acknowledgments

Challenge provided by [Frontend Mentor](https://www.frontendmentor.io).
