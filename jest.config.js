module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/tests'], // Incluye las carpetas src y tests como raíces
    testMatch: [
      '**/__tests__/**/*.+(js|jsx|ts|tsx)', // Busca archivos en carpetas __tests__ (si las usas)
      '**/?(*.)+(spec|test).+(js|jsx|ts|tsx)', // Coincide con archivos que terminen en .test o .spec
    ],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Usa babel-jest para transformar archivos JS/JSX
    },
    testEnvironment: 'jsdom', // Configuración para pruebas de React
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Extensiones soportadas
  };
  