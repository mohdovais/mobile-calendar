import {CHANGE_FROM_VIEW} from './action-types';

function changeFrom(prevState, lastView){
    switch (lastView) {
        case "month":
            return Object.assign({}, prevState, {
                viewType: "year"
            });
        case "year":
            return Object.assign({}, prevState, {
                viewType: "years"
            });
        default:
            let now = new Date();
            return Object.assign({}, prevState, {
                viewType: "month",
                month: now.getMonth(),
                year: now.getFullYear()
            });
    }
}


export default function(previousState, action){

    switch(action.type){
        case CHANGE_FROM_VIEW:
            return changeFrom(previousState, action.lastView);
        default:
            return previousState;
    }

}