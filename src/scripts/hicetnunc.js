import { getRandomNumber } from './utils/getRandom';

export function initHenVariables() {

    const creatorFromUrl = new URLSearchParams(window.location.search).get("creator");
    const viewerFromUrl = new URLSearchParams(window.location.search).get("viewer");

    const creator = creatorFromUrl;
    const viewer = (viewerFromUrl === 'false' || !viewerFromUrl) ? `spectator_${getRandomNumber()}` : viewerFromUrl;

    window.hen = {
        creator,
        viewer,
    };

    if (process.env.NODE_ENV === 'development') {
        console.log('[DEV] Simulated:', window.hen);
        console.log('[DEV] Now you can use global defined variable: %c%s', 'color: blue', 'window.hen.viewver')
        console.log('');
    }
}

