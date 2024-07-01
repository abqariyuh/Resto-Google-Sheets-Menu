# Restaurant Menu via Google Sheets

This is a simple web-based restaurant menu that fetches data from a Google Sheets document using the Google Sheets API. The menu sections are dynamically generated and include a sample "Order Now" button for each section.

## Features

- Dynamic fetching of menu items from Google Sheets.
- Responsive design with separate CSS and JavaScript files.
- Each section includes an "Order Now" button linking to a sample order page.
- Easy to customize and extend.

## Demo

https://codepen.io/Abqariyuh-A-A-Yusuf/full/qBGeEzE

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- Google account with access to Google Sheets.
- Google API key for accessing the Google Sheets API.

## Setup Instructions

### Step 1: Create a Google Sheet

1. Create a new Google Sheet or use the provided template.
2. Ensure the sheet has the following structure:
    - Column A: Section name (e.g., "Finger Foods")
    - Column B: Item name (e.g., "Chicken Wings")
    - Column C: Item price (e.g., "N3,000")

View or download the [Google Sheets template](https://docs.google.com/spreadsheets/d/1GbXxAkgTFVERTEAvrw-4MCULrhWzR3h4Uy5XnoI467E/view)

### Step 2: Get Google Sheets API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the Google Sheets API for the project.
4. Create credentials and obtain an API key.
5. Restrict the API key to only allow requests from your domain.
