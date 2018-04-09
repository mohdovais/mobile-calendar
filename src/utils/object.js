export function typeOf(o) {
    return /\[object ([a-zA-Z]+)\]/.exec(Object.prototype.toString.call(o))[1].toLowerCase();
}

export function objectKeys(o){
    if(Object.keys){
        return Object.keys(o);
    }
}
