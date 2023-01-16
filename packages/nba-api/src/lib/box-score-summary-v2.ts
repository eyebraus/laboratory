import { get } from 'node:https';

export const boxScoreSummaryV2 = async (gameId: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const url = `https://stats.nba.com/stats/boxscoresummaryv2?GameID=${gameId}`;

        get(
            url,
            {
                headers: {
                    Host: 'stats.nba.com',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0',
                    Accept: 'application/json, text/plain, */*',
                    'Accept-Language': 'en-US,en;q=0.5',
                    'Accept-Encoding': 'utf-8',
                    'x-nba-stats-origin': 'stats',
                    'x-nba-stats-token': 'true',
                    Connection: 'keep-alive',
                    Referer: 'https://stats.nba.com/',
                    Pragma: 'no-cache',
                    'Cache-Control': 'no-cache',
                },
            },
            (res) => {
                let content = '';

                res.on('data', (chunk) => {
                    content += chunk;
                });

                res.on('end', () => {
                    resolve(content);
                });
            },
        ).on('error', (e) => {
            reject(e);
        });
    });
};
