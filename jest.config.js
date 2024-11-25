module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/tests'], // Incluye "src" y "tests" como raíces de búsqueda
    testMatch: ['**/__tests__/**/*.+(js|jsx)', '**/?(*.)+(spec|test).+(js|jsx)'], // Archivos permitidos
    moduleFileExtensions: ['js', 'jsx'], // Extensiones de archivos que Jest reconoce
    testEnvironment: 'jsdom', // Necesario para pruebas en React
  };
  