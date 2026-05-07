# How to Update and Publish

This is a simple static resume site. The main files are:

- `index.html`: homepage content
- `styles.css`: layout and visual design
- `script.js`: tabs and small interactions
- `experience-*.html`: individual work experience detail pages
- `logos/`: company and school logos

## Local Preview

From this folder, run:

```bash
python3 -m http.server 8087
```

Then open:

```text
http://localhost:8087
```

## Publish

The GitHub repo is connected to Vercel. After changes look good locally:

```bash
git status
git add .
git commit -m "Update resume website"
git push origin main
```

Vercel should automatically redeploy the live site within a couple of minutes:

```text
https://mack-benton-resume.vercel.app
```

## Notes

- Use the lowercase `logos/` folder for images.
- Avoid adding another `Logos` file or folder, because that can conflict with `logos/` on Mac.
- If the live site does not update right away, wait a minute and hard refresh the browser.
