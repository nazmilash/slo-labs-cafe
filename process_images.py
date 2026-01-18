from PIL import Image, ImageDraw, ImageFilter
import os
import shutil

SOURCE_DIR = 'public/coffee_frames'
BACKUP_DIR = 'public/coffee_frames_backup'
TARGET_BG_COLOR = (0, 0, 0) # Pure Black
CROP_BOTTOM = 40 # Pixels to remove from bottom to hide watermark

def process_images():
    if not os.path.exists(BACKUP_DIR):
        print(f"Creating backup in {BACKUP_DIR}...")
        shutil.copytree(SOURCE_DIR, BACKUP_DIR)
    
    files = sorted([f for f in os.listdir(SOURCE_DIR) if f.endswith('.jpg')])
    print(f"Processing {len(files)} images...")

    for filename in files:
        filepath = os.path.join(SOURCE_DIR, filename)
        
        with Image.open(filepath) as img:
            # 1. Crop to remove watermark (assuming bottom)
            width, height = img.size
            crop_box = (0, 0, width, height - CROP_BOTTOM)
            img = img.crop(crop_box)
            
            # 2. Create a radial gradient mask for fading to black
            # New size
            w, h = img.size
            
            # Create a black background image
            background = Image.new('RGB', (w, h), TARGET_BG_COLOR)
            
            # Create a mask (white in center, black at edges)
            mask = Image.new('L', (w, h), 0)
            draw = ImageDraw.Draw(mask)
            
            # Draw a white ellipse in the center, slightly smaller than image
            # to allow for fading to black edges
            draw.ellipse((20, 20, w-20, h-20), fill=255)
            
            # Blur the mask to create soft edges
            mask = mask.filter(ImageFilter.GaussianBlur(radius=30))
            
            # Composite: Paste original image onto black background using the mask
            final_img = Image.composite(img, background, mask)
            
            # Save back
            final_img.save(filepath, quality=90)
            
    print("Processing complete.")

if __name__ == "__main__":
    process_images()
