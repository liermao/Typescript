/*函数*/

/*约定返回的数据  申明试写法*/
function add(x: number, y: number, z?: number): number {
    if (typeof z === "number") {
        return x + y + z
    } else {
        return x + y
    }
}

/*函数式写法*/
const add2 = (x: number, y: number, z?: number): number => {
    if (typeof z === "number") {
        return x + y + z
    } else {
        return x + y
    }
}

let add3: iSum = add2

interface iSum {
    (x: number, y: number, z?: number): number
}
