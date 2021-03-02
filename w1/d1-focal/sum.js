const args = process.argv.slice(2);

let sumTotal = 0;

/*
for (i = 0; i < args.length; i++) {
    args[i] = Number(args[i]);
    sumTotal += args[i];
}
*/

function sumFunction(num) {
    num = Number(num);
    sumTotal += num;
}

args.forEach(sumFunction);


console.log(sumTotal);
