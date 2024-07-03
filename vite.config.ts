import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const ReactCompilerConfig = {
    /* ... */
};

export default defineConfig(() => {
    return {
        plugins: [
            react({
                babel: {
                    plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
                },
            }),
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src/"),
                components: `${path.resolve(__dirname, "./src/components/")}`,
                public: `${path.resolve(__dirname, "./public/")}`,
                pages: path.resolve(__dirname, "./src/pages"),
                types: `${path.resolve(__dirname, "./src/types")}`,
            },
        },
        // ...
    };
});
