#!/bin/bash

# Image Optimization Script
# This script helps optimize images for web delivery

echo "🖼️  Image Optimization Script"
echo "=============================="
echo ""

# Check if ImageMagick or similar tools are available
if command -v convert &> /dev/null; then
    echo "✓ ImageMagick found"
    USE_IMAGEMAGICK=true
elif command -v sips &> /dev/null; then
    echo "✓ sips (macOS tool) found"
    USE_SIPS=true
else
    echo "⚠️  No image optimization tool found"
    echo ""
    echo "Please install one of the following:"
    echo "  - ImageMagick: brew install imagemagick"
    echo "  - Or use online tools like: squoosh.app or tinypng.com"
    echo ""
    exit 1
fi

# Create optimized directory
mkdir -p src/assets/optimized

echo ""
echo "Optimizing images..."
echo "-------------------"

# Process each image
for img in src/assets/*.jpg src/assets/*.jpeg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        output="src/assets/optimized/$filename"
        
        if [ "$USE_IMAGEMAGICK" = true ]; then
            # Using ImageMagick: reduce quality to 80%, strip metadata, resize if needed
            convert "$img" -quality 80 -strip -resize '1920x1920>' "$output"
            echo "✓ Optimized: $filename"
        elif [ "$USE_SIPS" = true ]; then
            # Using sips (macOS): resize to max 1920px
            cp "$img" "$output"
            sips -Z 1920 "$output" > /dev/null 2>&1
            echo "✓ Optimized: $filename (using sips)"
        fi
    fi
done

echo ""
echo "✅ Optimization complete!"
echo ""
echo "📊 Size comparison:"
echo "-------------------"
du -sh src/assets/*.jpg src/assets/*.jpeg 2>/dev/null | grep -v optimized
echo ""
echo "Optimized sizes:"
du -sh src/assets/optimized/* 2>/dev/null

echo ""
echo "📝 Next steps:"
echo "1. Review the optimized images in src/assets/optimized/"
echo "2. If satisfied, replace the original images:"
echo "   mv src/assets/optimized/* src/assets/"
echo "   rm -rf src/assets/optimized"
echo ""
