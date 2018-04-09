import {typeOf, objectKeys} from './object';

export default function(){
    const args = Array.prototype.slice.call(arguments);
    const arg0 = args[0];

    if(args.length === 1 && typeOf(arg0) === 'object'){
        return objectKeys(arg0).filter( key => {
            return !!arg0[key];
        }).join(' ');
    }

    return args.filter(key =>{
        return !!key;
    }).join(' ');
}