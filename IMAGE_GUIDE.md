# How to Add Images to Your Website

## Image Locations

All images should be placed in the `assets/img/` folder. The website is already configured to reference images from this location.

## Currently Used Images

Your website uses the following image files. **You need to add these:**

1. **Hero Background** (`assets/img/hero-bg.jpg`)
   - Used in the main banner on the homepage
   - Recommended size: 1920x600px minimum
   - Purpose: Large background image for the hero section
   - Can be a photo of firefighters, fire station, or health/wellness related imagery

2. **Pillars Section** (`assets/img/pillars.jpg`)
   - Used in the "Our Four Pillars" section
   - Recommended size: 600x400px
   - Purpose: Visual representation of research, advocacy, care, and community
   - Can be a composite image or photo showing the organization in action

3. **Firefighter Health** (`assets/img/firefighter-health.jpg`)
   - Used in the "Advancing the lung health" section
   - Recommended size: 600x400px
   - Purpose: Show firefighter health/wellness initiatives
   - Can be hydration drives, wellness programs, or education sessions

4. **Open Graph Image** (`assets/img/og-image.jpg`)
   - Used when sharing links on social media
   - Recommended size: 1200x630px
   - Purpose: Preview image when sharing on Facebook, Twitter, etc.

## How to Add Images

### Step 1: Prepare Your Images
- Export images as JPG or PNG format
- Optimize for web (compress file size)
- Use recommended dimensions listed above
- Ensure images are clear and professional

### Step 2: Upload to Repository
Using terminal:
```bash
# Navigate to your project folder
cd /workspaces/projectpdev2

# Place images in the assets/img folder
# Example: Copy image.jpg to assets/img/

# Add images to git
git add assets/img/

# Commit and push
git commit -m "Add website images"
git push
```

Or using VS Code:
1. Open the Explorer panel (left sidebar)
2. Navigate to `assets/img/` folder
3. Right-click and select "Open in Terminal"
4. Drag and drop image files into the folder
5. Use terminal commands above to commit

### Step 3: Update HTML if Needed

The current HTML already references these images:
```html
<img src="assets/img/hero-bg.jpg" alt="Description">
<img src="assets/img/pillars.jpg" alt="Our four pillars">
<img src="assets/img/firefighter-health.jpg" alt="Firefighter health">
```

If you want to add **additional** images to other pages, use this format:
```html
<img src="assets/img/your-image.jpg" alt="Descriptive text here">
```

## Image File Size Optimization

Keep images optimized for web performance:

### Using Online Tools (Free)
- **TinyPNG.com** - Compress PNG and JPG
- **ImageOptim** (Mac) or **FileOptimizer** (Windows)
- **Squoosh.app** (Google's tool)

### Recommended Sizes
- Large background images: 100-200KB
- Content images: 50-100KB
- Small images: <30KB

## Where to Find Images

### Free Stock Photos for Nonprofits
- **Unsplash.com** - Free high-quality photos (search: firefighter, health, wellness, first responder)
- **Pexels.com** - Free stock images
- **Pixabay.com** - Free images
- **Crew.unsplash.com** - Fire/emergency related imagery

### Custom Photography
Consider having a photographer take:
- Photos of your chapters in action
- Hydration drive events
- Community engagement
- Firefighter interviews
- Wellness activities

## Current File Structure

```
projectpdev2/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   ├── og-image.jpg (exists - placeholder)
│   │   ├── hero-bg.jpg (NEEDED)
│   │   ├── pillars.jpg (NEEDED)
│   │   └── firefighter-health.jpg (NEEDED)
│   └── js/
│       └── app.js
├── index.html
├── about.html
├── programs.html
├── research.html
├── gallery.html
└── donate.html
```

## Quick Start: Add Sample Images

To get your site working immediately with placeholder images:

```bash
# Create placeholder images (600x400px red background)
# Using ImageMagick (if installed)
convert -size 600x400 xc:#3C2F7F assets/img/pillars.jpg
convert -size 600x400 xc:var(--secondary) assets/img/firefighter-health.jpg
convert -size 1920x600 xc:#2a1f5a assets/img/hero-bg.jpg
```

## Responsive Images

Images automatically scale with the page. The CSS handles:
- Desktop: Full size images
- Tablet: Images scale down
- Mobile: Full-width images with maintained aspect ratio

## Accessibility

Always include descriptive alt text:
```html
<!-- Good -->
<img src="assets/img/hero-bg.jpg" alt="Firefighters receiving hydration training">

<!-- Avoid -->
<img src="assets/img/hero-bg.jpg" alt="image">
```

## Questions?

If you have trouble with images:
1. Check that files are in `assets/img/` folder
2. Verify filenames match exactly (case-sensitive on Linux)
3. Ensure file formats are JPG or PNG
4. Check file sizes aren't too large (>5MB is problematic)
5. Use browser's Developer Tools (F12) to check Console for errors
