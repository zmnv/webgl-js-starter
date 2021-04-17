import { getRandomNumber } from './utils';

const creatorFromUrl = new URLSearchParams(window.location.search).get("creator");
const viewerFromUrl = new URLSearchParams(window.location.search).get("viewer");

const creator = creatorFromUrl;
const viewer = (viewerFromUrl === 'false' || !viewerFromUrl) ? `spectator_${getRandomNumber()}` : viewerFromUrl;

window.hen = {
    creator,
    viewer,
};

console.log('window', window.hen);
