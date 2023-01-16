import { boxScoreSummaryV2 } from '@laboratory/nba-api';

const gameId = '0022200653';
console.log('bleh');

const run = async (): Promise<void> => {
    console.log('hello');
    const rawResponse = await boxScoreSummaryV2(gameId);

    console.log('NBA API response:');
    console.log(rawResponse);
};

run();
