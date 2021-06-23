  const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

  const keys = document.querySelectorAll('.key')
  const whiteKeys = document.querySelectorAll('.key.white')
  const blackKeys = document.querySelectorAll('.key.black')

  keys.forEach(key => {
      key.addEventListener('click', () => playNote(key))
  })

  document.addEventListener('keydown', e => {
      if (e.repeat) return
      const key = e.key
      const whiteKeyIndex = WHITE_KEYS.indexOf(key)
      const blackKeyIndex = BLACK_KEYS.indexOf(key)

      if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
      if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
  })

  function playNote(key) {
      const noteAudio = document.getElementById(key.dataset.note)
      noteAudio.currentTime = 0
      noteAudio.play()
      key.classList.add('active')
      noteAudio.addEventListener('ended', () => {
          key.classList.remove('active')
      })
  }
  // Color Change
  var color = [
      "linear-gradient(118deg, rgba(134,62,42,1) 19%, rgba(217,142,122,1) 50%, rgba(92,36,20,1) 81%)",
      "linear-gradient(118deg, rgba(187,125,81,1) 6%, rgba(191,125,79,1) 26%, rgba(208,152,113,1) 48%, rgba(179,116,71,1) 65%)",
      "linear-gradient(118deg, rgba(208,158,101,1) 20%, rgba(255,224,188,1) 50%, rgba(213,162,105,1) 80%)",
      "linear-gradient(118deg, rgba(227,104,127,1) 20%, rgba(255,161,179,1) 51%, rgba(230,105,130,1) 80%",
      "linear-gradient(118deg, rgba(135,198,255,1) 20%, rgba(205,231,255,1) 50%, rgba(135,198,255,1) 80%)",
      "linear-gradient(118deg, rgba(255,123,242,1) 20%, rgba(255,214,251,1) 50%, rgba(255,123,242,1) 80%)",
      "linear-gradient(118deg, rgba(46,131,100,1) 20%, rgba(91,247,190,1) 50%, rgba(46,131,100,1) 80%)",
      "linear-gradient(118deg, rgba(23,76,114,1) 20%, rgba(41,157,241,1) 50%, rgba(23,76,114,1) 80%)",
      "linear-gradient(118deg, rgba(42,29,20,1) 20%, rgba(219,133,73,1) 50%, rgba(42,29,20,1) 80%)",
      "linear-gradient(118deg, rgba(130,102,187,1) 20%, rgba(203,178,255,1) 50%, rgba(130,102,187,1) 80%)",
      "linear-gradient(0deg, rgba(16,10,51,1) 27%, rgba(13,54,95,1) 48%, rgba(8,111,153,1) 100%, rgba(0,212,255,1) 100%)",
      "linear-gradient(to bottom, rgb(76,76,76) 0%,rgb(89,89,89) 10%,rgb(102,102,102) 19%,rgb(56,56,56) 36%,rgb(0,0,0) 74%,rgb(19,19,19) 100%)"
  ];
  var i = 0;
  document.querySelector("#switch").addEventListener("click", () => {
      i == color.length - 1 ? i = 0 : i = i + 1;
      document.querySelector(".board").style.background = color[i]
  })