# Performance Optimization Guide

## Issues Fixed

### 1. **Image Loading on About Page**
   - Added `loading="lazy"` attribute to defer off-screen images
   - Added `decoding="async"` for non-blocking image decoding
   - Added background color placeholders during load

### 2. **Game Loading on Play Page**
   - Added `loading="lazy"` to iframe to defer game loading
   - Game now loads only when in viewport

### 3. **Vite Build Optimization**
   - Added code splitting for vendor libraries
   - Configured manual chunks for better caching
   - Optimized dependency pre-bundling

## Action Required: Optimize Your Images

Your images are currently too large for web:
- `bike.jpg`: **2.7MB** → Should be <200KB
- `scene.jpg`: **2.7MB** → Should be <200KB
- `friends.jpg`: 494KB → Should be <200KB
- `friends1.jpg`: 528KB → Should be <200KB

### Option 1: Use the Optimization Script (Recommended)

```bash
# Install ImageMagick if not already installed
brew install imagemagick

# Run the optimization script
./optimize-images.sh

# Review the optimized images, then replace originals
mv src/assets/optimized/* src/assets/
rm -rf src/assets/optimized
```

### Option 2: Use Online Tools

Use one of these online image compressors:
- **Squoosh**: https://squoosh.app (Google's tool - best quality)
- **TinyPNG**: https://tinypng.com (easy to use)
- **Compressor.io**: https://compressor.io

**Target settings:**
- Format: JPEG
- Quality: 75-85%
- Max width: 1920px
- Strip metadata: Yes

### Option 3: Manual with ImageMagick

```bash
# Optimize individual images
convert src/assets/bike.jpg -quality 80 -strip -resize '1920x1920>' src/assets/bike_optimized.jpg
convert src/assets/scene.jpg -quality 80 -strip -resize '1920x1920>' src/assets/scene_optimized.jpg
convert src/assets/friends.jpg -quality 80 -strip -resize '1920x1920>' src/assets/friends_optimized.jpg
convert src/assets/friends1.jpg -quality 80 -strip -resize '1920x1920>' src/assets/friends1_optimized.jpg

# Replace originals
mv src/assets/bike_optimized.jpg src/assets/bike.jpg
mv src/assets/scene_optimized.jpg src/assets/scene.jpg
mv src/assets/friends_optimized.jpg src/assets/friends.jpg
mv src/assets/friends1_optimized.jpg src/assets/friends1.jpg
```

## Additional Optimization Tips

### 1. **Use Modern Image Formats (Optional)**

Consider converting to WebP for even better compression:

```bash
# Install webp tools
brew install webp

# Convert images
cwebp -q 80 src/assets/bike.jpg -o src/assets/bike.webp
cwebp -q 80 src/assets/scene.jpg -o src/assets/scene.webp
cwebp -q 80 src/assets/friends.jpg -o src/assets/friends.webp
cwebp -q 80 src/assets/friends1.jpg -o src/assets/friends1.webp
```

Then update imports in About.tsx to use .webp files.

### 2. **HexGL Game Optimization**

The game folder is large (contains many textures and 3D assets). Consider:
- Compressing textures in `/public/HexGL/textures/`
- Using the `textures/` folder instead of `textures.full/` if available
- Consider hosting the game on a CDN for faster loading

### 3. **Enable Compression on Your Server**

Make sure your hosting provider enables:
- **Gzip/Brotli compression** for text files
- **Cache headers** for static assets
- **CDN** if possible (Cloudflare, Vercel Edge, etc.)

### 4. **After Optimization, Rebuild**

```bash
# Rebuild your site
npm run build

# Check bundle sizes
npm run build -- --mode production

# Deploy the optimized build
```

## Expected Results

After optimization:
- **About page**: Load time reduced from ~6MB to ~800KB
- **Play page**: Initial load deferred until iframe is visible
- **Overall**: 75-80% reduction in image bandwidth
- **LCP (Largest Contentful Paint)**: Should improve by 2-3 seconds

## Monitoring

Check your site's performance using:
- **Chrome DevTools** → Network tab (check file sizes)
- **Lighthouse** → Performance audit (target score: 90+)
- **PageSpeed Insights**: https://pagespeed.web.dev/

## Need Help?

If images still load slowly after optimization:
1. Check your hosting provider's bandwidth limits
2. Consider using a CDN (Cloudflare, AWS CloudFront)
3. Verify compression is enabled on your server
4. Check if images are being cached properly (Cache-Control headers)
