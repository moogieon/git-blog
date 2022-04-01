import React, { useState, useEffect } from 'react'

const TypingText: React.FC = () => {
  const txt = 'Lee Chang Mook'
  const [Text, setText] = useState('')
  const [Count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]) // 이전 set한 문자 + 다음 문자
      setCount(Count + 1) // 개수 만큼 체크
    }, 300)
    if (Count > txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      setCount(0)
      setText('')
      clearInterval(interval) // 문자열 체크를 통해 setInterval을 해제합니다
    }
    return () => clearInterval(interval) // 언마운트시 setInterval을 해제합니다
  })

  return (
    <p className="md:text-sm">
      <span className="font-pay font-bold">
        {Text}..
        <span className="blink font-sans font-normal">|</span>
      </span>
    </p>
  )
}

export default TypingText
