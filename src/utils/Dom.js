
export function getDomData(el, name){
    const attribute = el.attributes[`data-${name}`];
    return attribute && attribute.value;
}