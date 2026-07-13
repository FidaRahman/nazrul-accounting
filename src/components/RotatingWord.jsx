// src/components/RotatingWord.jsx
// Cycles a word inside a headline. An invisible sizer holds the width of the
// longest word so the line never jumps as words swap.
import { useEffect, useState } from 'react'

export default function RotatingWord({ words, interval = 2400, className = '' }) {
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return // hold on the first word, no cycling

    setAnimate(true)
    const id = setInterval(() => {
      setIndex((n) => (n + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '')

  return (
    <span className={`relative inline-grid text-left align-bottom ${className}`}>
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longest}
      </span>
      <span
        key={index}
        className={`col-start-1 row-start-1 whitespace-nowrap text-gold ${animate ? 'animate-word' : ''}`}
      >
        {words[index]}
      </span>
    </span>
  )
}