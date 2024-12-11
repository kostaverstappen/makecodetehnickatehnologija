let hand = 0
input.onButtonPressed(Button.A, function () {
    hand = randint(0, 10)
    if (hand == 1) {
        basic.showNumber(1)
    }
    if (hand == 2) {
        basic.showNumber(2)
    }
    if (hand == 3) {
        basic.showNumber(3)
    }
    if (hand == 4) {
        basic.showNumber(4)
    }
    if (hand == 5) {
        basic.showNumber(5)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1e+21; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 999909999999999900000; index++) {
        basic.showString("STANI")
        basic.pause(5000)
        basic.showString("Pripremi se")
        basic.pause(1000)
        basic.showString("Kreni")
        basic.pause(5000)
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
