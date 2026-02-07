import { useState, useEffect, useMemo } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const [data, setData] = useState<number | null>(null)

  const expensiveResult = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Sistem çalışıyor: " + count);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Hesaplanan Sabit Değer: {expensiveResult}</p>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App