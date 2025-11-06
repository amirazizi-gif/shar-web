# SHAR Associates - Company Website

A modern, full-stack company website for SHAR Associates Sdn Bhd, a multi-discipline engineering company based in Sabah, Malaysia. Built with Next.js, FastAPI, and Supabase.

![SHAR Associates](https://img.shields.io/badge/Version-1.0.0-orange)
![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-green)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-blue)

## 🚀 Features

### Frontend
- 📱 **Responsive Design** - Mobile-first design with Tailwind CSS
- 🎨 **Modern UI/UX** - Clean and professional interface
- 🖼️ **Project Gallery** - Filterable project showcase with modal views
- 📊 **Organization Chart** - Interactive company structure visualization
- 📝 **About Pages** - Company background, mission, vision, and management
- 💼 **Services Overview** - Detailed service offerings by division
- 📞 **Contact Page** - Multiple contact methods and office locations
- ⚡ **Fast Performance** - Optimized with Next.js 15

### Backend
- 🔒 **RESTful API** - FastAPI with automatic documentation
- 💾 **Database** - PostgreSQL via Supabase
- 🔄 **CRUD Operations** - Full project management
- 📝 **Data Validation** - Pydantic schemas
- 🌐 **CORS Enabled** - Cross-origin resource sharing configured

### Admin Panel
- ✏️ **Project Management** - Create, read, update, delete projects
- 🖼️ **Image Management** - Up to 4 images per project
- 📂 **Category Organization** - M&E, Civil, Event, Engineering Support
- 📊 **Dashboard View** - Table view of all projects

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.14
- **UI Components**: React 19
- **Image Optimization**: Next.js Image component

### Backend
- **Framework**: FastAPI 0.104.1
- **Language**: Python 3.11+
- **Database**: Supabase (PostgreSQL)
- **Validation**: Pydantic 1.10.13
- **ASGI Server**: Uvicorn

## 📁 Project Structure
```
shar-website/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   │   └── Layout.tsx    # Main layout with header/footer
│   │   ├── lib/              # Utilities
│   │   │   └── api.ts        # API client functions
│   │   ├── pages/            # Next.js pages
│   │   │   ├── index.tsx     # Home page
│   │   │   ├── projects.tsx  # Projects gallery
│   │   │   ├── services.tsx  # Services page
│   │   │   ├── contact.tsx   # Contact page
│   │   │   ├── about/        # About pages
│   │   │   │   ├── mission.tsx
│   │   │   │   ├── background.tsx
│   │   │   │   └── organization.tsx
│   │   │   └── admin/        # Admin pages
│   │   │       └── projects.tsx
│   │   ├── styles/
│   │   │   └── globals.css   # Global styles
│   │   └── public/
│   │       └── images/       # Static images
│   ├── .env.local            # Environment variables
│   ├── next.config.ts        # Next.js configuration
│   ├── tailwind.config.ts    # Tailwind configuration
│   └── package.json
│
└── backend/                  # FastAPI backend
    ├── app/
    │   ├── main.py           # FastAPI application
    │   ├── config.py         # Configuration settings
    │   ├── database.py       # Database connection
    │   ├── routes/           # API routes
    │   │   └── projects.py   # Projects endpoints
    │   └── schemas/          # Pydantic schemas
    │       └── project.py    # Project models
    ├── .env                  # Environment variables
    ├── requirements.txt      # Python dependencies
    └── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- Supabase account

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/shar-website.git
cd shar-website
```

### 2. Backend Setup

#### Create Supabase Project
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project
3. Run the SQL schema (see Database Setup below)

#### Install Python dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### Configure environment variables
Create `backend/.env`:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
CORS_ORIGINS=http://localhost:3000
```

#### Database Setup
Run this SQL in Supabase SQL Editor:
```sql
-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id BIGSERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL CHECK (category IN ('mne', 'civil', 'event', 'support')),
    title VARCHAR(200) NOT NULL,
    client VARCHAR(200) NOT NULL,
    year VARCHAR(4) NOT NULL,
    description TEXT NOT NULL,
    images TEXT[] NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow all operations" ON projects FOR ALL USING (true);

-- Create indexes
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_year ON projects(year);
```

#### Start backend server
```bash
uvicorn app.main:app --reload --port 8000
```

API Documentation: http://localhost:8000/docs

### 3. Frontend Setup

#### Install Node dependencies
```bash
cd ../frontend
npm install
```

#### Configure environment variables
Create `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

#### Start development server
```bash
npm run dev
```

Website: http://localhost:3000

## 🎯 Usage

### Public Pages
- **Home**: `/` - Landing page with company overview
- **Projects**: `/projects` - Gallery of completed projects
- **Services**: `/services` - Service offerings by division
- **About**: `/about/mission`, `/about/background`, `/about/organization`
- **Contact**: `/contact` - Contact information and form

### Admin Panel
- **Projects Management**: `/admin/projects`
  - Create new projects
  - Edit existing projects
  - Delete projects
  - Upload up to 4 images per project

## 🔌 API Endpoints

### Projects
- `GET /api/projects/` - Get all projects
- `GET /api/projects/{id}` - Get project by ID
- `GET /api/projects/category/{category}` - Get projects by category
- `POST /api/projects/` - Create new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

## 🎨 Project Categories

- **mne**: Mechanical & Electrical Engineering
- **civil**: Civil & Building Construction
- **event**: Event Management & Technical Support
- **support**: Engineering Support Services (LiDAR, Solar, etc.)

## 📝 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (.env)
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
CORS_ORIGINS=http://localhost:3000
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Railway/Render/Heroku)
```bash
cd backend
# Deploy using your preferred platform
```

Update `NEXT_PUBLIC_API_URL` in production to point to your deployed backend.

## 🐛 Troubleshooting

### CORS Errors
- Ensure backend CORS origins include your frontend URL
- Check `app/main.py` CORS configuration

### Database Connection Issues
- Verify Supabase credentials in `.env`
- Check if RLS policies are set correctly

### Image Loading Issues
- Ensure images are in `public/images/projects/`
- Use correct image paths starting with `/images/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by SHAR Associates Sdn Bhd.

## 📧 Contact

**SHAR Associates Sdn Bhd**
- 📍 Lot 76, Shop No: 5-2, Block D, Plaza Kingfisher, 88400 Kota Kinabalu, Sabah
- 📞 088-430577 / 012-8278939
- 📧 shar_sb@yahoo.com
- 🌐 [Website](http://localhost:3000)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- FastAPI for the high-performance backend
- Supabase for the database solution
- Tailwind CSS for the styling framework

---

Made with ❤️ for SHAR Associates Sdn Bhd
