function left_up45 () {
    magicbit.MotorRun(magicbit.Motors.M1, 0)
    magicbit.MotorRun(magicbit.Motors.M2, -100)
    magicbit.MotorRun(magicbit.Motors.M3, 0)
    magicbit.MotorRun(magicbit.Motors.M4, 100)
}
function right_down45 () {
    magicbit.MotorRun(magicbit.Motors.M1, 100)
    magicbit.MotorRun(magicbit.Motors.M2, 0)
    magicbit.MotorRun(magicbit.Motors.M3, -100)
    magicbit.MotorRun(magicbit.Motors.M4, 0)
}
function left_down45 () {
    magicbit.MotorRun(magicbit.Motors.M1, 0)
    magicbit.MotorRun(magicbit.Motors.M2, 100)
    magicbit.MotorRun(magicbit.Motors.M3, 0)
    magicbit.MotorRun(magicbit.Motors.M4, -100)
}
function right_up45 () {
    magicbit.MotorRun(magicbit.Motors.M1, -100)
    magicbit.MotorRun(magicbit.Motors.M2, 0)
    magicbit.MotorRun(magicbit.Motors.M3, 100)
    magicbit.MotorRun(magicbit.Motors.M4, 0)
}
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    right_up45()
    basic.pause(1000)
    right_down45()
    basic.pause(2000)
    right_up45()
    basic.pause(1000)
    left_down45()
    basic.pause(1000)
    left_up45()
    basic.pause(2000)
    left_down45()
    basic.pause(1000)
})
