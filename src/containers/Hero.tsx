import { HeroBackground } from '../components/HeroBackground'
import blurCyanImage from '../images/blur-cyan.png'
import blurIndigoImage from '../images/blur-indigo.png'
import CodeEditor from '../containers/CodeEditor'
import { TextSection } from '../containers/TextSection'
import { FC, useState } from 'react'
import Candidate from '../state/candidate'
import { observer } from 'mobx-react-lite'

interface HeroProps {
  microIsAvaliable?: boolean
}

const Hero: FC<HeroProps> = observer(() => {
  const [candidate] = useState(() => new Candidate())
  return (
    <main>
      <div className="h-screen overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
        <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
          <div className="mx-36 grid grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:px-8 xl:gap-x-16 xl:px-12 2xl:grid-cols-2">
            <TextSection candidate={candidate} />
            <div className="relative lg:static">
              <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-inset-y-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
                <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
              </div>
              <div className="relative w-fit">
                <img
                  className="absolute -right-64 -top-64"
                  src={blurCyanImage}
                  alt=""
                  width={530}
                  height={530}
                />
                <img
                  className="absolute -bottom-40 -right-44"
                  src={blurIndigoImage}
                  alt=""
                  width={567}
                  height={567}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
                <CodeEditor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
})

Hero.displayName = 'Hero'

export default Hero
