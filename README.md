# GEO KULINER - Interactive Culinary Map Platform

## 📋 Project Overview

**GEO KULINER** is a geolocation-based web application designed to showcase and promote local culinary businesses across Madura regencies (Pamekasan & Sumenep). The platform provides an interactive map to discover traditional and modern food establishments, supporting local UMKM (Small and Medium Enterprises) growth.

**Live Demo:** [geokuliner.vercel.app](https://geokuliner.vercel.app)

### Key Features
- 🗺️ Interactive geolocation map for exploring culinary businesses
- 🍜 Comprehensive culinary business directory with detailed information
- 👨‍💼 Admin dashboard for managing culinary data
- 🔐 Secure authentication system for administrators
- 📱 Multi-language support (Indonesian & English)
- 📊 Trending culinary businesses showcase
- 🔍 Search and filter capabilities
- 📰 Latest culinary news and events

---

## 🏗️ Tech Stack

- **Framework:** Next.js 15.5.7 with React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, PostCSS
- **Mapping:** Leaflet + React-Leaflet
- **HTTP Client:** Axios
- **Charts:** Chart.js with React-Chartjs-2
- **Icons:** React Icons

---

## 📁 Project Structure

```
web/
├── pages/                          # Next.js pages (routes)
│   ├── _app.tsx                   # App wrapper with layout logic
│   ├── _document.tsx              # HTML document configuration
│   ├── index.tsx                  # Home page
│   ├── about/index.tsx            # About page
│   ├── culinary/                  # Culinary pages
│   │   ├── index.tsx              # Culinary directory/list
│   │   └── [slug]/index.tsx       # Culinary detail page
│   ├── map/index.tsx              # Interactive map page
│   └── admin/                     # Admin dashboard
│       ├── login/index.tsx        # Admin login
│       ├── dashboard/index.tsx    # Admin dashboard
│       ├── culinary/              # Culinary management
│       │   ├── index.tsx          # List all culinary
│       │   ├── add/index.tsx      # Add new culinary
│       │   └── [id]/index.tsx     # Edit culinary
│       ├── profile/index.tsx      # Admin profile
│       ├── forgot-password/index.tsx
│       ├── reset-password/[id]/[token].tsx
│       └── status-password/index.tsx
│
├── components/                     # React components
│   ├── admins/                    # Admin-specific components
│   │   ├── topbar.tsx             # Admin top navigation
│   │   ├── sidebar.tsx            # Admin left sidebar
│   │   └── formCulinary.tsx       # Culinary form component
│   ├── auth/                      # Authentication components
│   │   ├── Protected.tsx          # Protected route wrapper
│   │   └── NonProtected.tsx       # Non-protected route wrapper
│   ├── cards/                     # Reusable card components
│   │   └── CardCulinaries.tsx     # Culinary card
│   ├── maps/                      # Map-related components
│   │   ├── MapRBI.tsx             # RBI map component
│   │   └── PopSlideDetail.tsx     # Map popup/slide detail
│   └── navigations/               # Navigation components
│       ├── navbar.tsx             # Main navigation bar
│       └── footer.tsx             # Footer component
│
├── lib/                           # Business logic and utilities
│   ├── api/                       # API configuration
│   │   └── index.ts              # Axios instance setup
│   ├── auth/                      # Authentication logic
│   │   ├── auth.api.ts           # Auth API calls
│   │   ├── auth.service.ts       # Auth business logic
│   │   └── auth.type.ts          # Auth TypeScript types
│   ├── culinary/                 # Culinary business logic
│   │   ├── culinary.api.ts       # Culinary API calls
│   │   ├── culinary.service.ts   # Culinary business logic
│   │   └── culinary.type.ts      # Culinary TypeScript types
│   ├── map/                      # Map-related utilities
│   │   ├── geoLayer.service.ts   # Geolayer management
│   │   ├── map.type.ts           # Map TypeScript types
│   │   ├── map.utils.ts          # Map utility functions
│   │   └── route.service.ts      # Route/navigation service
│   └── i18n/                     # Internationalization
│       ├── index.ts              # i18n setup
│       ├── LanguageContext.tsx   # Language context provider
│       ├── translations.ts       # Translation management
│       └── locales/
│           ├── en.ts            # English translations
│           └── id.ts            # Indonesian translations
│
├── assets/                        # Static assets
│   └── index.tsx                 # Asset utilities/imports
│
├── public/                        # Static files
│   ├── datas/                    # Geolocation data
│   │   ├── pamekasan/adm_desa.json    # Pamekasan district data
│   │   └── sumenep/adm_desa.json      # Sumenep district data
│   ├── flags/                    # Flag icons for languages
│   └── icon/                     # App icons/images
│
├── styles/
│   └── globals.css               # Global styles
│
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
└── README.md                     # This file
```

---

## 📄 Pages & Routes Overview

### Public Pages

#### 1. **Home / Dashboard** (`/`)
- **Purpose:** Landing page with platform overview
- **Features:**
  - Hero section with platform tagline
  - Popular culinary businesses showcase (trending items)
  - Recent news/events feed
  - Statistics (# of mapped businesses, categories, regencies)
  - Quick navigation to map and culinary directory
- **Components:** Navbar, Footer

#### 2. **Culinary Directory** (`/culinary`)
- **Purpose:** Browse all culinary businesses
- **Features:**
  - List view of all culinary businesses
  - Search functionality
  - Filter by category/regency
  - Card-based layout with business details
  - Click-through to detailed view
- **Components:** `CardCulinaries`, Navbar, Footer

#### 3. **Culinary Detail** (`/culinary/[slug]`)
- **Purpose:** View detailed information about a specific culinary business
- **Features:**
  - Business name, owner, phone, address
  - Story/history of the business
  - Establishment year and classification
  - Photo gallery (place & product images)
  - Social media links
  - Location coordinates
  - Payment methods accepted
- **Components:** Navbar, Footer

#### 4. **Interactive Map** (`/map`)
- **Purpose:** Explore culinary businesses on interactive geolocation map
- **Features:**
  - Leaflet-based interactive map
  - Markers for each culinary business
  - Regional layers (Pamekasan, Sumenep)
  - Popup details on marker click
  - Slide/detail view for selected businesses
  - Geofiltering capabilities
- **Components:** `MapRBI`, `PopSlideDetail`, Navbar, Footer

#### 5. **About** (`/about`)
- **Purpose:** Information about the platform and project
- **Features:**
  - Project mission and vision
  - Team information
  - Contact details
- **Components:** Navbar, Footer

### Admin Pages

#### 6. **Admin Login** (`/admin/login`)
- **Purpose:** Administrator authentication
- **Features:**
  - Username/password login form
  - Error handling and validation
  - Redirect to dashboard on success
- **Protection:** Non-protected route (accessible before login)
- **Components:** `NonProtected` wrapper

#### 7. **Admin Dashboard** (`/admin/dashboard`)
- **Purpose:** Admin overview and quick stats
- **Features:**
  - Dashboard statistics
  - Quick action buttons
  - Recent activities
  - Analytics/charts (using Chart.js)
- **Protection:** Protected route (requires login)
- **Components:** Topbar, Sidebar, Dashboard

#### 8. **Culinary Management - List** (`/admin/culinary`)
- **Purpose:** View all culinary businesses (admin)
- **Features:**
  - Table/list view of all businesses
  - Edit button for each item
  - Delete functionality
  - Add new culinary button
- **Protection:** Protected route
- **Components:** Topbar, Sidebar, `formCulinary`

#### 9. **Culinary Management - Add** (`/admin/culinary/add`)
- **Purpose:** Create new culinary business entry
- **Features:**
  - Form with all culinary fields
  - File upload for images
  - Geolocation coordinate picker
  - Social media links management
  - Form validation
  - Submit and create functionality
- **Protection:** Protected route
- **Components:** Topbar, Sidebar, `formCulinary`

#### 10. **Culinary Management - Edit** (`/admin/culinary/[id]`)
- **Purpose:** Edit existing culinary business entry
- **Features:**
  - Pre-filled form with current data
  - Update all business information
  - Update images
  - Modify coordinates
  - Update social media links
  - Save changes functionality
- **Protection:** Protected route
- **Components:** Topbar, Sidebar, `formCulinary`

#### 11. **Admin Profile** (`/admin/profile`)
- **Purpose:** View and manage admin account
- **Features:**
  - Display admin information
  - Change password functionality
  - Update profile details
- **Protection:** Protected route
- **Components:** Topbar, Sidebar

#### 12. **Forgot Password** (`/admin/forgot-password`)
- **Purpose:** Password recovery initiation
- **Features:**
  - Email input form
  - Send recovery email
- **Protection:** Non-protected route
- **Components:** `NonProtected` wrapper

#### 13. **Reset Password** (`/admin/reset-password/[id]/[token]`)
- **Purpose:** Set new password after recovery
- **Features:**
  - Token validation
  - New password form
  - Confirmation password field
- **Protection:** Non-protected route
- **Components:** `NonProtected` wrapper

#### 14. **Password Status** (`/admin/status-password`)
- **Purpose:** Show password reset confirmation
- **Features:**
  - Success message
  - Redirect to login option
- **Protection:** Non-protected route
- **Components:** `NonProtected` wrapper

---

## 🔄 Application Flow Diagram

### User Journey

```
START
  ↓
[Home Page] ← Landing with overview
  ├→ [Culinary Directory] ← Browse all businesses
  │   └→ [Culinary Detail] ← View specific business
  │       └→ [Map] ← Explore on interactive map
  ├→ [Map] ← Explore interactive map directly
  ├→ [About] ← Learn about platform
  └→ [Admin Login] ← Admin area (separate flow)
```

### Admin Journey

```
START
  ↓
[Admin Login]
  ├→ Success: JWT token stored in localStorage
  └→ Failure: Show error message
  ↓
[Admin Dashboard] ← Protected route
  ├→ [Culinary Management]
  │   ├→ [Add New] → [Form] → Submit → Create in DB
  │   ├→ [Edit] → [Form with data] → Submit → Update in DB
  │   └→ [Delete] → Confirm → Remove from DB
  ├→ [Profile] → Change Password
  └→ Logout → Redirect to login
```

### Authentication Flow

```
Login Credentials
  ↓
[Auth API] ← Validate credentials
  ├→ Valid: Return JWT token
  └→ Invalid: Return error
  ↓
[Store Token] ← localStorage
  ↓
[Set Authorization Header] ← All subsequent requests
  ↓
[Protected Routes Check]
  ├→ Token valid: Allow access
  └→ Token invalid/expired: Redirect to login
```

### Data Flow

```
Backend API
  ↓
  ├→ [Culinary Service] → Fetch/Create/Update/Delete business data
  │   ├→ Culinary List
  │   ├→ Culinary Detail (by slug)
  │   └→ Culinary CRUD operations
  │
  ├→ [Auth Service] → Handle authentication
  │   ├→ Login
  │   ├→ Logout
  │   ├→ Forgot Password
  │   └→ Reset Password
  │
  └→ [Map Service] → Geolocation data
      ├→ Layer management
      ├→ Route calculations
      └→ Geolocation filtering
```

---

## 🔐 Authentication & Authorization

### Auth Types

1. **Public Access:** Home, Culinary list, Culinary detail, Map, About
2. **Protected Access:** Admin dashboard, Culinary management, Admin profile
3. **Guest Only:** Login, Forgot password, Reset password

### Flow

- **Login:** User provides credentials → Backend validates → Returns JWT token
- **Session:** Token stored in `localStorage` with key `auth_token`
- **Protected Routes:** `Protected.tsx` component checks token validity
- **Logout:** Token removed from `localStorage`
- **Token Expiry:** Automatic redirect to login on expiration

---

## 🌍 Internationalization (i18n)

- **Supported Languages:** Indonesian (id), English (en)
- **Location:** `lib/i18n/locales/`
- **Implementation:** React Context (`LanguageContext.tsx`)
- **Usage:** Select language from navbar dropdown
- **Storage:** localStorage with key `language`

---

## 🗺️ Map Features

### Technologies
- **Leaflet:** Open-source mapping library
- **React-Leaflet:** React wrapper for Leaflet
- **Base Layer:** OpenStreetMap or custom base layer

### Features
- **Markers:** Each culinary business has a marker
- **Regions:** Separate layers for Pamekasan and Sumenep
- **Popup:** Click marker to see business details
- **Geolocation:** Filter businesses by region
- **Zoom & Pan:** Standard map controls

### Data Source
- GeoJSON files: `public/datas/{regency}/adm_desa.json`

---

## 🎯 Key Features Explanation

### 1. Popular/Trending Culinary
- Displayed on homepage
- Shows top-rated or frequently viewed businesses
- Quick link to full details
- Link to map view

### 2. Culinary Cards
- Business name, owner
- Category/classification
- Address and regency
- Images (place & product)
- Action buttons (view detail, map view)

### 3. Admin Dashboard
- Statistics overview
- Quick stats (total businesses, categories, etc.)
- Charts/analytics (using Chart.js)
- Recent activities
- Quick action buttons

### 4. Search & Filter
- Search by business name
- Filter by regency (Pamekasan, Sumenep)
- Filter by category/classification
- Search by owner name

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create .env.local file with:
# NEXT_PUBLIC_API_URL=<your-backend-api-url>

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
- Development server runs on `http://localhost:3000`
- Hot reload enabled
- TypeScript checking enabled

---

## 📱 Responsive Design

- Mobile-first approach using Tailwind CSS
- Responsive grid layouts
- Mobile-optimized navigation
- Tablet and desktop views supported

---

## 📝 Environment Variables

Create `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
# (or your production API URL)
```

---

## 🐛 Common Issues & Troubleshooting

### Map not loading
- Check geolocation data files in `public/datas/`
- Verify Leaflet/React-Leaflet versions
- Check browser console for errors

### Images not displaying
- Verify image URLs in API responses
- Check image paths in `public/` directory
- Ensure backend serves images correctly

### Authentication not working
- Clear localStorage cache
- Check API endpoint configuration
- Verify JWT token format

---

## 📦 Performance Optimizations

- Next.js Image component for image optimization
- Dynamic imports for components
- Lazy loading for maps and heavy components
- Tailwind CSS for optimized styling
- Tree-shaking and code splitting

---

## 🤝 Contributing

When adding new features:
1. Follow TypeScript type safety
2. Use existing component patterns
3. Add appropriate translations to i18n
4. Update this README if adding new pages/routes

---

## 📄 License

© 2025 GEO KULINER. All rights reserved.

---

## 📞 Contact & Support

- **Website:** [geokuliner.vercel.app](https://geokuliner.vercel.app)
- **Location:** Madura, Indonesia (Pamekasan & Sumenep regencies)
- **Purpose:** Promoting local culinary UMKM businesses

---