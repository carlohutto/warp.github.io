 - `about.jpg` — Image for the About page (team/values image)

Steps to add images:
1. Save each image with the exact filename above.
2. Put them in this folder: `assets/images/` (for example `assets/images/hero.jpg`).
3. Refresh your browser at http://localhost:8000 to see the updated images.

Notes:
- I added SVG placeholders so the site shows something while you add real photos.
- If you'd like me to add the actual image files, upload them here (or tell me where they are) and I'll commit them into the repository for you.
 
Quick tips:
- The site now references `assets/images/about.svg` as the favicon. To change it, replace that file with a different SVG of the same name.
- Non-critical images use lazy-loading (loading="lazy") and async decoding to improve page performance on slow connections.