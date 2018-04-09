import {CHANGE_FROM_VIEW} from './action-types';

export function changeFromView(viewType){
    return {
        type: CHANGE_FROM_VIEW,
        lastView: viewType
    }
}