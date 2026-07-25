let jarak = 0
basic.forever(function () {
    jarak = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(jarak)
    basic.pause(500)
})
