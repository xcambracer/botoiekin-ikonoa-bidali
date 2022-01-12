input.onButtonPressed(Button.A, function () {
    radio.sendString("pozik")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("bihotza")
})
radio.onReceivedString(function (receivedString) {
    if ("pozik" == receivedString) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            # # # # #
            `)
    }
    if ("triste" == receivedString) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if ("bihotza" == receivedString) {
        basic.showLeds(`
            # # . # #
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("triste")
})
radio.setGroup(7)
basic.forever(function () {
	
})
