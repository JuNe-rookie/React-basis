import { useState, useEffect } from 'react'

/**
 * 1.message可以通过自定义传入默认初始值
 * 2.每次修改message数据的时候，都会自动往本地同步一份
 * @returns [message, setMessage]
 */
export default function useLocalStorange(key, defaultValue) {
  const [message, setMessage] = useState(defaultValue)
  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [message, key])

  return [message, setMessage]
}

