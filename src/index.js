import './styles/style.css';

import { initHenVariables } from '@scripts/hicetnunc';
import { initializeShader } from "@scripts/shader";
import { showBanner } from '@utils/banner';

function Main() {
    showBanner();

    initHenVariables();
    initializeShader();
}

Main();
