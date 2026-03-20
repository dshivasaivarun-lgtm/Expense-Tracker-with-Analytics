# ExpenseIQ — Full Stack Expense Tracker

A production-ready expense tracking app built with **Next.js 15**, **MongoDB Atlas**, **Recharts**, and **JWT Auth**.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 App Router, TypeScript, Tailwind CSS |
| Backend | Next.js API Routes |
| Database | MongoDB Atlas + Mongoose |
| Charts | Recharts |
| Auth | JWT + bcryptjs |
| Export | SheetJS (XLSX/CSV) |

## Project Structure

```
expense-tracker/
├── app/
│   ├── api/
│   │   ├── auth/          # login / register / logout / me
│   │   ├── transactions/  # Full CRUD + [id]
│   │   ├── analytics/     # Charts data + AI insights
│   │   ├── categories/    # Custom categories
│   │   ├── budget/        # Budget CRUD + spent tracking
│   │   └── export/        # CSV / XLSX export
│   ├── dashboard/         # Main dashboard page
│   ├── transactions/      # List with filters & pagination
│   ├── analytics/         # 4 analytics charts
│   ├── budget/            # Budget tracker with alerts
│   ├── login/             # Login page
│   └── register/          # Register page
├── components/
│   ├── dashboard/
│   │   ├── Sidebar.tsx         # Responsive sidebar nav
│   │   ├── StatCard.tsx        # Summary stat cards
│   │   └── TransactionForm.tsx # Add/Edit modal
│   └── charts/
│       └── Charts.tsx          # Pie, Bar, Area, Line charts
├── hooks/useAuth.tsx      # Auth context
├── lib/
│   ├── db.ts              # MongoDB connection
│   ├── auth.ts            # JWT utilities
│   └── api.ts             # API client with auth headers
├── models/                # User, Transaction, Category, Budget
├── types/index.ts         # All TypeScript interfaces
└── middleware.ts          # Route protection
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/expense-tracker
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars
NEXTAUTH_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Set up MongoDB Atlas (Free)

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free **M0** cluster
3. Add a database user under **Database Access**
4. Allow all IPs under **Network Access** (`0.0.0.0/0`)
5. Click **Connect → Drivers** and copy the URI into `MONGODB_URI`

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features

- **Auth** — JWT login/register, HTTP-only cookies, bcrypt password hashing
- **Transactions** — Add/Edit/Delete income & expenses with categories, notes, recurring flag
- **Filters** — Search, filter by type/category/date, sort, paginate
- **Analytics** — Category pie chart, monthly bar chart, income vs expense line, savings area chart
- **Insights** — Month-over-month comparisons, savings rate, top categories, next month prediction
- **Budget Tracker** — Set monthly budgets per category, progress bars, over-budget alerts
- **Export** — Download CSV or Excel filtered by month/year
- **Responsive** — Dark fintech UI, collapsible sidebar, mobile-friendly

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register |
| POST | `/api/auth/login` | Login |
| GET | `/api/transactions` | List with filters |
| POST | `/api/transactions` | Create |
| PUT | `/api/transactions/:id` | Update |
| DELETE | `/api/transactions/:id` | Delete |
| GET | `/api/analytics?year=2025` | Full analytics |
| GET | `/api/categories` | List categories |
| POST | `/api/categories` | Create custom category |
| GET | `/api/budget?month=3&year=2025` | Budgets with spending |
| POST | `/api/budget` | Set budget |
| GET | `/api/export?format=csv` | Export CSV |
| GET | `/api/export?format=xlsx` | Export Excel |

## Deploy to Vercel

```bash
npx vercel
```

Add `MONGODB_URI`, `JWT_SECRET`, and `NEXTAUTH_URL` in the Vercel dashboard.
