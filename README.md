# Profile PDF Generator

A professional Node.js + Express web application that generates beautiful portfolio PDFs from user form inputs. Features the same stunning design as your SD Worx portfolio with dynamic form controls and browser-native print-to-PDF functionality.

## ✨ Features

### Core Functionality

- 🎨 **SD Worx Portfolio Styling** - Stunning dark-themed UI with exact color matching
- 📸 **Multi-Image Upload** - Profile photo + 2 company logos in footer
- 📝 **Complete Profile Builder** - Name, title, company, and professional summary
- ➕ **Dynamic Form Controls** - Add/Remove buttons for all sections
- 👁️ **Live Preview** - Real-time styled preview before PDF generation
- 🖨️ **Browser Print-to-PDF** - Native print functionality with optimized CSS
- � **Responsive Layout** - Works on all screen sizes

### Dynamic Sections

- **Expertise Chips** (up to 4) - Centrally aligned, pill-styled badges
- **Project Highlights** (up to 5) - Name + detailed descriptions
- **Key Achievements** (up to 5) - Title + impact descriptions
- **Customer Feedback** (up to 4) - Client testimonials with name, position & comments in 2-column layout
- **Technical Skills** (up to 12) - Grid layout with individual cards
- **Certifications** (up to 4) - Name + issuing organization

### PDF Optimization

- ✅ **A4 Landscape Format** - Optimized for professional printing
- ✅ **Edge-to-Edge Layout** - Minimal margins for maximum content
- ✅ **Exact Color Preservation** - `print-color-adjust: exact` for accurate colors
- ✅ **Enhanced Borders** - Visible Steel Blue borders (60% opacity)
- ✅ **Centrally Aligned Chips** - Professional expertise badge positioning
- ✅ **Dual Logo Footer** - Company branding with consistent sizing
- ✅ **Print CSS Optimizations** - Dedicated styles for PDF output

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
   - Upload a profile photo (optional)
   - Write a professional summary
   - Upload up to 2 company logos for the footer (optional)
   - Click "+ Add" buttons to add multiple entries for each section

2. **Preview**: Click "Preview Portfolio →" to see your styled portfolio

3. **Generate PDF**:
   - Click the "🖨️ Save as PDF / Print" button in the bottom-right corner
   - Use your browser's print dialog (Cmd+P / Ctrl+P)
   - Select "Save as PDF" as the destination
   - Choose A4 Landscape orientation
   - Save your professional portfolio PDF!

## 📁 Project Structure

```text
profile-generator/
├── src/
│   └── app.js              # Express server setup
├── routes/
│   └── main.js             # Route handlers (form, preview)
├── views/
│   ├── form.ejs            # Dynamic input form with Add/Remove buttons
│   ├── preview.ejs         # Styled preview with print CSS
│   └── pdf-template.ejs    # (Legacy - not used)
├── public/
│   ├── style.css           # Main portfolio styling
│   └── uploads/            # User-uploaded photos & logos (gitignored)
├── .gitignore              # Excludes node_modules, uploads, .env
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Templating**: EJS (Embedded JavaScript)
- **File Upload**: Multer (multipart/form-data handling)
- **PDF Generation**: Browser-native print with CSS `@media print`
- **Styling**: Custom CSS with SD Worx portfolio design
- **Version Control**: Git with .gitignore for clean repository

## 🎨 Design System

### Color Palette

- **Federal Blue**: `#00004D` - Primary background
- **Steel Blue**: `#3C77AE` - Brand color, borders (60% opacity in print)
- **Aerospace Orange**: `#FF4D00` - Accent color
- **Princeton Orange**: `#FF9919` - Secondary headings
- **Alice Blue**: `#E6F2FF` - Primary text color

### Typography & Layout

- **Hero Section**: Gradient background with profile photo and expertise chips
- **Cards**: 2-column grid layout with gradient backgrounds
- **Borders**: 1.5px solid Steel Blue with inner glow effect
- **Skills Grid**: 4-column responsive layout
- **Customer Feedback Grid**: 2-column layout with orange accent borders
- **Footer**: Dual logo display with consistent sizing (50px height in print)

## 🔧 Key Technical Decisions

1. **Removed Puppeteer** - Switched from server-side PDF generation to browser print for:

   - Simpler architecture (116 fewer packages)
   - Better reliability (no socket hang-up errors)
   - Client-side control over PDF settings
   - Reduced server load

2. **Print CSS Optimization** - Dedicated `@media print` styles:

   - `@page { size: A4 landscape; margin: 0; }` for edge-to-edge
   - `print-color-adjust: exact` for accurate color reproduction
   - Explicit color values with `!important` to override browser defaults
   - Reduced padding/margins (8px wrap, 10px hero, 14px cards)

3. **Multiple File Upload** - Changed from single to multiple uploads:
   - `upload.single('photo')` → `upload.fields([...])`
   - Supports profile photo + 2 company logos
   - Each logo displays in footer with max-width/max-height constraints

## 📝 Recent Updates

- ✅ **NEW: Customer Feedback Section** - Added testimonials with 2-column layout positioned between Key Achievements and Technical Skills
- ✅ Enhanced border visibility (opacity: 0.3 → 0.6)
- ✅ Centrally aligned expertise chips
- ✅ Edge-to-edge print layout with minimal margins
- ✅ Dual logo support in footer
- ✅ Improved box shadow (inner glow + softer outer shadow)
- ✅ Added comprehensive .gitignore
- ✅ Browser print-to-PDF instead of Puppeteer

## License

MIT
