/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#A72211",
        active_navbar: "#2189B7",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
        archivo: ['Archivo', 'sans'],
        librebaskerville: ['LibreBaskerville', 'serif'],
        leaguespartan: ['League Spartan', 'sans'],
      },
      screens: {
        '320': '320px',
        '375': '375px',
        '425': '425px',
        '768': '768px',
        '1024': '1024px',
        '1440': '1440px',
        '2xl': '2560px',
        "3xxlg": "1928px",
        "2xxlg": "1700px",
        '1024': '1023px',
        xxlg: "1500px",
        "2lg": "1100px",
        slg: "1000px",
        lgMd: "900px",
        smMd: "840px",
        xs: "550px",
        xxs: "400px",
        "2xxsl": "300px",
      },
    },
  },
  plugins: [],
};
