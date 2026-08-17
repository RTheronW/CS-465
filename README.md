# CS-465
SNHU CS-465 Full Stack Development - Travlr Getaways Project

# Travlr Getaways – Full Stack Web Application

A full-stack travel booking application built with the MEAN stack (MongoDB, Express, Angular, Node.js).  
The project includes a public customer-facing website and a secure administrator single-page application (SPA).

---

## Architecture

### Frontend Comparison
This project uses two different frontend approaches:

- **Express + Handlebars (Customer-facing site)**  
  The public website is server-rendered. Express serves HTML pages that are dynamically populated using Handlebars templates. This approach is straightforward, reliable, and well-suited for content that does not require heavy client-side interactivity.

- **Angular SPA (Administrator interface)**  
  The admin side is a single-page application. Once loaded, the browser handles routing and updates without full page reloads. Angular components, services, and reactive forms provide a richer, more interactive experience for managing trips.

The two approaches complement each other: Express/Handlebars delivers fast, SEO-friendly public pages, while the Angular SPA gives administrators a modern, responsive tool for data management.

### Why MongoDB?
MongoDB was chosen because trip data is document-oriented and fits naturally into JSON-like structures. It allows flexible schemas, which made it easy to store varying trip details (dates, pricing, descriptions, images) without rigid table relationships. MongoDB also integrates cleanly with Node.js and Express through Mongoose, keeping the entire stack JavaScript-based.

---

## Functionality

### JSON and Full-Stack Integration
JSON (JavaScript Object Notation) is a lightweight data format. While JavaScript is a programming language, JSON is simply a structured way to represent data as objects and arrays.

In this application, JSON is the common language between frontend and backend:
- The Express API returns trip data as JSON.
- The Angular SPA consumes that JSON to display and edit trips.
- Form submissions and authentication tokens are also exchanged as JSON.

This shared format allows the frontend and backend to communicate cleanly without tight coupling.

### Refactoring and Reusable Components
Several important refactoring steps improved the application:

- Static HTML pages were converted into Handlebars templates so data could be rendered dynamically.
- Hard-coded trip arrays were replaced with live data from the MongoDB API.
- The codebase was reorganized into an MVC structure (`app_server` with routes, controllers, and views).
- Authentication was added using JWT, and an HTTP interceptor was created so every protected request automatically includes the token.

On the Angular side, reusable UI components (trip cards, forms, navigation) reduced duplication and made the admin interface easier to maintain and extend.

---

## Testing

API testing focused on the main endpoints:

- `GET /api/trips` – retrieve all trips  
- `POST /api/trips` – create a new trip  
- `PUT /api/trips/:tripCode` – update an existing trip  

Basic requests were tested first in the browser and with tools such as Postman. After authentication was added, testing expanded to verify that protected endpoints correctly reject requests without a valid JWT and accept requests that include a proper `Authorization` header. This layered testing confirmed both functional correctness and security controls.

---

## Reflection

This course provided for real practical experience building a complete full-stack application from initial setup through authentication and deployment readiness. Working with the MEAN stack strengthened skills in server-side development, RESTful API design, NoSQL databases, and modern frontend frameworks.

These skills are directly relevant to roles in web development, IT operations, and cybersecurity-focused application support. Completing a project that includes both public and secured administrative interfaces demonstrates the ability to design, implement, and protect a real-world web application—experience that strengthens a professional portfolio and technical credibility.
