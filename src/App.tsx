import kissy24Image from '/kissy24.svg'

import githubImage from './img/github-mark.svg'
import xImage from './img/x.svg'
import qiitaImage from './img/qiita-icon.png'
import youtrustImage from './img/youtrust.png'
import sizuImage from './img/sizu.svg'

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
            <a href="https://twitter.com/kissy_24" className="flex items-center w-full p-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <img src={xImage} className="w-8" alt="x" />
              <span className="w-8 ms-4">X(Twitter)</span>
            </a>
          </li>
          <li>
            <a href="https://youtrust.jp/users/kissy24" className="flex items-center w-full p-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <img src={youtrustImage} className="w-8" alt="x" />
              <span className="w-8 ms-4">Youtrust</span>
            </a>
          </li>
          <li>
            <a href="https://qiita.com/kissy24" className="flex items-center w-full p-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <img src={qiitaImage} className="w-8" alt="x" />
              <span className="w-8 ms-4">Qiita</span>
            </a>
          </li>
          <li>
            <a href="https://sizu.me/kissy24" className="flex items-center w-full p-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <img src={sizuImage} className="w-8" alt="x" />
              <span className="w-full ms-4">しずかなインターネット</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )

}

export default App
