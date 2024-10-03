# Grocery Store Products API

This API allows CRUD operations on categories, subcategories, and products for a grocery store. It also supports nested routes, allowing subcategories to be created under categories and products under subcategories. Image upload functionality is included using Multer. The API is built using Express and MongoDB as the database.

## Features

1. Category Management: Create, read, update, and delete categories.
2. Subcategory Management: Create, read, update, and delete subcategories nested under categories.
3. Product Management: Create, read, update, and delete products nested under subcategories.
4. Image Upload: Upload product images using Multer middleware.
5. Database: MongoDB is used for data storage.
6. Routing: Express is used for route handling, including nested routes for categories and subcategories.

## Routes

### Categories

#### (cn = categories Name)

- **Create Category**: POST /api/cn
- **Get All Categories**: GET /api/cn
- **Get Category by ID**: GET /api/cn/:id
- **Update Category**: PUT /api/cn/:id
- **Delete Category**: DELETE /api/cn/:id

### Subcategories (Nested under Categories)

#### sn = subcategories Name

- **Create Subcategory**: POST /api/cn/:categoryId/sn
- **Get All Subcategories**: GET /api/cn/:categoryId/sn
- **Get Subcategory by ID**: GET /api/cn/:categoryId/sn/:id
- **Update Subcategory**: PUT /api/cn/:categoryId/sn/:id
- **Delete Subcategory**: DELETE /api/cn/:categoryId/sn/:id

### Products (Nested under Subcategories)

#### prn = product Name

- **Create Product**: POST /api/sn/:subcategoryId/prn
- **Get All Products**: GET /api/sn/:subcategoryId/prn
- **Get Product by ID**: GET /api/sn/:subcategoryId/prn/:id
- **Update Product**: PUT /api/sn/:subcategoryId/prn/:id
- **Delete Product**: DELETE /api/sn/:subcategoryId/prn/:id

### Products (used for filtering)

- **Get All Products**: GET /api/prn
- **Get Product by ID**: GET /api/prn/:id
- **Update Product**: PUT /api/prn/:id
- **Delete Product**: DELETE /api/prn/:id

## Image Upload

Upload Product Image: When creating or updating a product, images can be uploaded using Multer. Add an image field in the form data for the request.

## Technologies Used

Backend: Express.js
Database: MongoDB
Image Upload: Multer

## Usage

Use the API to create categories, subcategories, and products.
Use nested routes to manage subcategories under categories and products under subcategories.
Upload images while creating or updating products by adding the image in the form data.
