# 🎥 RoomSync – Social Movie Rooms + AI Movie Assistant

Welcome to RoomSync, a sci-fi-styled, AI-powered movie web app where users can create watch rooms, explore films, and receive intelligent, personalized recommendations — all backed by Firebase.

🚀 “Your movies, your friends, your AI. All in sync.”

## 🧹 Key Features

### 👥 Watch Rooms
- Create or join synchronized movie watch rooms
- Chat live with friends
- Vote on the next movie to watch
- Privacy controls: Public, Invite-Only, or Private

### 🧠 AI Movie Assistant (Movie-GPT)
- Smart movie chatbot powered by OpenAI
- Understands genre, mood, actor, or story-based prompts
- Greets users upon login using their name
- Learns from movies watched and genres liked
- Recommends films based on personal watch behavior
- Allows adding movies to categorized lists:
  - Watching
  - Planned
  - Completed
  - Favorites
  - Hidden Gems
  - Avoided
  - Rewatching
  - Curious About

#### AI Section UI:
- Full-page, immersive sci-fi theme
- Flashy animated backgrounds
- Interactive slideshow of suggested movies
- Themed icons and futuristic design elements
- Voice + text interaction support

### 🌌 Personalized Dashboard
- Tracks your watch activity
- Displays viewing trends, preferences, and stats
- Manage your lists, room history, and profile

### 🎬 Movie Explorer
- Browse movies by genre, actor, release year, or vibe
- Powered by TMDB or OMDB APIs
- “Ask AI About This Movie” button on movie details

## 🧱 Tech Stack
- **Frontend**: React + HTML/CSS/JS
- **Backend**: Firebase Cloud Functions
- **AI Layer**: OpenAI GPT API
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth

## 📁 Project Structure
/roomsync/ ├── public/ │ └── index.html ├── src/ │ ├── components/ │ ├── pages/ │ ├── ai/ │ └── App.js ├── firebase/ │ ├── functions/ │ └── config.js ├── .env ├── README.md └── package.json

Code

## ⚙️ Getting Started

### Clone the Repository

git clone https://github.com/your-username/roomsync.git
cd roomsync
Install Dependencies

npm install

Firebase Setup
Create a Firebase project: Firebase Console
Enable the following:
Authentication
Cloud Firestore
Hosting
Add a .env file in the root directory with your config:
env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_OPENAI_KEY=your_openai_api_key
Run Locally
bash
npm run start
🧠 AI Capabilities
OpenAI GPT integrated as your personal movie assistant
Remembers your account and behavior
Recommends movies by analyzing your:
Watch history
Genre preferences
Chat input
Built as a fully-themed, interactive AI page with:
Sci-fi backgrounds
Slideshow of titles
Voice (optional) and text input
📡 Hosting
Hosted on Firebase Hosting
Real-time database updates via Firestore listeners
Deployment:
bash
firebase deploy
✨ Future Enhancements
Voice chat in synchronized rooms
Mobile app version using Flutter
Admin dashboard for content moderation
Social timelines, shared lists, and reactions
Multi-language support and subtitle customization
🤝 Contributing
We welcome contributions from the community!

To Contribute:
Fork the repository
Create a feature branch
Make your changes
Submit a pull request
🛡 License
MIT License © 2025 [133x-bit]

💬 Contact
Have feedback or want to collaborate?

📧 Email: 133scylla@gmail.com
🌐 Website: yourdomain.com

RoomSync – “Located in the Clouds. Powered by the Crowd. Recommended by AI.”
