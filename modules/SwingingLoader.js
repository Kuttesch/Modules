/**
 * This module can be used to generate a loader with the given parameters.
 * It is designed to be used as a module in a larger project.
 * 
 * @Usage
 * Import this module in your main script and call the main function with the required parameters.
 * 
 * @Example
 * import {main} from './script.js';
 * main(20,'loader-container','#000000',50,90,3);
 * 
 * For a look at a example implementation, refer to www.github.com/TODO: Add the link to the project
 */

/**
 * This acts as the main function for the loader generation
 * It takes the parameters given by the main script and generates the loader for it.
 * 
 * @param {Number} numOfDots_main 
 * @param {DivId} containerId_main 
 * @param {HEXColor} colorOfDot_main 
 * @param {NumberInPX} width_main 
 * @param {NumberInPX} radius_main 
 * @param {TimeInSec} durationOfAnimation_main 
 */
function main(numOfDots_main, containerId_main, colorOfDot_main, width_main, radius_main, durationOfAnimation_main) {
    const numOfDots = numOfDots_main;
    const containerId = containerId_main;
    const colorOfDot = colorOfDot_main;
    const width = width_main;
    const radius = radius_main;
    const durationOfAnimation = durationOfAnimation_main;

    for (let currentDotIndex = 0; currentDotIndex < numOfDots; currentDotIndex++) {
        createDot(containerId, currentDotIndex, colorOfDot, width, radius, durationOfAnimation);
    }
}

/**
 * This function creates a single dot for the loader, adds the required styles and animations to it and appends it to the container.
 * It also calls the function to add the required keyframes to the stylesheet.
 * 
 * @param {DivId} containerId 
 * @param {Number} currentDotIndex 
 * @param {HEXColor} colorOfDot 
 * @param {NumberInPX} width 
 * @param {NumberInPX} radius 
 * @param {TimeInSec} durationOfAnimation 
 */
function createDot(containerId, currentDotIndex, colorOfDot, width, radius, durationOfAnimation) {
    const container = document.getElementById(containerId);
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.classList.add('dot-' + currentDotIndex);
    addAnimation(currentDotIndex);
    addStyle(dot, colorOfDot, width, radius, currentDotIndex, durationOfAnimation);
    container.appendChild(dot);
}

/**
 * This function adds the required styles to the dot.
 * 
 * @param {Div} dot 
 * @param {HEXColor} colorOfDot 
 * @param {NumberInPX} width 
 * @param {NumberInPX} radius 
 * @param {Number} currentDotIndex 
 * @param {TimeInSec} durationOfAnimation 
 */
function addStyle(dot, colorOfDot, width, radius, currentDotIndex, durationOfAnimation) {
    dot.style.backgroundColor = colorOfDot;
    dot.style.width = width + 'px';
    dot.style.height = width + 'px';
    dot.style.borderRadius = '50%';
    dot.style.position = 'absolute';
    dot.style.transform = 'translate(0,' + radius + 'px)';
    dot.style.zIndex = currentDotIndex;
    dot.style.animation = 'loader-' + currentDotIndex + ' ' + durationOfAnimation + 's infinite';
    console.log(dot);
}

/**
 * This function adds the required keyframes to the stylesheet.
 * 
 * @param {Number} currentDotIndex 
 */
function addAnimation(currentDotIndex) {
    const currentRotation = 160 - (currentDotIndex * 5);
    const keyframes = `
    @keyframes loader-${currentDotIndex} {
        25% {
            rotate:${currentRotation}deg;
            animation-timing-function: ease-out;
        }
        75% {
            rotate:-${currentRotation}deg;
            animation-timing-function: ease-in;
        }
    }`;
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    console.log('added keyframes');
    console.log(styleSheet.cssRules);
}

/**
 * Exporting the main function to be used in scripts.
 */
export { main as SwingingLoader };