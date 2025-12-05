input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 3792, 255, 0, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    led.plotBarGraph(
    1,
    5,
    true
    )
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . . . .
        . . . . .
        `)
    music.setBuiltInSpeakerEnabled(true)
    for (let index = 0; index < 5000; index++) {
    	
    }
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.LoopingInBackground)
    while (true) {
        basic.showString("Hello!")
    }
    radio.sendNumber(19)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.LoopingInBackground)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.LoopingInBackground)
    servos.P2.run(100)
    basic.showString("" + (music.stringPlayable("C5 G B A F A C5 B ", 120)))
})
basic.forever(function () {
	
})
