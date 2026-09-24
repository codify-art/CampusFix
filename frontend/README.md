# CampusFix

CampusFix is a full-stack campus issue reporting and management
application built using React.js, Node.js, Express.js and MongoDB.

## Features

- Report campus issues
- View reported issues
- Track issue status
- Update issue status
- Delete issues
- Dashboard statistics
- REST API communication

## Tech Stack

Frontend:
- React.js
- Axios
- CSS

Backend:
- Node.js
- Express.js
- REST API

Database:
- MongoDB

## Architecture

React Frontend
        |
        | HTTP Requests
        ↓
Node.js + Express Server
        |
        ↓
MongoDB

## API Endpoints

GET /api/issues
POST /api/issues
PATCH /api/issues/:id
DELETE /api/issues/:id

## How to Run

### Backend

cd backend
npm install
npm run dev

### Frontend

cd frontend
npm install
npm run dev