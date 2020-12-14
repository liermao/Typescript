/*接口*/
interface Person {
    readonly  id: number; /*readonly是作用于属性上面的，而const 是作用于变量上面的*/
    name: string;
    age?: number;/*问号代表 可有可无*/
};
let vikiong: Person = {
    name: 'liadye',
    age: 20,
    id:1
}
