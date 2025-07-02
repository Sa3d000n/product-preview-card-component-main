/** @type {import('tailwindcss').Config} */
import  Flowbite  from 'flowbite-react/tailwind'
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    Flowbite.content()
  ],
    
  theme: {
    extend: {},
  },
  plugins: [Flowbite.plugin()],
}

