import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        aigcFilm: "projects/aigc-film.html",
        campusExperience: "projects/campus-experience.html",
        capabilityLearning: "projects/capability-learning.html",
        spatialVisual: "projects/spatial-visual.html",
        capabilityCet4: "projects/capability/cet4.html",
        capabilitySanxiaxiang: "projects/capability/sanxiaxiang.html",
        capabilityFutureDesigner: "projects/capability/future-designer.html",
        capabilityAiTa: "projects/capability/ai-ta.html",
        capabilityInnovationContest: "projects/capability/innovation-contest.html",
        capabilityPaper: "projects/capability/paper.html",
      },
    },
  },
});
