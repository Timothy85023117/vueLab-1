export function filterArraySearch(pattern,data){
    let rule = new RegExp(`${pattern}`,"g");
    let value = data
    let out = value.filter((elem, index)=> rule.test(elem));
    return out
}