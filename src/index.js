import { removeFillableElements } from './remove';
import { thunks } from './jsfcore';

function addRemove() {
    const element = document.createElement('button');
    element.innerHTML = 'remove';
    element.addEventListener('click', () => thunks.remove());
    return element;
}

function addRemoveFillableElements() {
    const element = document.createElement('button');
    element.innerHTML = 'removeFillableElements';
    element.addEventListener('click', () => removeFillableElements());
    return element;
}

function addSetActiveElement() {
    const element = document.createElement('button');
    element.innerHTML = 'addSetActiveElement';
    element.addEventListener('click', () => thunks.setActiveElement());
    return element;
}

document.body.appendChild(addRemove());
document.body.appendChild(addRemoveFillableElements());
document.body.appendChild(addSetActiveElement());