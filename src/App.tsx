import kissy24Image from '/kissy24.svg'

import ProfileContents from './components/ProfileContents';
import ArticleLinks from './components/ArticleLinks';
import { articleLinks } from './data/articleLinks';
import SocialLinks from './components/SocialLinks';
import { links } from './data/socialLinks';

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 m-8 text-gray-600">
      <div className="row-span-2 p-10 pb-0">
        <img src={kissy24Image} className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover" alt="kissy24" />
        <div className="text-3xl font-bold pt-3">Kissy24</div>
        <ProfileContents />
      </div>
      <div className="col-span-2 p-10 pb-0">
        <div className="text-2xl font-bold">Articles</div>
        <ArticleLinks links={articleLinks} />
      </div>
      <div className="col-span-2 p-10 pb-0">
        <div className="text-2xl font-bold">Links</div>
        <SocialLinks links={links} />
      </div>
    </div>
  )

}

export default App
