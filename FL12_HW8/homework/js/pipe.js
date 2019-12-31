function addOne(x) {
    return x + 1;
}

function pipe(...args) {
    let sum = arguments[0];
    for(let i = 1; i< args.length; i++){
      sum = addOne(sum);
    }
    return sum;
}

 pipe();