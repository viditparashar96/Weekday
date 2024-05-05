# Candidate Application Platform

This project is an assignment aimed at creating a candidate application platform using ReactJs, Redux, CSS, and Material UI. The platform allows users to view job listings, filter jobs based on various criteria, and implements infinite scroll for a seamless browsing experience.

# Hosted URL

```
https://weekday-gules.vercel.app/
```

# Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Open the application in your browser at `http://localhost:3000`.

## Features

### Job Cards

- Each job listing is displayed as a card containing:
  - Job title
  - Company name
  - Location
  - Job description (limited to a certain number of characters with an option to expand)
  - Experience required
  - Apply button/link

### Filters

- Minimum experience
- Company name
- Location
- Remote/on-site
- Role
- Minimum base pay

## Infinite Scroll

- Infinite scroll is implemented to load additional job listings as the user scrolls down the page. More jobs are fetched and displayed automatically without requiring the user to click on a "Load More" button.

## Responsive Design

- The platform is designed to be responsive and works well on different screen sizes, including mobile devices.

# Technology Stack

- ReactJs
- Redux
- CSS
- Material UI

# Directory Structure

```
candidate-application-platform/
src/
│
├── _root/
│   ├── Layout.css
│   └── Layout.tsx
│
├── pages/
│   ├── Home.css
│   └── Home.tsx
│
├── components/
│   ├── index.ts
│   │
│   ├── shared/
│   │   ├── Filter.css
│   │   └── Filter.tsx
│   │
│   ├── jobCard/
│   │   ├── JobCard.css
│   │   └── JobCard.tsx
│   │
│   ├── Disclaimer/
│   │   ├── Disclaimer.css
│   │   └── Disclaimer.tsx
│   │
│   └── Loader/
│       ├── Loader.css
│       └── Loader.tsx
│
├── constants/
│   ├── filter.ts
│   └── index.ts
│
├── libs/
│   ├── action/
│   │   └── job.action.ts
│   │
│   ├── features/
│   │   └── jobs/
│   │       └── jobSlice.ts
│   │
│   └── store/
│       └── store.ts
│
├── App.css
|── App.tsx
|── main.tsx


```
