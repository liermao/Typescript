let numberString: number | string; // 联合类型
numberString = 'abc';
numberString = 10

function getLength(input: number | string): number {
    const str = input as string;
    if (str.length) {
        return str.length;
    } else {
        const number = input as number;
        return number.toString().length;
    }
}

// type guard
function getLength2(input: number | string): number {
   if(typeof input==='string'){
       return input.length;
   }else{
       return input.toString().length
   }
}
