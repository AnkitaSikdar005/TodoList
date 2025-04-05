# 📋 Todo App

A simple and clean Todo App built using **React (Vite)**, **TailwindCSS v4.1**, and **React Icons**.

---

## 🛠️ Installation and Setup

Follow these steps to set up the project locally:

---

### 1. Create a New React + Vite Project

First, install `tailwindcss` and `@tailwindcss/vite` via npm:
```bash
npm install tailwindcss @tailwindcss/vite
```
### 2.Configure the Vite Plugin
```bash
 // vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```
### Note: Make sure both react() and tailwindcss() are inside the plugins array.
### 3.Create and Configure Tailwind Input File
Inside your src/index.css, add the Tailwind directives:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
#### This tells Tailwind to inject its styles into your project.
### 4. Install React Icons
Install React Icons to use a wide variety of icons:
```bash
npm install react-icons
```
### 5.Start Your Development Server
Run the development server:
```bash
 npm run dev
```
## 🌟 Tech Stack

| Technology  | Description                     | Links |
| :---------- | :------------------------------- | :---- |
| React (Vite) | Frontend Framework + Bundler     | [Vite](https://vitejs.dev/) |
| TailwindCSS v4.1 | Utility-first CSS Framework | [TailwindCSS](https://tailwindcss.com/) |
| React Icons | Popular Icon Library for React   | [React Icons](https://react-icons.github.io/react-icons/) |

## ✨ Features

- **Add New Todos**: Easily add new tasks to your todo list.
- **Mark Todos as Completed**: Click to mark tasks as completed and stay organized.
- **Delete Todos**: Remove tasks that are no longer needed.
- **Responsive and Clean UI**: Enjoy a beautiful interface across all devices.



