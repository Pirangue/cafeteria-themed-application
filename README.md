# ☕ Café & Sabor

A fun cafeteria-themed application that combines random daily food dishes with random coffee images for the ultimate coffee and food pairing experience.

## Features

- **Random Daily Combo** — Get a new food and coffee pairing with each click
- **Food of the Day** — Displays a random dish from various cuisines
- **Coffee of the Day** — Shows a beautiful random coffee image
- **Loading States** — Visual feedback while fetching data with themed messages
- **Button Feedback** — Button is disabled and shows status while loading
- **Error Handling** — Graceful error messages if images fail to load
- **Responsive Design** — Cafeteria-themed layout with split menu board

## How It Works

1. The app loads automatically on page entry with a random food and coffee combo
2. Click the **Novo Combo ✨** button to generate a new pairing
3. The app:
   - Fetches a random food image from the Foodish API
   - Fetches a random coffee image from the Coffee API
   - Displays both images side-by-side on a menu board
   - Shows loading states during the fetch process
   - Re-enables the button once both images are loaded

## UI Elements

- **Header** — Café & Sabor branding with subtitle "Seu combo aleatório do dia" (Your random combo of the day)
- **Menu Board** — Two-column layout showing food and coffee
- **Action Button** — Generate new combos with visual feedback
- **Footer** — Inspirational quote about coffee

## Technologies Used

- **HTML** — Page structure and semantic markup
- **CSS** — Cafeteria design with themed styling
- **JavaScript (ES6+)** — Async/await, Promise.all for parallel API calls, DOM manipulation

## APIs Used

- **Foodish API** — `https://foodish-api.com/api/`
- **Coffee API** — `https://coffee.alexflipnote.dev/random`

## Error Handling

- Loading states while fetching: "Preparando seu prato..." and "Passando seu café..."
- Error messages if images fail to load: "Não foi possível carregar..." (Could not load...)
- Button disabled during loading to prevent multiple simultaneous requests

---

**Enjoy your perfect coffee and food pairing! ☕🍽️**
