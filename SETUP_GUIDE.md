# Installation & Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Backend Setup

### 1. Navigate to backend directory
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
```bash
cp .env.example .env
```

Edit `.env` and add your configurations:
- MongoDB connection string
- JWT secret
- Port number
- Email service credentials
- Payment API keys (Stripe)

### 4. Start the backend server
```bash
npm run dev
```

Server runs on `http://localhost:5000`

---

## Frontend Setup

### 1. Navigate to frontend directory
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
```bash
cp .env.example .env
```

Edit `.env`:
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Skill Connect
```

### 4. Start the development server
```bash
npm run dev
```

Server runs on `http://localhost:3000` (or 5173 if port 3000 is occupied)

---

## Database Setup

### Using MongoDB Atlas (Recommended)
1. Create account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and database
3. Get connection string
4. Add to backend `.env` as `MONGODB_URI`

### Using Local MongoDB
```bash
# Install MongoDB locally
# Start MongoDB service
mongod

# Connection string
MONGODB_URI=mongodb://localhost:27017/skill-connect
```

---

## Project Structure

```
fsd-practice/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── jwt.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── freelancerController.js
│   │   └── serviceController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Freelancer.js
│   │   ├── Service.js
│   │   ├── Review.js
│   │   ├── Message.js
│   │   ├── Booking.js
│   │   └── Payment.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── freelancers.js
│   │   ├── services.js
│   │   └── index.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProfileCard.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ReviewCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Browse.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── redux/
│   │   │   ├── slices/
│   │   │   │   └── userSlice.js
│   │   │   └── store.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── postcss.config.js
│   └── .env.example
│
├── README.md
├── DATABASE_SCHEMA.md
├── ROADMAP.md
├── SETUP_GUIDE.md
└── .gitignore
```

---

## Next Steps

1. ✅ Project structure created
2. ⬜ Implement authentication (Phase 1)
3. ⬜ Create user profiles (Phase 2)
4. ⬜ Build service listings (Phase 3)
5. ⬜ Add reviews & ratings (Phase 4)
6. ⬜ Implement messaging (Phase 5)
7. ⬜ Add payments (Phase 6)
8. ⬜ Create dashboards (Phase 7)
9. ⬜ Admin panel & testing (Phase 8)

---

## Troubleshooting

### Port already in use
```bash
# Change port in backend
PORT=5001 npm run dev

# Change port in vite.config.js for frontend
```

### MongoDB connection error
- Check MongoDB is running
- Verify connection string
- Check firewall/network settings

### API connection failed
- Ensure backend is running on correct port
- Check CORS configuration
- Verify `VITE_API_URL` in frontend `.env`

### Dependencies installation issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## Development Tips

1. **Use Redux DevTools** - Install browser extension for debugging
2. **API Testing** - Use Postman for testing backend endpoints
3. **Hot Reload** - Frontend auto-reloads on file changes
4. **Console Logs** - Check browser console and terminal for errors
5. **Git Commits** - Make meaningful commits as you progress

Happy coding! 🚀