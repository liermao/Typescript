enum Direction {
    up = 10,
    dOWM,
    left,
    right,
}

console.log(Direction.up)
console.log(Direction[0])

enum Direction1 {
    up = 'up',
    dOWM = 'down',
    left = 'left',
    right = 'right',
}

const value = 'up'
if (value == Direction1.up) {
    console.log('goUp')
}
