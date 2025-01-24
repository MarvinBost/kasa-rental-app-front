import type {Config} from "jest";

const config: Config = {
  preset: "ts-jest/presets/default", // Utilisation de ts-jest pour le support de TypeScript
  testEnvironment: "jsdom", // Si tu fais du test front-end
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Utilisation de ts-jest pour transformer les fichiers .ts et .tsx
  },
  moduleFileExtensions: ["ts", "tsx", "js"], // Extensions à supporter
  globals: {},
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Indique que .ts et .tsx sont des modules ESM
  setupFiles: ["./jest.setup.ts"], // Ajoutez cette ligne pour inclure le fichier de setup
};

export default config;
