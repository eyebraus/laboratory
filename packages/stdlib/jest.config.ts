/* eslint-disable */
export default {
    coverageDirectory: '../../coverage/packages/stdlib',
    displayName: 'stdlib',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
        },
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    preset: '../../jest.preset.js',
    transform: {
        '^.+\\.[tj]s$': 'ts-jest',
    },
};
