# How to Republish Your Changes

## Quick Method: GitHub Web Interface

1. Go to your GitHub repository: `https://github.com/yourusername/Mack-Benton-Resume`
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop these updated files:
   - `index.html`
   - `styles.css`
   - `script.js`
4. Scroll down, add commit message: "Updated layout and styling"
5. Click **"Commit changes"**
6. Wait 1-2 minutes - your site updates automatically!

## Advanced Method: Using Git Commands

If you want to use git from your computer:

### First Time Setup:
```bash
cd "/Users/mackbenton/Library/Mobile Documents/com~apple~CloudDocs/Mack's Resume"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/Mack-Benton-Resume.git
git push -u origin main
```

### For Future Updates:
```bash
cd "/Users/mackbenton/Library/Mobile Documents/com~apple~CloudDocs/Mack's Resume"
git add .
git commit -m "Updated layout and styling"
git push
```

## Your Live Site URL

Your site should be at: `https://yourusername.github.io/Mack-Benton-Resume`

Replace `yourusername` with your actual GitHub username.

## Troubleshooting

- **Changes not showing?** Wait 2-3 minutes, then hard refresh (Cmd+Shift+R on Mac)
- **Need to find your repo?** Go to github.com and check "Your repositories"
- **Forgot your repo name?** Check the URL from your previous setup
