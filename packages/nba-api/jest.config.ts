/* eslint-disable */
export default {
    coverageDirectory: '../../coverage/packages/nba-api',
    displayName: 'nba-api',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    preset: '../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]sx?$': 'ts-jest',
    },
};
