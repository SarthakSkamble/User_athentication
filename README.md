# User_athentication
A user registration API built with Node.js, Express, and MongoDB, featuring Zod for input validation. It checks for duplicate emails, validates user data, and securely stores information. Uses Mongoose for database management. The `/usersignin` endpoint handles user details in JSON, ensuring secure and efficient user management.
User Signup API with Node.js, Express, and MongoDB
This project is a simple and secure user registration system built with Node.js, Express, and MongoDB. It focuses on input validation, secure password handling, and effective error management.

Features
Input Validation: Ensures valid user input (email, password, and name) using the Zod library.
Secure Password Storage: Uses bcrypt to hash passwords before saving them in the database.
Duplicate User Prevention: Checks for existing users with the same email to avoid duplicate registrations.
Error Handling: Provides clear and detailed error messages for invalid inputs or other issues.
Tech Stack
Node.js: Server-side JavaScript runtime.
Express.js: Lightweight and fast web framework.
MongoDB: NoSQL database for storing user data.
Zod: Schema validation for request data.
Mongoose: ODM for MongoDB
