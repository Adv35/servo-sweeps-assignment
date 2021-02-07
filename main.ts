input.onButtonPressed(Button.A, function () {
    maqueen.servoRun(maqueen.Servos.S1, 80)
    basic.pause(200)
    maqueen.servoRun(maqueen.Servos.S1, 0)
})
basic.forever(function () {
	
})
