import kissy24Image from '/kissy24.svg'
import './App.css'
import githubImage from './img/github-mark.svg'

function App() {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <img src={kissy24Image} className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover" alt="kissy24" />
      </div>
      <div className="mb-1 p-3 text-xl font-medium text-gray-900 dark:text-white">Kissy24</div>
      <ul className="w-full my-4 space-y-3">
        <li>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PdM</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#EM</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Dev</span>
        </li>
        <li className="flex">
          <a href="https://github.com/kissy24" className="flex items-center w-full p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img src={githubImage} className="w-1/6" alt="github" />
            <span className="w-5/6">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/kissy_24" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">X(Twitter) </a>
        </li>
        <li>
          <a href="https://youtrust.jp/users/kissy24" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">Youtrust</a>
        </li>
        <li>
          <a href="https://qiita.com/kissy24" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">Qiita</a>
        </li>
        <li>
          <a href="https://sizu.me/kissy24" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">しずかなインターネット</a>
        </li>
      </ul>
    </div>
  )

}

export default App
