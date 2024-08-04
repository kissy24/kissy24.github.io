import kissy24Image from '/kissy24.svg'

import githubImage from './img/github-mark.svg'
import xImage from './img/x.svg'
import qiitaImage from './img/qiita-icon.png'
import youtrustImage from './img/youtrust.png'
import sizuImage from './img/sizu.svg'

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 m-8 text-gray-600">
      <div className="row-span-2 p-10 pb-0">
        <img src={kissy24Image} className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover" alt="kissy24" />
        <div className="text-3xl font-bold pt-3">Kissy24</div>
        <div className="pt-2 pe-4">Engineering Manager(DX Product Team), Software Developer(DX, ERP, NLP), Programming Language(Python, Go, Java)</div>
      </div>
      <div className="col-span-2 p-10 pb-0">
        <div className="text-2xl font-bold">Articles</div>
        <ul className="list-disc list-inside m-4 mb-0 space-y-3">
          <li>
            <a href="https://qiita.com/kissy24/items/40b511cee9b555b46691" className="text-base text-sky-400">【入門】Python を書く前に知っておきたいデータ型のあれこれ</a>
          </li>
          <li>
            <a href="https://qiita.com/kissy24/items/decfac2256324a5227ea" className="text-base text-sky-400">SPACEフレームワークの測定指標を アンケート + 1on1 を用いて運用する</a>
          </li>
        </ul>
      </div>
      <div className="col-span-2 p-10 pb-0">
        <div className="text-2xl font-bold">Links</div>
        <ul className="m-4 mb-0 space-y-3">
          <li>
            <a href="https://github.com/kissy24" className="flex items-center p-3 text-base font-bold rounded-full bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <img src={githubImage} className="w-8" alt="github" />
              <span className="ms-4">GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/kissy_24" className="flex items-center p-3 text-base font-bold rounded-full bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <img src={xImage} className="w-8" alt="x" />
              <span className="ms-4">X(Twitter)</span>
            </a>
          </li>
          <li>
            <a href="https://youtrust.jp/users/kissy24" className="flex items-center p-3 text-base font-bold rounded-full bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <img src={youtrustImage} className="w-8" alt="youtrust" />
              <span className="ms-4">Youtrust</span>
            </a>
          </li>
          <li>
            <a href="https://qiita.com/kissy24" className="flex items-center p-3 text-base font-bold rounded-full bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <img src={qiitaImage} className="w-8" alt="qiita" />
              <span className="ms-4">Qiita</span>
            </a>
          </li>
          <li>
            <a href="https://sizu.me/kissy24" className="flex items-center p-3 text-base font-bold rounded-full bg-gray-50 hover:bg-gray-100 group hover:shadow">
              <img src={sizuImage} className="w-8" alt="sizu" />
              <span className="ms-4">しずかなインターネット</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )

}

export default App
