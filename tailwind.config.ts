import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Marginfy brand colours
        brand: {
          blue: {
            50:  "#EEF1FB",
            100: "#D5DBF5",
            200: "#ABB8EC",
            300: "#7F94E2",
            400: "#5B73DA",
            500: "#3D55D6", // PRIMARY — "margin" blue
            600: "#3347C2",
            700: "#2A3AAD",
            800: "#222E8A",
            900: "#1A2468",
            950: "#111849",
          },
          teal: {
            50:  "#EAFAF5",
            100: "#C8F2E3",
            200: "#97E6CB",
            300: "#65D9B3",
            400: "#3ECBA0", // ACCENT — "fy" teal
            500: "#2EB88E",
            600: "#229673",
            700: "#1A745A",
            800: "#125241",
            900: "#0A3129",
          },
          navy: "#1A2468",
          dark: "#111849",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
        body:    ["var(--font-karla)", "ui-sans-serif", "system-ui"],
        sans:    ["var(--font-karla)", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in":        "fade-in 0.5s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            lineHeight: "1.8",
            fontFamily: "var(--font-karla)",
            h1: { color: "#1A2468", fontWeight: "700", fontFamily: "var(--font-poppins)" },
            h2: { color: "#1A2468", fontWeight: "700", fontFamily: "var(--font-poppins)" },
            h3: { color: "#3D55D6", fontWeight: "600", fontFamily: "var(--font-poppins)" },
            a:  { color: "#3D55D6", textDecoration: "none" },
            strong: { color: "#1A2468" },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
