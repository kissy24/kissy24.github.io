import kissy24Image from '/kissy24.svg'
import './App.css'

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={kissy24Image} className="image" alt="kissy24" />
      <div className="divide-y">
        <div className="font-bold text-xl mb-2">Kissy24</div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#プロダクトマネージャー</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#エンジニアリングマネージャー</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ITエンジニア</span>
        </div>
        <div>
          <a href="https://github.com/kissy24">GitHub </a>
          <a href="https://twitter.com/kissy_24">X(Twitter) </a>
          <a href="https://youtrust.jp/users/kissy24">Youtrust</a>
        </div>
      </div>
    </div>
  )

}

export default App
