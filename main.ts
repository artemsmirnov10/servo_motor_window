function servo_motor_window (angle: number) {
    pins.servoWritePin(AnalogPin.P9, angle)
}
basic.forever(function () {
	
})
