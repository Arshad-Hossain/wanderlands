# 🌍 Wanderlands — Discover Your Next Adventure

Wanderlands is a modern travel exploration web application designed to help travelers discover destinations and plan memorable adventures. Built with Next.js, React, and Tailwind CSS, it provides a clean and engaging interface for exploring travel possibilities.

## ✨ Features

- 🧭 **Modern Landing Page** — A visually appealing interface for travel enthusiasts.
- 📍 **Destination Search UI** — Search criteria for location, city, or ZIP code.
- 📅 **Travel Planning Interface** — Options for trip duration and travel dates.
- 💰 **Budget Selection** — Choose a budget range for travel planning.
- 👥 **Group Travel** — Specify the number of travelers.
- 🎨 **Responsive Design** — Styled with Tailwind CSS.
- 🧩 **Reusable Components** — Built with React and HeroUI.

> Note: Features such as destination recommendations, booking, and advanced search depend on their implementation in the application.

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Frontend:** React
- **Styling:** Tailwind CSS
- **UI Components:** HeroUI
- **Database:** MongoDB integration dependency
- **Authentication:** Better Auth integration dependency
- **Icons:** React Icons
- **Code Quality:** ESLint

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Arshad-Hossain/wanderlands.git
```

### 2. Navigate to the project directory

```bash
cd wanderlands
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

If required by your application, create a `.env.local` file in the project root and configure the necessary environment variables for your database and authentication setup.

```env
# Add your required environment variables here
```

Do not commit secret keys, passwords, or database credentials.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Starts the development server         |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server          |
| `npm run lint`  | Checks the code using ESLint          |

## 📂 Project Structure

```text
wanderlands/
├── public/
├── src/
│   ├── app/
│   └── components/
├── package.json
├── package-lock.json
├── next.config.mjs
├── eslint.config.mjs
└── README.md
```

- `public/` — Static assets and images.
- `src/app/` — Application pages, layouts, and routes.
- `src/components/` — Reusable UI components.

## 🗺️ Future Improvements

- Destination recommendations
- Advanced search and filtering
- User authentication
- Saved destinations and personalized trips
- Travel itinerary management
- Booking integration

These are potential enhancements and may not yet be implemented.

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.

## 👨‍💻 Author

**Arshad Hossain**

- GitHub: [@Arshad-Hossain](https://github.com/Arshad-Hossain)
- Repository: [Wanderlands](https://github.com/Arshad-Hossain/wanderlands)

## 📄 License

No license has been specified yet. Add a `LICENSE` file if you intend to distribute this project under an open-source license.

---

<p align="center">
  Made with ❤️ using Next.js and React
  <br />
  <strong>Wanderlands — Your next adventure starts here.</strong>
</p>
