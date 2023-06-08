function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    var fn = fn2;
    return fn;
}

function fn2(){
    return
}
    
function returnsAnAnonymousFunction(){
    return () => {}
}
