# Role-Based Dashboard Application

## 📌 Overview
This project is a simple frontend dashboard application that demonstrates Role-Based Access Control (RBAC). Users can log in as either an Admin or a User, and the interface dynamically updates based on the selected role.

The goal of this project is to showcase frontend development skills including UI design, state management, and interaction handling.

---

## 🚀 Features

### 🔐 Authentication (Simulated)
- Role selection login (Admin / User)
- Basic validation to ensure role is selected

### 🧑‍💼 Role-Based Access Control (RBAC)
- Admin users can view admin-specific dashboard data
- Regular users see limited, user-specific information
- Conditional rendering based on role

### 📊 Dashboard
- Admin Panel:
  - Total users (mock data)
  - Revenue (mock data)
- User Panel:
  - Activity status

### 🧭 Navigation
- Sidebar navigation
  - Dashboard
  - Profile
  - Logout
- Smooth switching between sections

### 👤 Profile Page
- Displays user role and basic information

---

## 🧠 State Management Approach
- Used `localStorage` to store user role
- Application state is retrieved on page load
- UI updates dynamically based on stored role

---

## 🎨 User Experience (UX)
- Clean and simple layout
- Easy navigation with sidebar
- Clear role-based content separation
- Error handling for invalid login

---

## 🛠️ Technical Details

### Technologies Used
- HTML
- CSS
- JavaScript (Vanilla JS)

### Code Structure
- Modular file separation:
  - `index.html` → Login page
  - `dashboard.html` → Main dashboard
  - `style.css` → Styling
  - `app.js` → Logic and state handling

### Best Practices
- Reusable functions
- Clear variable naming
- Separation of concerns (UI vs Logic)

---

## ⚠️ Edge Cases Handled
- Prevent login without selecting role
- Redirect to login if no role is stored
- Conditional UI rendering to avoid incorrect access

---

## ▶️ How to Run

1. Download or clone the project
2. Open `index.html` in any web browser
3. Select a role (Admin/User)
4. Click Login to access the dashboard

## 💡 Live Demo--https://firstpj.github.io/Finance-Dashboard-UI/

## 💡 Assumptions
- Authentication is simulated (no backend)
- Data displayed is static/mock data
- Focus is on frontend logic and structure

---

## 📈 Future Improvements
- Integrate real authentication system
- Connect to backend API
- Add responsive mobile design
- Improve UI with modern frameworks (React, Tailwind)

---

## 👨‍💻 Author
Frontend Developer Intern Candidate