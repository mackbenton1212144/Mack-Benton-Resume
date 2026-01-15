# 🚀 How to Publish Your Updated Resume Website

## Method 1: GitHub Web Interface (Easiest - Recommended)

### Step 1: Go to Your GitHub Repository
1. Open your browser and go to [github.com](https://github.com)
2. Sign in to your account
3. Find your repository (likely named `Mack-Benton-Resume` or similar)
4. Click on it to open

### Step 2: Upload Your Updated Files
1. Click the **"Add file"** button (green button near the top right)
2. Select **"Upload files"** from the dropdown
3. **Drag and drop** these updated files:
   - ✅ `index.html`
   - ✅ `styles.css`
   - ✅ `script.js`
   - ✅ Any other files you've changed

**OR** if the files already exist:
1. Click on the file you want to update (e.g., `styles.css`)
2. Click the **pencil icon** (✏️) in the top right
3. Copy and paste your updated code
4. Scroll down and click **"Commit changes"**

### Step 3: Commit Your Changes
1. Scroll down to the bottom of the page
2. In the **"Commit changes"** section:
   - Add a message like: `"Updated design with high-tech styling"`
   - Or use the default message
3. Click the green **"Commit changes"** button

### Step 4: Wait for Updates
1. Your changes will be live in **1-2 minutes**
2. Visit your site URL: `https://yourusername.github.io/Mack-Benton-Resume`
3. Hard refresh if needed: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows)

## Method 2: Using Git Commands (Advanced)

If you have git set up and prefer command line:

```bash
# Navigate to your resume folder
cd "/Users/mackbenton/Library/Mobile Documents/com~apple~CloudDocs/Mack's Resume"

# Check what files changed
git status

# Add all changed files
git add .

# Commit with a message
git commit -m "Updated design with high-tech styling and effects"

# Push to GitHub
git push origin main
```

**Note:** If this is your first time using git, you'll need to set it up first (see Method 1 above).

## Finding Your Repository

If you don't remember your repository name:
1. Go to [github.com](https://github.com)
2. Click on your profile picture (top right)
3. Click **"Your repositories"**
4. Look for something like:
   - `Mack-Benton-Resume`
   - `mack-benton-resume`
   - `resume`
   - `Mack-Benton-Resume-Website`

## Your Live Site URL

Your website will be at:
- `https://yourusername.github.io/repository-name`

Replace:
- `yourusername` = your GitHub username
- `repository-name` = your repository name

## Quick Checklist

Before publishing, make sure you have:
- ✅ `index.html`
- ✅ `styles.css` (updated with fancy design)
- ✅ `script.js` (updated with animations)
- ✅ `profile.jpg` (if you have it)
- ✅ All files in `logos/` folder
- ✅ All `experience-*.html` files

## Troubleshooting

**Changes not showing up?**
- Wait 2-3 minutes for GitHub to process
- Hard refresh your browser (Cmd+Shift+R)
- Clear browser cache
- Check if GitHub Pages is enabled (Settings → Pages)

**Can't find your repository?**
- Check your GitHub profile → Your repositories
- Search for "resume" or "mack" in your repositories

**Need to enable GitHub Pages?**
1. Go to your repository
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **main** branch and **/ (root)**
5. Click **Save**

## That's It! 🎉

Your fancy, high-tech resume website should be live in 1-2 minutes!
