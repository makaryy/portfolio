/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundSize: {
                "rotating-border-size": "50% 10%, 50% 50%, 50% 70%, 50% 50%",
            },
            backgroundPosition: {
                "rotating-border-position": "0 40%, 100% 0, 100% 100%, 0 100%",
            },
            backgroundImage: {
                "rotating-border-image":
                    "linear-gradient(rgb(129 140 248), rgb(129 140 248)),linear-gradient(transparent, transparent),linear-gradient(rgb(129 140 249), rgb(129 140 249)),linear-gradient(transparent, transparent)",
            },
            animation: {
                rotate: "rotate 5s linear infinite",
                "nav-click": "nav-click 400ms linear",
                "nav-click-mobile": "nav-click-mobile 400ms linear",
                "fade-in": "fade-in 200ms linear",
                "display-text": "display-text 3s ease-in-out",
                "display-description": "display-description 4s ease-in-out",
                "move-blue-blob": "move-blue-blob 10s linear infinite",
                "move-white-blob": "move-white-blob 4s linear infinite",
            },
            keyframes: {
                rotate: {
                    "100%": { transform: "rotate(1turn)" },
                },
                "nav-click": {
                    "0%": {
                        transform: "translateX(0.25rem)",
                    },
                    "50%": {
                        transform: "translateX(.5rem)",
                    },
                    "100%": {
                        transform: "translateX(0rem)",
                    },
                },
                "nav-click-mobile": {
                    "0%": {
                        transform: "scaleY(1)",
                    },
                    "50%": {
                        transform: "scaleY(1.15)",
                    },
                    "100%": {
                        transform: "scaleY(1)",
                    },
                },
                "fade-in": {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                "display-text": {
                    "0%": {
                        transform: "translate(-30%, 0)",
                        color: "rgb(39 39 42)",
                    },
                    "100%": {
                        transform: "translate(0,0)",
                        "text-shadow": "0 25px 50px rgba(0, 0, 0, 0.75)",
                        color: "white",
                    },
                },
                "display-description": {
                    "0%": {
                        width: "100%",
                    },
                    "100%": {
                        width: "0",
                    },
                },
                "move-blue-blob": {
                    "0%": {
                        borderRadius: "50% 80% 50% 80%",
                    },
                    "25%": {
                        borderRadius: "80% 60% 60% 80%",
                    },
                    "50%": {
                        borderRadius: "80% 50% 80% 50%",
                    },
                    "75%": {
                        borderRadius: "80% 50% 50% 80%",
                    },
                    "100%": {
                        borderRadius: "50% 80% 50% 80%",
                    },
                },
                "move-white-blob": {
                    "0%": {
                        transform: "rotate(-3deg)",
                    },
                    "50%": {
                        transform: "rotate(3deg)",
                    },
                    "100%": {
                        transform: "rotate(-3deg)",
                    },
                },
            },
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                ".animation-delay-100": {
                    "animation-delay": "100ms",
                },
                ".animation-delay-200": {
                    "animation-delay": "200ms",
                },
                ".animation-delay-300": {
                    "animation-delay": "300ms",
                },
                ".animation-delay-400": {
                    "animation-delay": "400ms",
                },
                ".animation-delay-500": {
                    "animation-delay": "500ms",
                },
                ".animation-delay-600": {
                    "animation-delay": "600ms",
                },
                ".animation-delay-700": {
                    "animation-delay": "700ms",
                },
                ".animation-delay-800": {
                    "animation-delay": "800ms",
                },
                ".animation-delay-900": {
                    "animation-delay": "900ms",
                },
                ".animation-delay-1000": {
                    "animation-delay": "1000ms",
                },
                ".animation-delay-1100": {
                    "animation-delay": "1100ms",
                },
                ".animation-delay-1200": {
                    "animation-delay": "1200ms",
                },
                ".animation-delay-1300": {
                    "animation-delay": "1300ms",
                },
                ".animation-delay-1400": {
                    "animation-delay": "1400ms",
                },
                ".animation-delay-1500": {
                    "animation-delay": "1500ms",
                },
                ".animation-delay-1600": {
                    "animation-delay": "1600ms",
                },
                ".animation-delay-1700": {
                    "animation-delay": "1700ms",
                },
                ".animation-delay-1800": {
                    "animation-delay": "1800ms",
                },
                ".animation-delay-1900": {
                    "animation-delay": "1900ms",
                },
                ".animation-delay-2000": {
                    "animation-delay": "2000ms",
                },
                ".text-shadow": {
                    "text-shadow": "0 2px 4px rgba(0,0,0,0.10)",
                },

                ".text-shadow-md": {
                    "text-shadow": "0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)",
                },

                ".text-shadow-lg": {
                    "text-shadow": "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
                },
                ".text-shadow-xl": {
                    "text-shadow": "0 25px 50px rgba(0,0,0,0.75)",
                },
                ".text-shadow-none": {
                    "text-shadow": "none",
                },
            });
        }),
    ],
};
