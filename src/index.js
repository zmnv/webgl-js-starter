import './styles/style.css';

import { initHenVariables } from './scripts/hicetnunc';
import { initializeShader } from "./scripts/shader";
import { showBanner } from './scripts/utils/banner';

function Main() {
    showBanner();

    // [hicetnunc] ––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    // Do not remove it if you want to use `creator` or `viewer` variables.
    initHenVariables();
    // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    initializeShader();
}

Main();
