
# Pizza Dashboard

A simple, modern, and responsive pizza dashboard built with **Next.js**, **NextAuth.js**, **Tailwind CSS**, and **Drizzle ORM**. This app features Google OAuth authentication, protected routes, and a clean UI for displaying mock pizza orders.

##  Author

**Sudhanshu**

---

##  Live Demo

🔗 [Live Application URL](hhttps://pizza-order-theta.vercel.app/)

🔗 [GitHub Repository](https://github.com/sudhanshu042004/Pizza_order)

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) with Google OAuth
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sudhanshu042004/Pizza_order.git
cd pizza-dashboard
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
touch .env.local
```

Paste the following (replace placeholders with your actual values):

```env
# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (from Google Developer Console)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database
DATABASE_URL=your_postgresql_connection_string
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app locally.

---

## Google OAuth Setup Guide

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Navigate to **APIs & Services > Credentials**
4. Click **Create Credentials > OAuth Client ID**
5. Choose **Web Application**
6. Add this URI to **Authorized Redirect URIs**:

   ```
   http://localhost:3000/api/auth/callback/google
   ```
7. Copy the **Client ID** and **Client Secret**, and paste them into your `.env.local` file.

---

## Features

*  Protected routes with redirect logic
*  Google Sign-In using NextAuth.js
*  “Hello, \[User Name]” welcome page
*  Pizza Orders dashboard with:
  * Order ID, Customer Name, Pizza Type, Quantity, Date, Status
  * Status badge with color indicators
*  Beautiful, responsive UI
*  Animated, interactive elements
*  Drizzle ORM integration

---

## Folder Structure Highlights

```bash
/pages
  /api/auth
  /dashboard
/components
/lib
```

---


## License

MIT – Feel free to use or fork this project.

---

