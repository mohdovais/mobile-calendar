import {CHANGE_FROM_VIEW} from './action-types';

function changeFrom(prevState, lastView){
    switch (lastView) {
        case "month":
            return Object.assign({}, prevState, {
                viewType: "year",
                navButtonLabel: "Select Year"
            });
        case "year":
            return Object.assign({}, prevState, {
                viewType: "years",
                navButtonLabel: "Today"
            });
        default:
            let now = new Date();
            return Object.assign({}, prevState, {
                viewType: "month",
                navButtonLabel: prevState.year,            
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