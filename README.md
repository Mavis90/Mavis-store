# Mavis Store

## Project Description
Mavis Store is an e-commerce platform that allows users to browse and purchase products easily. With a user-friendly interface, it provides a seamless shopping experience for customers.

## Tech Stack
- **Next.js**: A powerful React framework for building server-rendered applications.
- **MongoDB**: A NoSQL database for flexible and scalable data storage.
- **Bank Transfer**: An integrated payment method for secure transactions.

## Features
- **Product Listing**: Users can view a variety of products available for purchase.
- **Shopping Cart**: Users can add or remove items from their cart before checking out.
- **User Authentication**: Secure login and registration for users.
- **Payment Processing**: Efficient handling of transactions through bank transfers.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Mavis90/mavis-store.git
   cd mavis-store
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your configurations.
4. Run the application:
   ```bash
   npm run dev
   ```
   Open your browser and go to `http://localhost:3000`.

## Project Structure
```
/mavis-store
├── /components  # React components
├─��� /pages       # Next.js pages
├── /public      # Static assets
├── /styles      # CSS styles
├── /utils       # Utility functions
└── package.json # Project dependencies and scripts
```