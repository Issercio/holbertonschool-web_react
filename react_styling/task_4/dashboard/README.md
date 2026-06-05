# Holberton Dashboard - Responsive Design

## Task 4: Go Responsive

This task focuses on implementing responsive design for the Holberton Dashboard application using TailwindCSS. The application is now fully responsive and adapts to different screen sizes.

## Key Responsive Features Implemented

### 1. Notifications Panel (Notifications.jsx)
- **Mobile (<912px)**: Full width notifications panel with flexible height
- **Desktop (≥912px)**: Original 25vw width
- **Padding**: 12px (p-3) on mobile/tablet, 6px (p-[6px]) on desktop
- **Scrollable**: Max height with scroll on mobile for better viewport management
- **List Styling**: No bullet points on mobile, square bullets on desktop

### 2. Notification Items (NotificationItem.jsx)
- **Text Sizing**: Responsive text sizes (text-xs on mobile, text-sm on tablet, text-base on desktop)
- **Borders**: Left border on mobile, no border on desktop
- **Padding**: Responsive padding (p-2 on mobile, p-0 on desktop)

### 3. Application Container (App.jsx)
- **Responsive Layout**: Header stacks vertically on mobile, horizontal on desktop
- **Content Distribution**: Flexbox layout ensures proper content distribution
- **Padding**: px-2 md:px-4 for responsive horizontal padding
- **News Section**: Long text content properly formatted for responsive testing

### 4. Header (Header.jsx)
- **Layout**: Vertical stacking on mobile, horizontal on desktop
- **Text Sizing**: 
  - Mobile (text-lg): 1.125rem
  - Tablet (sm:text-2xl): 1.5rem
  - Desktop (md:text-4xl): 2.25rem
- **Logo Width**: 20% on mobile, 15% on tablet/desktop
- **Spacing**: Gap-based spacing (gap-2 on mobile, gap-4 on desktop)

### 5. Login Form (Login.jsx)
- **Vertical Layout**: Form elements stack on mobile
- **Input Sizing**: Full width on mobile, auto width on desktop
- **Padding**: Responsive padding (py-2 on mobile, py-1 on desktop)
- **Text Sizing**: Responsive text sizes for better readability

### 6. Course List (CourseList.jsx & CourseListRow.jsx)
- **Table Responsiveness**: Full width on mobile, w-4/5 on desktop
- **Text Sizing**: text-xs on mobile, text-base on desktop
- **Padding**: Responsive vertical padding (py-1 md:py-2)
- **Horizontal Padding**: px-2 on mobile, px-0 on desktop

### 7. Body Sections (BodySection.jsx & BodySectionWithMarginBottom.jsx)
- **Padding**: px-2 md:px-4 for responsive horizontal padding
- **Text Sizing**: Responsive heading and text sizes
- **Margins**: Responsive bottom margins (mb-4 md:mb-10)

### 8. Footer (Footer.jsx)
- **Text Sizing**: text-xs on mobile, text-sm on desktop
- **Positioning**: Sticks to bottom with mt-auto and flex layout
- **Padding**: Responsive padding (pb-4 md:pb-8, pt-2 md:pt-4)
- **Horizontal Padding**: px-2 md:px-4

## Responsive Breakpoints Used

- **Mobile**: Default (< 640px) - xs
- **Tablet**: sm (≥ 640px), md (≥ 768px)
- **Desktop**: lg (≥ 1024px), xl (≥ 1280px)

## Tailwind Classes Reference

### Width Classes
- `w-full`: Full width
- `w-[20%]`, `w-[15%]`: Custom widths
- `w-4/5`: 80% width (desktop)

### Padding Classes
- `p-3`: 12px padding (mobile notifications)
- `px-2`: 8px horizontal padding (mobile)
- `px-4`: 16px horizontal padding (desktop)
- `py-1`, `py-2`: Vertical padding variants

### Text Sizing Classes
- `text-xs`: Extra small (12px)
- `text-sm`: Small (14px)
- `text-base`: Base size (16px)
- `text-lg`: Large (18px)
- `text-2xl`: 2xl (24px)
- `text-4xl`: 4xl (36px)

### Responsive Prefixes
- No prefix: Mobile first (default)
- `sm:`: ≥ 640px
- `md:`: ≥ 768px
- `lg:`: ≥ 1024px

### Flexbox Classes
- `flex`: Display flex
- `flex-col`: Column direction (mobile)
- `flex-row`: Row direction (desktop with flex-row/md:flex-row)
- `gap-2`, `gap-4`: Responsive gaps

## Project Setup

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Building
```bash
npm run build
```

### Testing
```bash
npm test
```

## Technologies Used
- React 19.2.6
- Vite 8.0.12
- TailwindCSS 4.3.0
- Tailwind Vite Plugin 4.3.0

## Notes
- No CSS files were created or imported
- No TailwindCSS configuration file was needed
- All responsive styling is done using TailwindCSS classes
- The long text under "News from the School" is intentional for responsive testing

