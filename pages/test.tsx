import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const TopPage = () => {
	useEffect(() => {
	  setTestValue(localStorage.getItem('testKey'))
	}, [])
	const [testValue, setTestValue] = useState('')

  return (
    <div>
        <ul>
            <li>
                <Link href="/todo">TODOアプリ</Link>
            </li>
            <li>
                <Link href="/poke">ポケモン</Link>
            </li>
        </ul>
        <button onClick={() => localStorage.setItem('testKey', 'testValue')}>localStorageにデータを保存</button>
        <p>{testValue}</p>
    </div>
  )
}

export default TopPage