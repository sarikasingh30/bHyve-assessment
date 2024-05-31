# STORE MANAGEMENT SYSTEM

## Introduction

This project is a store management system built with Next.js, Redux, and Chakra UI. It allows users to view a list of articles, view individual article details, create new articles, edit existing articles, and delete articles. The application also includes search and filter functionality to enhance the user experience. The application demonstrates a solid understanding of Next.js, Redux for state management, Axios for API requests, and responsive design principles.

## Project Type

Frontend

## Deployed App

Frontend: [https://b-hyve-ecomm.vercel.app/](https://b-hyve-ecomm.vercel.app/)

## Directory Structure

    my-app/
    ├── pages/
    │ ├── articles/
    │ │ ├── [_id].js
    │ │ ├── [_id]/
    │ │ │ ├── edit.js
    │ ├── index.js
    ├── components/
    │ ├── Layout.js
    │ ├── Navbar.js
    │ ├── Footer.js
    ├── redux/
    │ ├── articlesSlice.js
    │ ├── store.js
    ├── styles/
    │ ├── globals.css
    ├── public/
    ├── package.json
    ├── README.md


## Features

- List all articles with infinite scrolling.
- View details of a single article.
- Create and edit articles.
- Search and filter articles.
- Delete articles.
- Responsive design with Chakra UI.

## Design Decisions and Assumptions

- **State Management:** Redux is used for managing the global state of the application, ensuring that the state is consistent across all components.
- **API Requests:** Axios is used for making HTTP requests to the MockAPI endpoint.
- **Responsive Design:** Chakra UI is chosen for its simplicity and ease of creating responsive layouts.
- **Routing:** Next.js dynamic routing is utilized to manage different article pages and their actions.

## Installation & Getting Started

To get the project running locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/sarikasingh30/bHyve-assessment.git
    cd my-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Viewing Articles

1. Open the homepage to view a list of articles.
2. Scroll down to load more articles with infinite scrolling.

### Creating a New Article

1. Click on the "Create New Article" button.
2. Fill out the article form and submit.

### Editing an Article

1. Navigate to the article you want to edit.
2. Click on the "Edit" button.
3. Make changes and submit.

### Deleting an Article

1. Navigate to the article you want to delete.
2. Click on the "Delete" button.

### Searching and Filtering Articles

1. Use the search input to find articles by title.
2. Use the filter dropdown to filter articles by category.

## Credentials

No authentication is required for accessing the application.

## APIs Used

- **MockAPI:** Used for managing the articles.
  - Endpoint: [https://665780c45c36170526450bc1.mockapi.io/blogs/v1/articles](https://65d5af42f6967ba8e3bc35a3.mockapi.io/blogs/v1/articles)
  - Documentation: [MockAPI Docs](https://github.com/mockapi-io/docs/wiki)

## API Endpoints

- **GET /blogs/v1/articles**: Retrieve all articles.
- **POST /blogs/v1/articles**: Create a new article.
- **GET /blogs/v1/articles/:id**: Retrieve a single article by ID.
- **PUT /blogs/v1/articles/:id**: Update an article by ID.
- **DELETE /blogs/v1/articles/:id**: Delete an article by ID.

## Technology Stack

- **Next.js:** React framework for server-side rendering and static site generation.
- **Redux(ReduxToolkit):** State management library for managing global state.
- **Axios:** Promise-based HTTP client for making API requests.
- **Chakra UI:** UI library for building accessible and responsive React applications.
- **MockAPI:** Service for creating and managing mock RESTful APIs.
- **React-Quill:** NPM Package for integrating the Quill rich text editor, providing customizable and feature-rich text editing capabilities 

---