import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center gap-8 my-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="/vite.svg"
            alt="Vite logo"
            className="h-20 w-20 hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="/react.svg"
            alt="React logo"
            className="h-20 w-20 hover:scale-110 transition-transform"
          />
        </a>
      </div>
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-6">
        Vite + React + Tailwind CDN
      </h1>
      <div className="flex flex-col items-center gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </button>
        <p className="text-gray-600">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
