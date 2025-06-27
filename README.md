
# BlogOut

**BlogOut** is a dynamic blogging platform designed to streamline content creation, foster community engagement, and enhance content reach. With powerful AI-driven blog generation, and integrated sharing features, BlogOut provides a comprehensive solution for effortless blogging.


## Features

* **AI-Powered Blog Generation**: Admins can generate full blog posts from just a title, leveraging AI to quickly create engaging content.
* **Comment System**: Users can leave comments on blog posts, fostering a vibrant community around your content.
* **Admin Comment Moderation**: Admins have full control over comments, with the ability to approve or delete them to maintain content quality and a positive environment.
* **Email Subscription Service**: Users can subscribe to receive email notifications whenever a new blog post is published, ensuring your audience stays updated.
* **Social Sharing**: Easily share blog posts across popular platforms including WhatsApp, Facebook, X (formerly Twitter), and LinkedIn to maximize your content's reach.
* **Admin-Exclusive Blog Creation**: Only designated admin user can create and publish new blog posts, ensuring curated and high-quality content.






## Technologies used

**Frontend:**
* **React (with Vite)**: A fast and efficient JavaScript library for building user interfaces. Vite is used for rapid development and optimized builds.
* **Tailwind CSS**: A utility-first CSS framework for quickly styling the application with highly customizable designs.

**Backend:**
* **Express.js**: A minimalist web framework for Node.js, used to build the robust and scalable API for BlogOut.
* **MongoDB**: A NoSQL database used for storing blog posts, comments, blogs, and subscriptions.
* **ImageKit**: For efficient image storage and delivery, enhancing the performance and scalability of image-related content.
* **JSON Web Token (jsonwebtoken)**: For secure user authentication and authorization, ensuring that only authorized users can access specific functionalities.
* **Nodemailer**: For sending transactional emails, specifically for new blog post notifications to subscribers.
* **Multer**: A Node.js middleware for handling `multipart/form-data`, primarily used for uploading images.

**AI Integration:**
* **Gemini API**: Utilized for the AI-powered blog generation feature, transforming simple titles into comprehensive blog posts.
## Usage

### For Admins:

* **Creating Blogs**: Log in as an admin, navigate to the "Add Blogs" section, enter a title, and let the AI generate the content. You can then review and publish.
* **Manage Blogs**: You can publish and unpublish blogs as well as delete them from the "List Blogs" section.
* **Managing Comments**: Access the "Comments" panel to approve or delete user comments.

### For Users:

* **Reading Blogs**: Browse through the latest blog posts on the homepage.
* **Commenting**: Leave your thoughts and feedback in the comment section of any blog post.
* **Subscribing**: Enter your email address in the subscription form to receive updates on new blog posts.
* **Sharing**: Use the integrated share buttons to spread interesting blog posts to your network.
## Installation

**Example Setup (Illustrative):**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/gogoi-anuraj/BlogOut.git]
    cd BlogOut
    ```
    or download the zip file

2.  **Install dependencies (Frontend & Backend):**
    ```bash
    # For Frontend
    cd frontend
    npm run dev
    
    # For Backend
    cd ../backend
    npm install
    ```
3.  **Configure environment variables:**
    * Create a `.env` file in your backend directory.
    * Add your MongoDB connection string.
    * Include your Gemini API key.
    * Set up ImageKit credentials (public key, private key, URL endpoint).
    * Configure Nodemailer (SMTP host, user, pass).
    * Take SMTP from Brevo.
    * Define a JWT secret.
    * Give ADMIN_EMAIL and ADMIN_PASSWORD according to you
    

    Example `.env` (backend):
    ```
    MONGO_URI=your_mongodb_connection_string
    GEMINI_API_KEY=your_gemini_api_key
    IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
    IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
    IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
    SENDER_EMAIL= sender_email
    SMTP_USER=your_smtp_user
    SMTP_PASS=your_email_password
    JWT_SECRET=your_jwt_secret_key
    ADMIN_EMAIL = your admin email
    ADMIN_PASSWORD = your admin password
    FRONTEND_URL = 'http://localhost:5173' or the frontend URL
    ```

4.  **Run the applications:**
    ```bash
    # Start Backend Server
    cd backend
    npm run server
    
    # Start Frontend Development Server
    cd ../frontend
    npm run dev
    ```
    The frontend will typically run on `http://localhost:5173` (Vite default) and the backend on `http://localhost:3000` (Express default), but these ports can be configured.