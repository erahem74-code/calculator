function manualCalculate(expression) {

    let tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokens) return "";

    let i = 0;
    while (i < tokens.length) {
        if (tokens[i] === '*' || tokens[i] === '/') {
            let prev = parseFloat(tokens[i - 1]);
            let next = parseFloat(tokens[i + 1]);
            let res = (tokens[i] === '*') ? prev * next : prev / next;
            
            tokens.splice(i - 1, 3, res);
            i = 0; 
        } else {
            i++;
        }
    }

    let result = parseFloat(tokens[0]);
    for (let j = 1; j < tokens.length; j += 2) {
        let op = tokens[j];
        let nextNum = parseFloat(tokens[j + 1]);
        
        if (op === '+') result += nextNum;
        if (op === '-') result -= nextNum;
    }

    return result;
}