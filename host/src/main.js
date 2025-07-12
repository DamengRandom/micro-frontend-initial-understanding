import { mount as mountHeader } from '../../apps/header/dist/header.js';
import { mount as mountTrending } from '../../apps/trending/dist/trending.js';

mountHeader(document.querySelector('#header'));
mountTrending(document.querySelector('#trending'));

console.log("File get rendered????");