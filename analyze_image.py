from PIL import Image
import os

img_path = 'public/coffee_frames/000.jpg'
if os.path.exists(img_path):
    with Image.open(img_path) as img:
        print(f"Format: {img.format}")
        print(f"Size: {img.size}")
        print(f"Mode: {img.mode}")
else:
    print("Image not found")
