import { useState } from 'react';

/**
 * 获取滚动值
 * @returns [y] 
 */
export default function useWindowScroll() {
  const [y, sety] = useState(0)
  // 在滚动发生的时候，不断获取滚动值，交给y
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    sety(h)
  })
  return [y]
}