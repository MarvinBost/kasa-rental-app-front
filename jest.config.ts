import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default', // Utilisation de ts-jest pour le support de TypeScript
  testEnvironment: 'jsdom', // Si tu fais du test front-end
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Utilisation de ts-jest pour transformer les fichiers .ts et .tsx
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'], // Extensions à supporter
  globals: {},
  extensionsToTreatAsEsm: ['.ts', '.tsx'], // Indique que .ts et .tsx sont des modules ESM
  setupFiles: ['./jest.setup.ts'], // Ajoutez cette ligne pour inclure le fichier de setup
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};

export default config;
