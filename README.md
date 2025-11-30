# Luminary Analytics Corporate Website

A modern, dark-themed corporate website focused on AI, Data Warehousing, and Data Engineering services.

## Quick Start

Simply open `index.html` in a browser, or serve it with any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

## Calendly Setup

The booking section includes a Calendly integration. To set it up:

1. **Create a Calendly account** at [calendly.com](https://calendly.com) using `rich.bellantoni@luminaryanalytics.com`

2. **Create a 30-minute event type** for free consultations

3. **Update the Calendly URL** in `index.html` (line ~188):
   ```html
   data-url="https://calendly.com/YOUR-CALENDLY-USERNAME/30min?..."
   ```
   
   Replace `rich-bellantoni-luminaryanalytics` with your actual Calendly username.

## File Structure

```
├── index.html        # Main HTML structure
├── styles.css        # All styling (dark theme, animations)
├── script.js         # Interactions (smooth scroll, animations)
├── assets/
│   ├── logo-white.png    # White logo for dark backgrounds
│   └── favicon.png       # Favicon (use the FranNav icon)
└── README.md         # This file
```

## Logo Setup

Place your logo files in the `assets/` folder:

1. **logo-white.png** - The white FranNav logo (for header/footer)
2. **favicon.png** - The circular FranNav icon for browser tabs

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --color-teal: #2dd4bf;        /* Primary teal accent */
    --color-purple: #8b5cf6;      /* Secondary purple accent */
    --color-bg: #0a0f1a;          /* Dark navy background */
    --color-text: #f8fafc;        /* Light text */
    --gradient-brand: linear-gradient(135deg, var(--color-teal), var(--color-purple));
}
```

### Content
All content is in `index.html`. Key sections to customize:
- Hero section stats and messaging
- Services descriptions
- Results/metrics
- Testimonial quote
- Footer contact info

## Deployment

This is a static site - deploy to any hosting provider:
- **Netlify**: Drag and drop the folder
- **Vercel**: `npx vercel`
- **GitHub Pages**: Push to a `gh-pages` branch
- **Traditional hosting**: Upload files via FTP

## Browser Support

- Chrome, Edge, Safari, Firefox (latest versions)
- Mobile responsive design included

