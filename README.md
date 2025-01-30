# PhysioMove

This project is a database management system designed for a private physiotherapy clinic. The platform is tailored for professionals working in the clinic, allowing them to manage their daily patient consultations efficiently.

Users (the therapists) will be able to create and maintain their profiles, as well as record details for each patient they treat. The system enables the therapist to document:

Consultation details, including therapeutic techniques applied, exercises prescribed, and any other relevant notes.
Patient consultation history, where therapists can track the reasons for each visit, monitor progress, and document important observations.
Appointment management, with the ability to log and organize patient visits on a daily basis.
This system aims to streamline the management of patient records and enhance communication between the clinic's professionals, helping to provide higher-quality care and personalized treatments.



## Tech Stack

**Frontend:**
- React (with hooks)
- React Router
- CSS frameworks/libraries (e.g., Tailwind CSS, Bootstrap, or custom CSS)

**Backend:**
- Node.js
- Express
- MongoDB
- JWT Tokens for authentication

## Features

- JWT-based authentication for secure login
- User profile management
- Admin dashboard for managing users and content
- CRUD functionality for resources (e.g., users, posts, treatments)
- Responsive design for mobile and desktop views

## Authentication

Login with email and password to receive a JWT token.
Use the token for authorization in subsequent API requests.

## API Endpoints

**User:**
- GET /therapists: Get a list of all the therapists
- GET /therapist-ID: Get a single therapist profile by Id
- PUT /therapists-ID: Update the profile of the therapist


**Treatment:**
- GET /treatments: Get a list of available treatments
- GET /treatment-ID: Get a single treatment by Id
- POST /treatments: Create a new treatment
- DELETE /treatment: Delete a treatment if the user created it

**Comments:**
- GET /comment-ID: Get a single comment by Id
- POST /comment: Create a comment of a single treatment


## Future Features

- Access to a single comment and the ability to edit it.
- Ability to upload photos and store them in the backend.
- Track who created a comment or a treatment (show creator's information).
- Create an admin role that can manage therapist accounts (e.g., create, edit, and delete therapist profiles).


## Contact Information

You can find more about me and my work through the following links:

- **GitHub**: https://github.com/patoare
- **LinkedIn**: https://www.linkedin.com/in/patricio-webdeveloper/
