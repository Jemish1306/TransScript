qgccrrtye64vb335oxe52rr5ieaodh9rl1lqmypgvky3cojv




project-root/
├── client/                        # Frontend (React)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                # Images, fonts, icons
│   │   ├── components/            # Reusable React components
│   │   │   ├── Editor/
│   │   │   ├── PlaybackToolbar/
│   │   ├── context/               # Context API for state management
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── layouts/               # Page layouts
│   │   ├── pages/                 # Individual page components
│   │   │   ├── Home.js
│   │   │   └── Editor.js
│   │   ├── services/              # API services
│   │   ├── styles/                
│   │   │   ├── globals.css        # Tailwind global properties
│   │   │   ├── tailwind.config.js # Tailwind configuration
│   │   ├── App.js
│   │   ├── index.js
│   │   └── main.css               # Main CSS file
│   ├── .env                       # Environment variables
│   └── package.json
├── server/                        # Backend (Node.js)
│   ├── controllers/               # API controllers
│   ├── models/                    # Database models
│   ├── routes/                    # API routes
│   │   ├── authRoutes.js
│   │   └── editorRoutes.js
│   ├── config/                    # Configuration files (DB, authentication)
│   ├── middleware/                # Middleware functions
│   ├── utils/                     # Utility functions
│   ├── server.js                  # Main server file
│   └── package.json
├── .gitignore
└── README.md
