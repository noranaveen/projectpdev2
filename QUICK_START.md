# Quick Start: Adding Images to Your Website

## What You Need to Do (3 Simple Steps)

### Step 1: Prepare Your Images
You need to create 3 images and save them as JPG files:

| Image Name | Size | Purpose | Where to Find |
|-----------|------|---------|---------------|
| `hero-bg.jpg` | 1920x600px | Big banner at top | Unsplash/Pexels - search "firefighter" or "fire safety" |
| `pillars.jpg` | 600x400px | Shows your 4 pillars | Collect photos from your chapters or stock site |
| `firefighter-health.jpg` | 600x400px | Wellness/hydration programs | Your hydration drive or community event photos |

### Step 2: Upload Images to GitHub
```bash
# 1. Navigate to your project
cd /workspaces/projectpdev2

# 2. Copy your images to assets/img folder
# (Right-click in VS Code Explorer → Open in Terminal, then drag images)

# 3. Add to git
git add assets/img/

# 4. Commit and push
git commit -m "Add website images"
git push
```

### Step 3: Done!
Images automatically appear on your site at:
https://noranaveen.github.io/projectpdev2/

## Where Images Go

```
Your Project
└── assets/
    └── img/
        ├── hero-bg.jpg ← Large banner image
        ├── pillars.jpg ← 4 Pillars section image
        ├── firefighter-health.jpg ← Health section image
        └── og-image.jpg ← Social media preview (already exists)
```

## Find Free Images

**Best sites for your images:**
- **Unsplash.com** - Search: "firefighter", "wellness", "health", "team"
- **Pexels.com** - Search: "first responder", "community", "action"
- **Pixabay.com** - Search: "rescue", "teamwork", "fire"

**Alternative: Use your own photos**
- Hydration drive photos (best!)
- Chapter meetings
- Training sessions
- Community events
- Volunteer activities

## Image Quality Checklist

Before uploading, check:
- ✓ File size under 200KB (compress at TinyPNG.com)
- ✓ Image is clear and professional
- ✓ Size matches recommendation (1920x600, 600x400, etc.)
- ✓ File format is JPG or PNG
- ✓ Filename matches exactly (hero-bg.jpg, not hero_bg.jpg)

## How Images Display on Your Site

### Hero Section (Top Banner)
```
┌─────────────────────────────────────────┐
│  [HERO-BG.JPG with text overlay]        │
│                                         │
│  "Protect those who protect us."        │
│  [Donate] [Get Involved]                │
└─────────────────────────────────────────┘
```

### Pillars Section
```
┌──────────────────────┬──────────────────┐
│ Our Four Pillars:    │ [PILLARS.JPG]    │
│ • Research           │                  │
│ • Advocacy           │                  │
│ • Care               │                  │
│ • Community          │                  │
└──────────────────────┴──────────────────┘
```

### Health Section
```
┌──────────────────┬──────────────────────────┐
│ [FIREFIGHTER-    │ Advancing the lung       │
│ HEALTH.JPG]      │ health of firefighters   │
│                  │ ... text content ...     │
│                  │ [Learn More]             │
└──────────────────┴──────────────────────────┘
```

## Troubleshooting

**Images not showing?**
1. Check filename matches exactly (case-sensitive)
   - ✓ hero-bg.jpg
   - ✗ Hero-BG.jpg (wrong)
   - ✗ hero_bg.jpg (wrong)

2. Check file is in correct folder
   - Location: `assets/img/hero-bg.jpg`
   - Not: `assets/hero-bg.jpg`

3. Wait 2-3 minutes after pushing
   - GitHub Pages needs time to update

4. Hard refresh browser (Ctrl+Shift+R)
   - Clears cache that might show old version

**File size too large?**
1. Visit TinyPNG.com
2. Drag your image onto the browser
3. Download the compressed version
4. Upload that instead

## Free Image Editing Tools

**Resize images:**
- Canva.com (free account)
- Pixlr.com
- Photopea.com (Photoshop-like)
- ILovePNG.com

**Compress images:**
- TinyPNG.com
- Squoosh.app (Google tool)
- ImageOptim (Mac)

## Image Examples from Nonprofits

Look at how these sites use images:
- igniteher.org - Image on every section
- americanlung.org - Medical imagery
- sierraclub.org - Environmental photos
- dkrf.org - Action photos

Notice: They use authentic photos and also stock images. Mix both!

## Next Steps

1. **Find 3 images** - Take from your organization or find free ones
2. **Resize if needed** - Use Canva or Photopea
3. **Compress** - Use TinyPNG to reduce file size
4. **Upload** - Add to `assets/img/` folder
5. **Commit** - Use git to push to GitHub
6. **Refresh** - Check your website (wait 2-3 min)
7. **Share** - Show off your new site!

## Getting Help

If stuck:
1. Read IMAGE_GUIDE.md for detailed instructions
2. Read DESIGN_GUIDE.md for design choices
3. Check GitHub documentation: docs.github.com
4. Test in browser's Developer Tools (F12)

---

**Your website is ready to go!**
Visit: https://noranaveen.github.io/projectpdev2/

Now just add the images and you're done! 🎉
