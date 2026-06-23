# Player-attendance-tracker-
# WFC Attendance Tracker

## Overview

WFC Attendance Tracker is a full-stack web application developed to manage player attendance for sports academy training sessions.

The system allows coaches to:

* Login securely
* View registered players
* View training sessions
* Mark player attendance
* Track attendance status (Regular, Complimentary, Absent)
* Store attendance records in MongoDB

---

## Features

### Coach Authentication

* Coach login functionality
* JWT-based authentication

### Player Management

* View player details
* Track booked sessions
* Track used sessions

### Session Management

* View available training sessions
* Organize sessions by age group

### Attendance Tracking

* Mark attendance for players
* Attendance status options:

  * Regular
  * Complimentary
  * Absent
* Prevent duplicate attendance entries for the same player and session

---

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## Project Structure

backend/
├── config/
├── models/
├── routes/
├── server.js

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.jsx

---

## Installation

### Clone Repository

git clone <repository-url>

### Backend Setup

cd backend

npm install

Create a .env file:

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Start backend server:

npm start

### Frontend Setup

cd frontend

npm install

npm run dev

---

## API Endpoints

### Authentication

POST /api/auth/login

### Players

GET /api/players

### Sessions

GET /api/sessions

### Attendance

GET /api/attendance

POST /api/attendance/mark

---

## Future Enhancements

* Attendance reports
* Attendance history dashboard
* Search and filter functionality
* Coach profile management
* Analytics and charts

---

## Author
Srivarshine Thoppe 

Final Year BE Computer Engineering
