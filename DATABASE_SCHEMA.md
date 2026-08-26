# Skill Connect - Full Stack Project

## Database Schema

### 1. User Model
```
- _id (ObjectId)
- email (String, unique)
- password (String, hashed)
- name (String)
- avatar (String)
- bio (String)
- userType (String: 'client' | 'freelancer' | 'both')
- createdAt (Date)
- updatedAt (Date)
```

### 2. Freelancer Profile Model
```
- _id (ObjectId)
- userId (Reference to User)
- title (String)
- skills (Array of Strings)
- experience (Number - years)
- hourlyRate (Number)
- portfolio (Array of Objects)
  - title, description, image, link
- verified (Boolean)
- rating (Number)
- totalReviews (Number)
- bio (String)
- location (String)
- languages (Array)
- createdAt (Date)
```

### 3. Service Model
```
- _id (ObjectId)
- freelancerId (Reference to Freelancer)
- title (String)
- description (String)
- category (String)
- price (Number)
- deliveryDays (Number)
- images (Array)
- requirements (Array)
- active (Boolean)
- rating (Number)
- totalOrders (Number)
- createdAt (Date)
```

### 4. Review Model
```
- _id (ObjectId)
- reviewerId (Reference to User)
- freelancerId (Reference to Freelancer)
- rating (Number: 1-5)
- comment (String)
- createdAt (Date)
```

### 5. Message Model
```
- _id (ObjectId)
- senderId (Reference to User)
- recipientId (Reference to User)
- content (String)
- attachments (Array)
- read (Boolean)
- timestamp (Date)
```

### 6. Booking Model
```
- _id (ObjectId)
- clientId (Reference to User)
- serviceId (Reference to Service)
- status (String: 'pending' | 'in-progress' | 'completed' | 'cancelled')
- amount (Number)
- deadline (Date)
- requirements (String)
- createdAt (Date)
```

### 7. Payment Model
```
- _id (ObjectId)
- bookingId (Reference to Booking)
- payerId (Reference to User)
- payeeId (Reference to User)
- amount (Number)
- status (String: 'pending' | 'completed' | 'failed')
- transactionId (String)
- createdAt (Date)
```

---

## API Routes Structure

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout
- POST `/api/auth/refresh-token` - Refresh JWT
- POST `/api/auth/forgot-password` - Request password reset

### Freelancers
- GET `/api/freelancers` - List all freelancers (with filters)
- GET `/api/freelancers/:id` - Get freelancer profile
- PUT `/api/freelancers/:id` - Update freelancer profile
- POST `/api/freelancers/:id/verify` - Verify freelancer (admin)
- GET `/api/freelancers/search?skills=x,y,z` - Search by skills

### Services
- GET `/api/services` - List services
- POST `/api/services` - Create service
- GET `/api/services/:id` - Get service details
- PUT `/api/services/:id` - Update service
- DELETE `/api/services/:id` - Delete service
- GET `/api/freelancers/:id/services` - Get freelancer's services

### Reviews
- POST `/api/reviews` - Create review
- GET `/api/reviews/:freelancerId` - Get freelancer reviews
- PUT `/api/reviews/:id` - Update review
- DELETE `/api/reviews/:id` - Delete review

### Bookings
- POST `/api/bookings` - Create booking
- GET `/api/bookings` - List user's bookings
- PUT `/api/bookings/:id` - Update booking status
- GET `/api/bookings/:id` - Get booking details

### Messages
- POST `/api/messages` - Send message
- GET `/api/messages/:conversationId` - Get conversation
- GET `/api/conversations` - List all conversations
- PUT `/api/messages/:id/read` - Mark message as read

### Payments
- POST `/api/payments` - Process payment
- GET `/api/payments` - List payments
- GET `/api/payments/:id` - Get payment details

---

## Frontend Pages

1. **Home Page** - Hero, featured freelancers, categories
2. **Browse Freelancers** - Search, filter by skills, rate, experience
3. **Freelancer Profile** - Portfolio, skills, reviews, services
4. **Service Details** - Full service info, reviews, booking
5. **Dashboard** - User workspace, stats, bookings
6. **Messages** - Chat interface, conversations
7. **Post Service** - Create/edit service
8. **Settings** - Profile, security, preferences
9. **Admin Panel** - Moderation, analytics (if needed)

---

## Setup Instructions

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your values
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Both servers should run on:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000 (Vite) or 5173

