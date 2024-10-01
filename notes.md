`<>` sono i frammenti di di react vengono letti ma non reinderizzati.

`class` è una parola chiave in javascript per questo motivo non la possiamo mettere negli elementi in html ma dovremo usare al suo posto `className`.

Anche per quanto riguarda le img, è necessario scrivere sempre l`alt` altrimenti avremo errore.

In React `{}` indicano qua dentro scrivo del codice js, le `{{}}` indicano questo è un oggetto

importante sapere che con react anche le classi css possono essere dinamiche, quindi in base al valore di un elemento è possibile applicare un determinato attributo css.

className={`box ${home < 5 ? "rounded":""}`}
se il valore di home è minore di 5 allora applica rounded altrimenti non fare nulla.

istallazione di `Tailwind`
- Install Tailwind CSS with Vite
- `npm install -D tailwindcss postcss autoprefixer`
  `npx tailwindcss init -p`
- in tailwing.config.js
                    /** @type {import('tailwindcss').Config} */
                    export default {
                    `ADD THIS PART
                      content: [
                        "./index.html",
                        "./src/**/*.{js,ts,jsx,tsx}",
                      ],
                      `
                      theme: {
                        extend: {},
                      },
                      plugins: [],
                    }
- in index.css add 
                    @tailwind base;
                    @tailwind components;
                    @tailwind utilities; 
                            oppure
                    @import "tailwindcss/base";
                    @import "tailwindcss/components";
                    @import "tailwindcss/utilities";