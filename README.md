<img width="1919" height="1079" alt="Screenshot 2025-07-10 233746" src="https://github.com/user-attachments/assets/5dc50f16-85f5-4a14-965c-3db30bd497e4" /># Vibes – Mini Social Media App

A React + Vite powered mini social media application where users can register, log in, and share posts with titles, content, hashtags, and optional images. The app uses Firebase Authentication and React Context for managing post state.

---

## ✨ Features

- **User Authentication (Firebase)**
  - Email/Password registration and login.
  - Login & Register pages with simple UI.

- **Create & Manage Posts**
  - Create a post with:
    - User ID
    - Title
    - Content
    - Hashtags (space-separated)
    - Optional image upload (stored as Base64 in local state)
  - Posts are stored in a React Context (`PostListProvider`).

- **Feed / Home**
  - View all posts in a vertically scrolling feed.
  - Each post shows:
    - Title, content, user ID
    - Hashtags
    - Optional image preview
    - Likes count (button in UI)
    - Views count (field on card)
    - Comments list and new comment input (UI present)

- **Account Page**
  - Shows posts created by the currently “logged-in” user (based on `userId` stored in `localStorage`).
  - Lists your posts with their tags and content.

- **Layout & UI**
  - Left **Sidebar** with navigation links: Home, Create Post, Account.
  - Top **Navbar** with:
    - Search input (UI only, no backend search logic)
    - Login / Sign-up buttons.
  - **Dark neon theme** using custom CSS (green accent).
  - Uses **Bootstrap 5**, **Ant Design buttons**, and **React Icons**.

---

## 🧱 Tech Stack

- **Frontend:**
  - [React 18](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [React Router DOM v6](https://reactrouter.com/)
  - [Ant Design](https://ant.design/) (buttons)
  - [Bootstrap 5](https://getbootstrap.com/) (layout & utility classes)
  - [React Icons](https://react-icons.github.io/react-icons/)

- **Auth & Services:**
  - [Firebase](https://firebase.google.com/) (Authentication, Analytics)

- **State Management:**
  - React Context + `useReducer` (`src/store/Post-list-store.jsx`)

- **Tooling:**
  - ESLint
  - Vite dev server & build

---

## 📁 Project Structure

task5/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── bg.png
│   └── vite.svg
└── src/
    ├── main.jsx
    ├── index.css
    ├── firebase.js
    ├── assets/
    │   └── react.svg
    ├── routes/
    │   ├── App.jsx
    │   └── App.css
    ├── store/
    │   └── Post-list-store.jsx
    └── components/
        ├── Account.jsx
        ├── CreatePost.jsx
        ├── Footer.jsx
        ├── Loading.jsx
        ├── Login.jsx
        ├── Login.css
        ├── Navbar.jsx
        ├── Navbar.css
        ├── Post.jsx
        ├── PostList.jsx
        ├── Register.jsx
        ├── Sidebar.jsx
        ├── Sidebar.css
        └── WelcomeMessage.jsx

🚀 Getting Started
1. Prerequisites
Node.js (recommended: ≥ 18.x)

npm or pnpm or yarn

2. Install Dependencies
bash
Copy code
# using npm
npm install

# OR using pnpm
pnpm install
3. Firebase Setup
This project already includes a Firebase configuration in src/firebase.js:

js
Copy code
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
🔐 Recommended:

Create your own Firebase project.

Replace the values in firebaseConfig with your project credentials.

Optionally move them into environment variables for security (e.g. using import.meta.env with Vite).

4. Run in Development Mode
bash
Copy code
npm run dev
Then open the URL printed in the terminal (typically http://localhost:5173).

5. Build for Production
bash
Copy code
npm run build
Build output will be in the dist/ directory.

6. Preview Production Build
bash
Copy code
npm run preview
🧩 Core Modules Overview
Routing (src/main.jsx)
Uses createBrowserRouter from react-router-dom.

Defined routes:

/login → Login

/register → Register

/ → App (layout)

/ → PostList (feed)

/createpost → CreatePost

/account → Account

Layout (src/routes/App.jsx)
Wraps the main content with:

Sidebar

Navbar

Outlet (for nested routes)

Provides PostListProvider context to all child routes.

State Management (src/store/Post-list-store.jsx)
PostList context:

postList: array of post objects.

fetching: boolean, used to show loading spinner.

addPost(post): add a new post.

deletePost(postId): remove an existing post.

Uses useReducer to manage the list.

Note: The Post component UI includes like & comment handlers (likePost, addComment) which can be wired into the context and reducer if you want full like/comment persistence.

Auth Components
Login (src/components/Login.jsx)

Uses signInWithEmailAndPassword(auth, email, password).

On success → alerts and navigates to /.

Register (src/components/Register.jsx)

Uses createUserWithEmailAndPassword(auth, email, password).

On success → alert instructing user to log in.

Styling for both uses Login.css and a background image from /public/bg.png.

Posts
CreatePost (src/components/CreatePost.jsx)

Form fields: userId, title, content, tags, image.

Image upload preview using FileReader and Base64.

Saves userId to localStorage.

Creates a newPost object and calls addPost(newPost).

Navigates back to / after submit.

PostList (src/components/PostList.jsx)

Uses PostList context.

Shows:

Loading spinner while fetching.

WelcomeMessage if no posts.

List of Post components otherwise.

Post (src/components/Post.jsx)

Displays a card for each post:

Title, content, userId, tags, likes, views.

Optional image.

Delete button (deletePost(post.id)).

Like button & comments UI (hooks ready in UI; logic can be connected via context).

Account (src/components/Account.jsx)

Reads userId from localStorage.

Filters posts in context where post.userId === currentUserId.

Lists all posts created by the current user.

🎨 UI / Styling
Global theme variables in src/index.css.

Layout & post card styling in src/routes/App.css.

Component-specific styles:

Login.css – auth pages.

Navbar.css – top navigation bar.

Sidebar.css – left vertical menu.

Uses:

Bootstrap utility classes (e.g. container, row, btn, d-flex).

Custom neon green accents and dark background.

🔮 Possible Improvements
Persist posts to a backend or Firebase Firestore instead of in-memory context.

Implement full like/comment logic in PostList context/reducer.

Add search/filter functionality using the navbar input.

Add profile details & avatars for users.

Add pagination or infinite scroll for posts.

Protect routes (/, /createpost, /account) so only logged-in users can access them.

📜 License
This project is licensed under the MIT License.
See the LICENSE file for details.

pgsql
Copy code

If you want, I can also tweak this README to match any specific college/assignment format (like adding your name, reg. no., or a short “Project Aim” section).


Preview Of Project -


<img width="1919" height="1079" alt="Screenshot 2025-07-10 233746" src="https://github.com/user-attachments/assets/f96a63ca-ff53-4e4d-87c6-165751fcffbd" />
<img width="1896" height="1079" alt="Screenshot 2025-07-10 233723" src="https://github.com/user-attachments/assets/7e426933-c6f0-46db-b294-38f3189fb7bb" />
<img width="1899" height="1079" alt="Screenshot 2025-07-10 233419" src="https://github.com/user-attachments/assets/438ab5dc-3145-4ba4-92a0-1c940882a9a4" />
<img width="1916" height="964" alt="Screenshot 2025-07-10 230146" src="https://github.com/user-attachments/assets/d03bce2e-5228-45b4-85fd-afdbdbf6fe38" />






