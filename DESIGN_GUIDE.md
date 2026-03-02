# Website Design & Customization Guide

## Overview

Your website has been redesigned to match the style of igniteher.org while maintaining Project Pulmonary's unique branding and mission. The design is modern, responsive, and focused on impact storytelling.

## Design Philosophy

The website follows these key principles:
- **Hero-first approach**: Bold, engaging headline that immediately communicates the mission
- **Image-driven storytelling**: Large, compelling visuals paired with narrative text
- **Impact showcasing**: Clear statistics that demonstrate measurable change
- **Call-to-action focused**: Multiple opportunities for visitors to get involved
- **Mobile-friendly**: Works flawlessly on phones, tablets, and desktops
- **Accessible**: Follows web accessibility standards (WCAG)

## Homepage Sections

### 1. **Hero Section** (Top Banner)
- **Background**: Full-width background image with gradient overlay
- **Location**: `assets/img/hero-bg.jpg`
- **Purpose**: Immediately captures attention with compelling headline
- **Image specs**: 1920x600px minimum, JPG or PNG
- **This section shows**:
  - Main headline: "Protect those who protect us."
  - Mission statement with key points
  - Two primary call-to-action buttons

### 2. **Our Four Pillars Section**
- **Layout**: Text on left, image on right
- **Location**: `assets/img/pillars.jpg`
- **Purpose**: Explains the organization's core approach
- **Shows**: Research, Advocacy, Care, Community initiatives
- **Image specs**: 600x400px, represents all four pillars

### 3. **Firefighter Health Section**
- **Layout**: Image on left, text on right
- **Location**: `assets/img/firefighter-health.jpg`
- **Purpose**: Builds emotional connection with firefighters' challenges
- **Shows**: Wellness programs, hydration drives, health initiatives
- **Image specs**: 600x400px, shows community action

### 4. **Impact Metrics Section**
- **Background**: Dark purple with white text (on-brand colors)
- **Purpose**: Demonstrates reach and effectiveness
- **Shows**: 
  - 10+ Chapters
  - 500+ Hydration Items
  - 200+ Firefighters Impacted
  - 50+ Volunteers
- **No images needed** (statistics are visual enough)

### 5. **Call-to-Action Section**
- **Purpose**: Final push for conversion
- **Cards**: 
  - Left: "Get Involved & Volunteer" (blue border)
  - Right: "Support Firefighter Health" (orange button)
- **Cards are distinct** to separate volunteer vs. donation paths

## Color Scheme

### Primary Colors
- **Primary Purple**: `#3C2F7F` - Organization's main color
- **Dark Purple**: `#2a1f5a` - Darker shade for depth
- **Secondary Accent (changed from orange)**: use `var(--secondary)` for action items (default dark blue)
- **Highlight Color**: use `white` or a dark blue for numbers; avoid gold/orange

### Text Colors
- **Dark Text**: `#1a1a1a` - Main body text
- **Light Text**: `#666666` - Secondary text
- **Lighter Text**: `#999999` - Tertiary text
- **White**: `#ffffff` - On dark backgrounds

### Background Colors
- **Light Gray**: `#f9fafb` - Alternate sections
- **White**: `#ffffff` - Main sections

## How to Customize

### Change Headlines
Edit `index.html` and find the `<h1>` or `<h2>` tags:
```html
<h1 style="...">Your New Headline Here</h1>
```

### Change Text Content
Find any paragraph starting with `<p style="...">` and update the text between tags.

### Change Button Text/Links
Format:
```html
<a class="btn primary" href="page.html">Button Text Here</a>
```

### Change Colors
Edit `assets/css/styles.css` root variables (lines 1-20):
```css
:root {
  --primary: #3C2F7F;  /* Change this color */
  --secondary: #2a1f5a; /* Change this color; typically dark blue but can be set universally */
}
```

### Add Images
1. Create your images (JPG or PNG)
2. Save to `assets/img/` folder with correct name:
   - `hero-bg.jpg` (hero section)
   - `pillars.jpg` (pillars section)
   - `firefighter-health.jpg` (health section)
3. Images automatically display once files exist

## Image Recommendations

### Scout Photography Sources
Best free stock photo sites for your content:
- **Unsplash.com** - Search: "firefighter", "health", "wellness", "first responder"
- **Pexels.com** - Search: "emergency", "community", "team"
- **Pixabay.com** - Search: "EMS", "rescue", "team spirit"

### Image Strategy

**Hero Background** - Choose one of:
- Firefighters in action (but not in danger)
- Fire station or community center
- Team building/volunteer moment
- Sunset over landscape (metaphorical)

**Pillars Image** - Should show:
- Research: Lab work, data analysis, professionals
- Advocacy: People speaking, presentations, activism
- Care: Health assessments, wellness programs
- Community: Team members, volunteers, chapters

**Firefighter Health Image** - Show:
- Hydration drives in action
- Wellness/health screenings
- Training sessions
- Community engagement

### Image Quality Tips
- Use professional or high-quality stock photos
- Ensure good lighting and composition
- Avoid watermarks or copyright issues
- Choose images that represent diversity
- Use consistent color temperature across images

## Mobile Responsiveness

The website automatically adapts to:
- **Mobile** (320px+): Single column, stacked sections
- **Tablet** (768px+): Two-column layouts available
- **Desktop** (1024px+): Full layouts with custom styling

Text automatically resizes. Images scale proportionally.

## Performance Tips

1. **Image Optimization**:
   - Compress images using TinyPNG.com before uploading
   - Use JPG for photos, PNG for graphics
   - Keep total image size under 5MB per image

2. **Loading Speed**:
   - Limit number of large images
   - Optimize CSS (already done for you)
   - Use modern formats (JPG instead of BMP)

3. **Accessibility**:
   - Always include descriptive alt text for images
   - Use sufficient color contrast (already done)
   - Ensure buttons are clearly clickable

## Extending the Design

### Adding New Sections
Template for adding a new section:
```html
<section aria-label="Section Name" style="padding: 5rem 1.5rem; background: #f9fafb;">
  <div class="container">
    <div style="text-align: center; margin-bottom: 4rem;">
      <h2 style="color: #3C2F7F;">Section Title</h2>
      <p>Description of section</p>
    </div>
    <!-- Your content here -->
  </div>
</section>
```

### Adding Image-Text Pairs
Standard layout for alternating image/text:
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
  <div>Text content here</div>
  <div><img src="assets/img/image.jpg" alt="Description" style="width: 100%; border-radius: 1rem;"></div>
</div>
```

## SEO & Social Sharing

The website includes:
- Proper meta descriptions
- Open Graph tags for social previews
- Schema markup for Google
- Mobile viewport settings
- Semantic HTML structure

When sharing on social media, use the og-image.jpg (or replace it with a custom image at 1200x630px).

## Analytics Integration

To add Google Analytics:
1. Get a Google Analytics ID from google.com/analytics
2. Add this before `</head>` in all HTML files:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Maintenance Checklist

- [ ] Update statistics quarterly
- [ ] Refresh images with new chapter photos
- [ ] Check links monthly for dead links
- [ ] Update "About" page with new information
- [ ] Add new blog/research content monthly
- [ ] Refresh impact metrics as they grow
- [ ] Monitor website performance (speed, errors)

## Browser Support

Tested and works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Questions or Issues?

- Check that all image files are in `assets/img/`
- Verify filenames match exactly (case-sensitive)
- Use browser Developer Tools (F12) to check for errors
- Test on mobile devices before publishing changes
