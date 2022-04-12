module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundSize: {
                "rotating-border-size": "50% 10%, 50% 50%, 50% 70%, 50% 50%",
            },
            backgroundPosition: {
                "rotating-border-position": "0 50%, 100% 0, 100% 100%, 0 100%",
            },
            backgroundImage: {
                "rotating-border-image":
                    "linear-gradient(rgb(129 140 248), rgb(129 140 248)),linear-gradient(transparent, transparent),linear-gradient(rgb(129 140 249), rgb(129 140 249)),linear-gradient(transparent, transparent)",
            },
            animation: {
                rotate: "rotate 5s linear infinite",
                "nav-click": "nav-click 400ms linear",
                "fade-in": "fade-in 200ms linear",
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
                "fade-in": {
                    "0%": "opacity: 0",
                    "100%": "opacity: 1",
                },
            },
        },
    },
    plugins: [],
};
