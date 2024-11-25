module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/tests'], // Directorios donde buscar pruebas
    testMatch: ['**/__tests__/**/*.+(js|jsx)', '**/?(*.)+(spec|test).+(js|jsx)'], // Patrones para los archivos de prueba
    collectCoverage: true, // Activa la recolección de cobertura
    coverageDirectory: 'coverage', // Directorio donde se guardará la cobertura
    coverageReporters: ['lcov', 'text', 'html'], // Formatos de reporte de cobertura
    testEnvironment: 'jsdom', // Entorno de pruebas
  };
  