function echo<T>(arg: T): T {
    return arg;
}

const result = echo('str')

function swap<t, u>(tuple: [t, u]): [u, t] {
    return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])
function echoWithArr<T>(arg: T): T {
    console.log(arg)
    return arg
}

// 上例中，泛型 T 不一定包含属性 length，我们可以给他传入任意类型，当然有些不包括 length 属性，那样就会报错

interface IWithLength {
    length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

echoWithLength('str')
const result3 = echoWithLength({length: 10})
const result4 = echoWithLength([1, 2, 3])



// class Queue {
//     private data = [];
//     push(item) {
//         return this.data.push(item)
//     }
//     pop() {
//         return this.data.shift()
//     }
// }
//
// const queue = new Queue()
// queue.push(1)
// queue.push('str')
// console.log(queue.pop().toFixed())
// console.log(queue.pop().toFixed())

//在上述代码中存在一个问题，它允许你向队列中添加任何类型的数据，当然，当数据被弹出队列时，也可以是任意类型。在上面的示例中，看起来人们可以向队列中添加string 类型的数据，但是那么在使用的过程中，就会出现我们无法捕捉到的错误，

class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}
const queue = new Queue<number>()

//泛型和 interface
interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: "str"}
let kp2: KeyPair<string, number> = { key: "str", value: 123}
