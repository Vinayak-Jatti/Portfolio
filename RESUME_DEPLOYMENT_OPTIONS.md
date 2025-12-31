# Resume PDF Deployment Options

You have multiple options for hosting your resume PDF. Choose the one that works best for you:

## Option 1: Local File (Recommended for Production)

**Best for:** Professional deployment, fast loading, no external dependencies

### Steps:
1. Place your `resume.pdf` file in the `public` folder
2. The file will be served directly from your domain
3. No additional configuration needed

**Pros:**
- ✅ Fast loading (served from your domain)
- ✅ No external dependencies
- ✅ Professional (no redirects)
- ✅ Works offline

**Cons:**
- ❌ Increases bundle size slightly
- ❌ Need to update file manually when resume changes

---

## Option 2: Google Drive (Easy Setup)

**Best for:** Quick setup, easy updates, no file size limits

### Steps:

1. **Upload your resume to Google Drive**
   - Go to [Google Drive](https://drive.google.com)
   - Upload your resume PDF

2. **Get Shareable Link**
   - Right-click on the file
   - Click "Share" > "Get link"
   - Set permission to "Anyone with the link"
   - Copy the link

3. **Convert to Direct Download URL**
   - Your link will look like: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - Extract the `FILE_ID` (the long string between `/d/` and `/view`)
   - Use this format: `https://drive.google.com/uc?export=download&id=FILE_ID`

4. **Add to Environment Variables**
   - Create/update `.env` file:
   ```env
   VITE_RESUME_URL=https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
   ```

**Pros:**
- ✅ Easy to update (just replace file in Drive)
- ✅ No file size limits
- ✅ Free hosting
- ✅ Can track views/downloads

**Cons:**
- ❌ Slightly slower (external request)
- ❌ Requires internet connection
- ❌ Google branding on download page (can be avoided with direct link)

---

## Option 3: Dropbox

**Best for:** Alternative to Google Drive

### Steps:

1. Upload resume to Dropbox
2. Get shareable link
3. Convert to direct download:
   - Change `www.dropbox.com` to `dl.dropboxusercontent.com`
   - Remove `?dl=0` and add `?dl=1`
4. Add to `.env`:
   ```env
   VITE_RESUME_URL=https://dl.dropboxusercontent.com/s/FILE_ID/resume.pdf?dl=1
   ```

---

## Option 4: OneDrive

**Best for:** Microsoft ecosystem users

### Steps:

1. Upload to OneDrive
2. Get embed link
3. Convert to direct download URL
4. Add to `.env`

---

## Option 5: GitHub (Free Hosting)

**Best for:** Developers, version control

### Steps:

1. Create a `resume` repository (or use existing)
2. Upload resume.pdf
3. Use GitHub raw URL:
   ```env
   VITE_RESUME_URL=https://raw.githubusercontent.com/yourusername/resume/main/resume.pdf
   ```

**Pros:**
- ✅ Free
- ✅ Version controlled
- ✅ Fast CDN

---

## Configuration

### For Local File (Default):
No configuration needed. Just place `resume.pdf` in `public` folder.

### For External URL:
1. Create `.env` file in project root:
   ```env
   VITE_RESUME_URL=https://your-resume-url.com/resume.pdf
   ```

2. For production (Vercel/Netlify):
   - Add environment variable in dashboard:
     - Key: `VITE_RESUME_URL`
     - Value: Your resume URL

---

## Recommended Approach

**For Production:** Use **Option 1 (Local File)** - Most professional and reliable

**For Development/Quick Setup:** Use **Option 2 (Google Drive)** - Easy to update

---

## Testing

After setting up, test both buttons:
1. **View PDF** - Should open in new tab
2. **Download PDF** - Should download the file

If it doesn't work, check:
- Environment variable is set correctly
- URL is accessible (try opening in browser)
- CORS is enabled (for external URLs)

