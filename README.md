ReactJS Application with Mock API and Deployment

Overview
This is a ReactJS + TypeScript CRUD application that uses a mock API (JSONPlaceholder) to demonstrate CRUD operations (Create, Read, Update, Delete). The project is styled with Tailwind CSS and deployed using Vercel or Netlify.

Features

- Fetch data from a mock API (https://jsonplaceholder.typicode.com/posts)
- Create new items with unique IDs
- Edit items individually without affecting others
- Delete specific items correctly
- Display user id and post id in the UI
- Prevent duplicate titles: If a title already exists, an error message will be shown.
- Responsive design using Tailwind CSS
- Deployed on Vercel / Netlify

Technologies Used

- React.js (TypeScript)
- JSONPlaceholder Mock API
- Tailwind CSS (for styling)
- Axios (for API calls)
- Vercel / Netlify (for deployment)

Installation

1. Clone the Repository
   git clone https://github.com/khalyanooo1/ReactJS-Application-with-Mock.git
   cd react-crud-app

2. Install Dependencies
   npm install

3. Run the Development Server
   npm start

The app will be available at: http://localhost:3000/

Usage Guide

1. Fetching Data: The app initially loads 10 posts from JSONPlaceholder API.
2. Adding an Item:
   - Enter a title and description.
   - Click "Add Item" to save it in the list.
   - Each item will have a unique and a random user ID.
   - If the title already exists, an error message will notify the user.
3. Editing an Item:
   - Click the "Edit" button next to an item.
   - Modify the title/description and press "Save".
4. Deleting an Item:
   - Click the "Delete" button next to an item to remove it.

Updated UI:

- Each item now displays user id and post id.
- Updated the state management to ensure updates and deletions work correctly.

Deployment
This project is deployed on Vercel and Netlify.

Deploy on Vercel

1. Install Vercel CLI:
   npm install -g vercel

2. Deploy:
   vercel
