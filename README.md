# Profile PDF Generator

A professional Node.js + Express web application that generates beautiful portfolio PDFs from user form inputs. Features the same stunning design as your SD Worx portfolio with dynamic form controls.

## Features

- ✨ Beautiful dark-themed UI matching your portfolio design
- 📸 Upload profile photo
- 📝 Enter profile summary and job details
- ➕ **Dynamic "Add" buttons** for projects, achievements, skills, and certifications
- 👁️ Live preview before generating PDF
- 📄 Generate professional landscape PDF using Puppeteer
- 🎨 Styled with your portfolio's color scheme (Federal Blue, Steel Blue, Aerospace Orange)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

### 3. Open in Browser

Navigate to: **http://localhost:3001**

## How to Use

1. **Fill the Form**:

   - Add your personal information (name, title, company)
   - Upload a profile photo
   - Click "+ Add" buttons to add:
     - Expertise areas (up to 4)
     - Projects with highlights (up to 5)
     - Key achievements (up to 5)
     - Technical skills (up to 12)
     - Certifications (up to 4)

2. **Preview**: Click "Preview Portfolio" to see your styled portfolio

3. **Generate PDF**: Click "Download PDF" to get your landscape A4 PDF

## Project Structure

```
profile-generator/
├── src/
│   └── app.js           # Express server
├── routes/
│   └── main.js          # Route handlers (form, preview, PDF generation)
├── views/
│   ├── form.ejs         # Dynamic input form with Add buttons
│   └── preview.ejs      # Styled preview template
├── public/
│   └── style.css        # Portfolio styling (dark theme)
├── uploads/             # User-uploaded photos
└── package.json
```

## Tech Stack

- **Backend**: Node.js + Express
- **Templating**: EJS
- **File Upload**: Multer
- **PDF Generation**: Puppeteer (headless Chrome)
- **Styling**: Custom CSS matching portfolio design

## Color Palette

- Federal Blue: `#00004D` (background)
- Steel Blue: `#3C77AE` (primary brand)
- Aerospace Orange: `#FF4D00` (accent)
- Princeton Orange: `#FF9919` (secondary)
- Alice Blue: `#E6F2FF` (text)

## License

MIT
