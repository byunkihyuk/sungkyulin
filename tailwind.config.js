/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                h1: [
                    "2.25rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "3.125rem",
                    },
                ],
                "h1-m": [
                    "1.75rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "2.5625rem",
                    },
                ],
                h2: [
                    "1.875rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "2.8125rem",
                    },
                ],
                "h2-m": [
                    "1.5rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "2.25rem",
                    },
                ],
                h3: [
                    "1.375rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "2.125rem",
                    },
                ],
                "h3-m": [
                    "1.25rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "2rem",
                    },
                ],
                h4: [
                    "1.25rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "2rem",
                    },
                ],
                "h4-m": [
                    "1.125rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "1.9375rem",
                    },
                ],
                h5: [
                    "1.125rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "1.9375rem",
                    },
                ],
                "h5-m": [
                    "1rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "1.6875rem",
                    },
                ],
                h6: [
                    "1rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "1.6875rem",
                    },
                ],
                "h6-m": [
                    "0.875rem",
                    {
                        fontWeight: "bold",
                        lineHeight: "1.5625rem",
                    },
                ],
                xs: [
                    "0.75rem",
                    {
                        lineHeight: "1.125rem",
                    },
                ],
                sm: [
                    "0.875rem",
                    {
                        lineHeight: "1.5625rem",
                    },
                ],
                base: [
                    "1rem",
                    {
                        lineHeight: "1.6875rem",
                    },
                ],
                lg: [
                    "1.125rem",
                    {
                        lineHeight: "1.9371rem",
                    },
                ],
                xl: [
                    "1.25rem",
                    {
                        lineHeight: "2rem",
                    },
                ],
                "2xl": [
                    "1.5rem",
                    {
                        lineHeight: "2.25rem",
                    },
                ],
                "3xl": [
                    "1.875rem",
                    {
                        lineHeight: "2.8125rem",
                    },
                ],
                "4xl": [
                    "2.25rem",
                    {
                        lineHeight: "3.125rem",
                    },
                ],
            },
            colors: {
                primary: "#004ea2",
                secondary: "#c71514",
            },
        },
    },
    plugins: [],
};
