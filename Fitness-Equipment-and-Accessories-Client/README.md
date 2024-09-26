# FltFlex- A Fitness Equipment Selling Website
###   [Live Website]()

**Objective:**  FitFlex is building an innovative e-commerce platform dedicated to home fitness enthusiasts, employing state-of-the-art technologies like Svelte, Sapper, Firebase, and Express.js. The site will offer a streamlined and engaging shopping experience with dynamic equipment showcases, comprehensive product guides, and an intuitive cart system. Administrators will have access to powerful sales and inventory management features, while users will enjoy personalized workout plans and quick access to fitness resources. The platform will implement fast, responsive search functionalities and notifications for upcoming promotions. Secure payment processing will be provided through Braintree integration, ensuring a smooth checkout experience. This project aims to create a comprehensive online destination for all home fitness needs, promoting an active lifestyle from the comfort of home.

## Technical Stack
- Frontend: React, Redux for state management.
- Backend: Node.js, Express, Mongoose, CORS.
- Database: MongoDB for storing product and user data.
- TypeScript: Ensures robust type safety and code quality.


# Core Features

## 1. Homepage
- **Header:** Prominently displays the logo and store name.
- **Navigation Menu:** Quick access to product categories and promotions.
- **Hero Banner:** Striking visual banner that showcases seasonal offers.
- **Category Highlights:** A visual grid featuring clickable product categories.
- **Featured Items:** Selected bestsellers and new arrivals prominently displayed.
- **Reasons to Shop:** Section explaining the advantages of organic shopping.
- **Culinary Inspiration:** Interactive gallery featuring trending recipes.
- **Footer:** Includes contact info and links to social media channels.

---

## 2. Products Page
- **Product Listings:** Displays items with images, names, prices, categories, and quantity selectors.
- **Search Bar:** Easy-to-use search functionality.
- **Category Filters:** Options for filtering products by multiple categories.
- **Sorting Features:** Various sorting options for product organization.
- **Clear Filters Button:** One-click option to reset filters.

---

## 3. Product Details Page
- **Detailed Product Info:** Includes name, price, availability, description, images, and category.
- **Add to Cart Button:** Includes quantity selection feature.
- **Related Products:** Displays similar items in the same category below the main details.
- **Pagination Controls:** Navigate through multiple product pages.

---

## 4. Cart Page
- **Item List:** Displays items in the cart with quantity adjustment options.
- **Remove Item Button:** Easily remove items from the cart.
- **Dynamic Pricing Summary:** Shows total price calculations in real-time.
- **Checkout Button:** Directs users to the checkout process.

---

## 5. Checkout Page
- **User Information Form:** Collects name, email, phone number, and address.
- **Payment Options:** Multiple methods for payment processing.
- **Order Placement:** Finalize order with stock verification.

---

## 6. Product Management
- **Product Table:** Lists all products with action buttons for management.
- **Update/Delete Options:** Functionality with confirmation prompts for changes.
- **New Product Form:** Easy form for adding new items to the inventory.
- **Pagination:** View all products with pagination controls.

---

## 7. About Us Page
- **Company Background:** Overview of the company's mission and values.
- **Meet the Team:** Introduces key team members with brief bios.
- **Customer Reviews:** Section featuring testimonials from satisfied customers.
- **Contact Information:** Includes animated elements and gradient backgrounds.

---

### Additional Features
- **Optimized API Calls:** Reduces the frequency of API requests during searches for efficiency.
- **Refresh Warning:** Alerts users if they attempt to refresh with items still in their cart.
- **Custom Pagination:** Tailored pagination for enhanced product browsing experience.


## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)

---

## Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn
- MongoDB (running locally or a connection URI to a remote instance)

---

## Installation

1. Clone the repository:

```bash
   <!-- Frontend clone  -->
   git clone https://github.com/Nirob-Barman/Fitness-Equipment-and-Accessories/tree/main/Fitness-Equipment-and-Accessories-Client
```

 ```bash
   <!-- Backend clone  -->
   git clone https://github.com/Nirob-Barman/Fitness-Equipment-and-Accessories/tree/main/Fitness-Equipment-and-Accessories-Server
```


2. Install dependencies:

### usi npm:

```tsc
npm i
```

## Configuration

1. Create a `.env.local` file in the root directory of the project and add the following environment variables:


Frontend .env.local
```bash
VITE_PAYMENT_GATEWAY=
```

Banckend .env
```bash

NODE_ENV = development
PORT=5000
DATABASE_URL = 
STRIPE_SECRET_KEY=
```

### Running the Application both

1. To compile and run the TypeScript application in development mode with hot-reloading, use:

```bash
npm run dev
```

2. To build the application for production

```bash
npm run build
```

Visit: http://localhost:5173/

This project aims to create a modern, efficient, and user-centric online store for fitness enthusiasts, providing a smooth and enjoyable shopping experience while ensuring secure and reliable transactions.
