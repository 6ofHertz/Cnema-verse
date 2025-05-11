# RoomSync: Synchronised Sci-Fi Movie Watching Platform

## Project Overview

**RoomSync** is a **sci-fi-styled, AI-powered movie web application** designed for **social movie watching** [1, 2]. It allows users to **create and join synchronised watch rooms** to enjoy YouTube videos together with friends [1, 2]. The project aims to provide a **unique social movie watching experience** with a distinct **sci-fi theme** [1]. RoomSync is **backed by Firebase** [2]. The tagline is "Your movies, your friends, your AI. All in sync." [2] and "Located in the Clouds. Powered by the Crowd. Recommended by AI." [3].

## Key Features

### Current MVP Focus

*   **User Authentication:** Users can **register and log in** to access the platform [1, 4]. This is handled by **Firebase Authentication**, which provides methods for creating users, logging in, logging out, and managing user sessions [5, 6].
*   **YouTube Integration:** Users can **search for YouTube videos** using the **YouTube Data API v3** [4, 7, 8]. The `youtubeService.ts` file uses the API for searching and retrieving video details [4, 8]. Search results display video results with thumbnails and titles [4]. Users can select a video [9].
*   **Add Movie Page:** A dedicated page (`AddMoviePage.tsx`) accepts video selection from search results [9, 10]. It **saves the selected video (ID, title, thumbnail, etc.) to Firestore** under a `movies` collection [9, 11]. This page also displays a preview using the player [9].
*   **Firestore Integration:** Functionality is functional [11]. Movies are added with metadata such as `videoId`, `title`, `description`, `thumbnail`, and `dateAdded` [11]. It uses `firebase.firestore.FieldValue.serverTimestamp()` for consistent timestamps [11].
*   **Watch Rooms (In Progress):** The primary feature being developed is the ability to **embed a YouTube IFrame Player** and the logic to **synchronise video playback across multiple users** in a room [12]. `src/components/WatchRoom.tsx` is in progress [13, 14].

### Planned Features (Full Vision)

*   **Watch Rooms:** Create or join synchronized movie watch rooms [1, 2]. Features include **chat live with friends** [1, 2], **vote on the next movie** [1, 2], and **control room privacy** (Public, Invite-Only, or Private) [1, 2]. Chat is mentioned as a potential feature within watch rooms, likely leveraging a Firestore subcollection [12].
*   **AI Movie Assistant (Movie-GPT):** A **smart chatbot powered by OpenAI** that understands natural language prompts [15, 16], learns from user behavior [15, 16], and recommends films based on personal watch behavior, watch history, genre preferences, and chat input [15-17]. It can greet users upon login [16]. The AI section UI is planned to be full-page, immersive with a sci-fi theme, flashy animated backgrounds, an interactive slideshow of suggested movies, themed icons, and futuristic design elements [16]. Voice + text interaction support is planned [18].
*   **Personalized Dashboard:** Tracks user watch activity [15, 18], displays viewing trends and stats [15, 18], and allows managing lists and room history [15, 18].
*   **Movie Explorer:** Browse movies by various criteria [15]. Powered by TMDB or OMDB APIs [7, 18, 19]. Access detailed movie information [15]. A "Ask AI About This Movie" button is planned on movie details [18].
*   **Adding Movies:** Allow tagging videos with genres or moods [9]. Add video categories/tags [20].
*   **AI-Powered Enhancements:** Search Autocomplete Suggestions using NLP [21]. Video Tagging AI using OpenAI API to generate tags from YouTube descriptions [21]. Chatbot for Movie Recs in the WatchRoom for trivia or recommendations [21].
*   **Backend Logic:** Utilising **Firebase Cloud Functions** for secure backend logic, handling external API calls securely, background processes, and complex business logic [5, 8].

## Architecture

RoomSync follows a **client-server architecture** [5, 15] with the frontend interacting with backend services provided by Firebase [5, 15].

*   **Frontend:** A **React application** (with TypeScript) responsible for the user interface, handling user interactions, and communicating with the backend and external APIs [5, 6].
*   **Backend:** Primarily powered by **Firebase services** [5, 18]:
    *   **Firebase Authentication:** Manages user registration, login, and session management [5, 6].
    *   **Firebase Firestore:** A NoSQL cloud database used for storing application data such as user information, room details, chat messages, and movie data [5, 18, 22].
    *   **Firebase Cloud Functions:** (Planned) Used for server-side logic [5], such as handling complex API interactions securely, triggering actions based on database changes, and implementing backend validation [5, 8, 18, 23].
*   **APIs:** Integrates with the **YouTube Data API v3** [4, 7]. Plans to integrate with the **OpenAI GPT API** [7, 18, 19] and **TMDB or OMDB APIs** [7, 18, 19].

## Technologies Used

*   **Frontend:** **React (with TypeScript)** [7, 24], **React Router DOM** (for routing) [7, 24, 25], **Axios** (for API calls) [6, 7, 24], **Tailwind CSS** (or similar for styling) [7, 24]. Lucide React (for icons) [7, 24] and Shadcn/ui (components library) [7, 24] are also mentioned based on project structure.
*   **Backend:** **Firebase (Authentication, Firestore, Cloud Functions)** [18, 22, 24].
*   **APIs:** **YouTube Data API** [24], **OpenAI GPT API** (Planned) [24], **TMDB or OMDB APIs** (Planned) [24].
*   **Other:** **npm or Bun** (package manager) [24, 26], **Git** (version control) [24, 26].

## Project Structure

The project is structured as follows (key directories and files) [10, 13, 17]:

/roomsync/ ├── public/ │   └── index.html           // Main HTML file ├── src/ │   ├── components/          // Reusable React components (e.g., Navbar, YoutubeSearch, WatchRoom) │   ├── pages/               // React components for different pages (e.g., AddMoviePage, Rooms, Assistant, Explore, NotFound, Index) │   ├── ai/                  // (Planned) Components and logic for AI Assistant │   ├── services/            // Service files for API calls (e.g., youtubeService.ts) │   ├── firebase/            // Firebase configuration and initialization │   │   ├── functions/       // (Planned) Firebase Cloud Functions │   │   └── config.js(ts)    // Firebase initialization │   └── App.js(ts)           // Main application component and routing setup ├── .env                     // Environment variables (API keys, Firebase config) ├── README.md                // Project README file └── package.json             // Project dependencies and scripts

Specific files involved in the implemented/in-progress features include `src/services/youtubeService.ts` [4, 13], `src/pages/AddMoviePage.tsx` [9, 13], `src/components/YoutubeSearch.tsx` [4, 13], `src/firebase/config.ts` [11, 13], and `src/components/WatchRoom.tsx` (in progress) [13, 14]. Suggested file additions include `src/hooks/useSyncPlayer.ts` and `src/utils/firebaseHelpers.ts` [14]. Firestore rules are also a key part of the Firebase integration [11].

## Setup Instructions

### Prerequisites

*   Node.js and npm or Bun installed [26].
*   Git installed [26].
*   A Google Account for Firebase [26].
*   A Google Cloud Platform account for YouTube Data API access [26].
*   (Planned) An OpenAI API key [26, 28].
*   (Planned) TMDB or OMDB API key [26, 28].

### Getting Started

1.  **Clone the Repository:** [26]
    ```bash
    git clone https://github.com/your-username/roomsync.git
    cd roomsync
    ```
2.  **Install Dependencies:** [26]
    ```bash
    npm install
    # or
    bun install
    ```
3.  **Firebase Setup:** [26, 27]
    *   Go to the Firebase Console and create a new project [27].
    *   Enable the following Firebase services for your project: **Authentication** (choose providers like Email/Password, Google) [27], **Cloud Firestore** [27], and **Hosting** [27].
    *   In your Firebase project settings, add a web app and copy your Firebase configuration object [27].
    *   Create a `.env` file in the root of your project and add your Firebase configuration and API keys [27, 28]:
        ```dotenv
        REACT_APP_FIREBASE_API_KEY=your_api_key [27]
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain [27]
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id [27]
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket [27]
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id [27]
        REACT_APP_FIREBASE_APP_ID=your_app_id [28]
        REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id [28]
        REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key [28]
        REACT_APP_OPENAI_API_KEY=your_openai_api_key # Planned [28]
        REACT_APP_TMDB_API_KEY=your_tmdb_api_key # Planned [28]
        ```
    *   Ensure your `src/firebase/config.js` (or `.ts`) file initializes Firebase using these environment variables [6, 28].
4.  **YouTube Data API Setup:** [28]
    *   Go to the Google Cloud Console [28].
    *   Create a new project or select your Firebase project [28].
    *   Enable the "**YouTube Data API v3**" for your project [28].
    *   Create API credentials (an API key) [28]. **Restrict the API key** to your website and the YouTube Data API for security [28].
    *   Add your YouTube API key to the `.env` file as `REACT_APP_YOUTUBE_API_KEY` [28].
    *   Replace any placeholder API key in `src/services/youtubeService.ts` with `process.env.REACT_APP_YOUTUBE_API_KEY` [28].
5.  **Run Locally:** [17, 25]
    ```bash
    npm start
    # or
    bun start
    ```
    This will start the development server and open the application in your browser [25].

## Frontend Details

*   **Components:** Reusable UI elements located in `src/components/` [25]. Examples include Navbar and YoutubeSearch [25].
*   **Pages:** Components representing different routes/pages of the application located in `src/pages/` [25]. Examples include Index, Explore, Rooms, Assistant, AddMoviePage, and NotFound [25].
*   **Routing:** Handled by `react-router-dom` configured in `src/App.tsx`. Defines the mapping between URLs and components [25].
*   **State Management:** Currently using React's `useState` hook for local component state [6]. For more complex global state (user info, room data), consider using React Context, Redux, or Zustand as the project grows [6].
*   **API Calls:** Made using the Axios library [6], encapsulated within service files in `src/services/` [6].

## Backend Details (Firebase)

*   **Firebase Initialization:** The Firebase app is initialized in `src/firebase/config.js` (or `.ts`) using environment variables [6].
*   **Authentication:** Handled by Firebase Authentication SDK [6]. Provides methods for creating users, logging in, logging out, and managing user sessions [6].
*   **Firestore Database:** [22]
    *   **Data Structure:** Design your Firestore collections and documents based on your application's needs (e.g., users, rooms, movies, messages) [22].
    *   **Adding Data:** Use `addDoc` to add new documents to a collection (e.g., adding a new movie) [22].
    *   **Fetching Data:** Use `getDocs` for one-time fetches or `onSnapshot` for real-time data updates (essential for chat and synchronized playback) [22].
    *   **Queries:** Use Firestore queries to filter and order data [22].
*   **Firebase Cloud Functions (Planned):** [8] Used for server-side logic [8, 18].

## API Details

*   **YouTube Data API:** [8]
    *   **Usage:** Used in `src/services/youtubeService.ts` for `searchVideos` and `getVideoDetails` [8].
    *   **Authentication:** Requires an API key [8].
    *   **Documentation:** Refer to the official YouTube Data API documentation [8].
*   **OpenAI GPT API (Planned):** [19]
    *   **Usage:** Will be used in the AI Assistant section to interact with the GPT model for movie recommendations and chat [19].
    *   **Authentication:** Requires an API key [19].
    *   **Documentation:** Refer to the official OpenAI API documentation [19].
*   **TMDB or OMDB APIs (Planned):** [19]
    *   **Usage:** Will be used in the Movie Explorer to fetch movie information [19].
    *   **Authentication:** Requires an API key [19].
    *   **Documentation:** Refer to the official documentation for TMDB or OMDB [19].

## Database Instructions (Firestore)

*   **Collections:** [29]
    *   `users`: Stores user profiles (e.g., user ID, username, email, watch history, preferences) [29].
    *   `rooms`: Stores watch room information (e.g., room ID, name, creator, current movie, list of participants) [29].
    *   `rooms/{roomId}/messages`: A subcollection under each room document to store chat messages (e.g., sender, message content, timestamp) [29].
    *   `movies`: Stores information about movies available in the application, including those added from YouTube (e.g., movie ID, title, type, thumbnail, source platform, relevant API IDs) [29].
    *   `users/{userId}/watchHistory`: (Optional subcollection) Stores a history of movies watched by a user [29].
    *   `users/{userId}/movieLists`: (Optional subcollection) Stores user-defined categorized movie lists (e.g., Watching, Planned, Completed, Favorites, Hidden Gems, Avoided, Rewatching, Curious About) [16, 29].
*   **Data Modeling Considerations:** [30]
    *   Design your data model to minimize reads and writes where possible [30].
    *   Consider using subcollections for data that belongs to a specific document (e.g., messages within a room) [30].
    *   Think about how you will query your data to ensure efficient retrieval [30].
*   **Firestore Security Rules:** [11, 30, 31]
    *   **Crucial:** Implement Firestore security rules to control access to your data and protect against unauthorized reads and writes [11, 30, 31]. Define rules based on user authentication and data ownership (e.g., only allow users to read/write their own data or data within rooms they are part of) [30, 31]. A draft rule for movies is provided allowing read if true and write if authenticated and the document contains 'videoId' and 'title' keys [13, 20].

## Development Status & Next Steps

The core functionality of **YouTube search integration**, the **Add Movie Page**, and basic **Firestore integration** for saving movie data are **implemented** [4, 9, 11, 20]. Embedding the **IFrame Player** for the watch room is **in progress** [12, 20].

A current focus, identified as one of the **least intense parts** to tackle next, is **refining the styling and user experience (UI/UX)** of existing components like the `YoutubeSearch` component and the `AddMoviePage` [32-34]. This is a good choice because it involves less complex logic than core backend or real-time sync [32], provides immediate visual feedback [33], is somewhat independent of core functionality [33], and prepares components for later integration [33]. Specific tasks include applying the sci-fi theme, improving layout, adding visual cues (like hover effects), adding loading indicators, and ensuring basic responsiveness [35].

More complex areas like implementing the detailed **real-time sync logic** in the Watch Room [36], the **AI Movie Assistant** [36], the **Personalized Dashboard** [36], and the **Full Movie Explorer** [34] are planned for later stages.

Key areas that need **further design and implementation** include detailed UI design [31], comprehensive error handling and user feedback [31], a clear state management strategy beyond `useState` [23], robust backend logic (especially for planned features) [23], scalability considerations [23], testing [37], and a detailed deployment strategy for Cloud Functions and database rules [37]. **Firestore security rules** are crucial and need to be implemented for security [11, 30, 31].

## AI Capabilities

OpenAI GPT is integrated as your personal movie assistant [17]. It remembers your account and behavior [17]. It recommends movies by analyzing your watch history, genre preferences, and chat input [17]. It is being built as a fully-themed, interactive AI page with sci-fi backgrounds, a slideshow of titles, and voice (optional) and text input [17].

## Hosting

The application is planned to be hosted on **Firebase Hosting** [3, 27]. Real-time database updates will be delivered via Firestore listeners [3, 22]. Deployment can be done using `firebase deploy` [3].

## Future Enhancements

*   Voice chat in synchronized rooms [3].
*   Mobile app version using Flutter [3].
*   Admin dashboard for content moderation [3].
*   Social timelines, shared lists, and reactions [3].
*   Multi-language support and subtitle customization [3].

## Contributing

We welcome contributions from the community! [3]

To Contribute: [3]

1.  Fork the repository [3].
2.  Create a feature branch [3].
3.  Make your changes [3].
4.  Submit a pull request [3].

## License

MIT License © 2025 [133x-bit] [3]

## Contact

Have feedback or want to collaborate? [3]

*   📧 Email: 133scylla@gmail.com [3]
*   🌐 Website: yourdomain.com [3]

## RoomSync – “Located in the Clouds. Powered by the Crowd. Recommended by AI.”
