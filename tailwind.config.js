/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#eff5fa",
        "primary-500": "#3b82f6",
        "neutral-just-white": "#fff",
        "neutral-200": "#e2e8f0",
        "primary-50": "#eff6ff",
        gainsboro: {
          "100": "#d9e3db",
          "200": "#d6dee6",
          "300": "#d9dbe0",
        },
        "neutral-100": "#f1f5f9",
        "neutral-400": "#94a3b8",
        "neutral-500": "#64748b",
        "neutral-800": "#1e293b",
        "neutral-950": "#020617",
        "neutral-900": "#0f172a",
        "primary-600": "#2563eb",
        "neutral-600": "#475569",
        "success-50": "#f0fdf5",
        "danger-50": "#fef2f2",
        "green-500": "#35bb5d",
        forestgreen: {
          "100": "#1ca145",
          "200": "rgba(28, 161, 69, 0.09)",
        },
        "primary-300": "#93c5fd",
        "primary-400": "#60a5fa",
        "neutral-700": "#334155",
        "green-50": "#f1fcf4",
        "green-600": "#259446",
        "gray-950": "#030712",
        "secondary-600": "#862af3",
        "secondary-500": "#9742ff",
        darkslategray: "#292d32",
      },
      spacing: {
        boundvariablesdata3: "8px",
        boundvariablesdata4: "12px",
        boundvariablesdata6: "16px",
        boundvariablesdata7: "26px",
      },
      fontFamily: {
        "regular-normal-regular": "Inter",
      },
      borderRadius: {
        sm: "14px",
        "17xl": "36px",
        boundvariablesdata: "14px",
        boundvariablesdata5: "36px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "3xs": "10px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
