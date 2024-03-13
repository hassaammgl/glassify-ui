import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
import css from 'rollup-plugin-css-only'

export default defineConfig({
    input: "./src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: "glassify-ui"
    },
    external: ["react", "react-dom"],
    plugins: [
        typescript({ tsconfig: "tsconfig.json" }),
        css({ output: 'bundle.css' }),
    ]
});