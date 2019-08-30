import { divideUndoRedo } from './undoRedo';

const remove = () => {
    console.log('remove');
};

export const removeFillableElements = () => {
    divideUndoRedo();
    console.log('removeFillableElements');
};

export default remove;
