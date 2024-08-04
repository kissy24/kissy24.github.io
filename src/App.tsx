import kissy24Image from '/kissy24.svg'
import './App.css'
import githubImage from './img/github-mark.svg'

function App() {
  return (
    <div className="grid grid-cols-3 m-8 text-gray-600">
      <div className="row-span-3 p-12">
        <img src={kissy24Image} className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover" alt="kissy24" />
        <div className="text-3xl font-bold pt-3">Kissy24</div>
        <div className="">Engineering Manager(DX Product Team), Software Developer(DX, ERP, NLP), Programming Language(Python, Go, Java)</div>
      </div>
      <div className="col-span-2 p-10">
        <div className="text-2xl font-bold">Links</div>
        <ul className="m-4 space-y-3">
          <li>
            <a href="https://github.com/kissy24" className="flex items-center w-full p-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
              <img src={githubImage} className="w-8" alt="github" />
              <span className="w-8 ms-4">GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/kissy_24" className="flex items-center p-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">X(Twitter) </a>
          </li>
          <li>
            <a href="https://youtrust.jp/users/kissy24" className="flex items-center p-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">Youtrust</a>
          </li>
          <li>
            <a href="https://qiita.com/kissy24" className="flex items-center p-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">Qiita</a>
          </li>
          <li>
            <a href="https://sizu.me/kissy24" className="flex items-center p-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">しずかなインターネット</a>
          </li>
        </ul>
      </div>
    </div>
  )

}

export default App
