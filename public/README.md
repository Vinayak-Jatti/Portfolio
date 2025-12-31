# Public Assets

This directory contains static assets that will be served by the application.

## Resume PDF

### Option 1: Local File (Recommended)

1. Place your resume PDF file in this directory
2. Name it `resume.pdf`
3. The file will be accessible at `/resume.pdf`

### Option 2: External URL (Google Drive, Dropbox, etc.)

If you prefer to host your resume externally:

1. Upload to Google Drive/Dropbox/etc.
2. Get the direct download URL
3. Add to `.env` file:
   ```env
   VITE_RESUME_URL=https://your-resume-url.com/resume.pdf
   ```

See `RESUME_DEPLOYMENT_OPTIONS.md` for detailed instructions.

### Recommended File Size

- Keep the PDF under 2MB for faster loading
- Use a compressed PDF if possible

### File Naming

The download will use the filename: `Vinayak_Jatti_Resume.pdf`

To change this, edit the `RESUME_NAME` constant in `src/apps/ResumeApp.jsx`

