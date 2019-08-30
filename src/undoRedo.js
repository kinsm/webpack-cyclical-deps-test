import { thunks } from './jsfcore';

export function divideUndoRedo () {
    console.log('divideUndoRedo');
    thunks.setActiveElement();
}
