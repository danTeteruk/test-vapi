import React, { FC, ReactNode } from 'react'
import blurCyanImage from '../images/blur-cyan.png'
import { observer } from 'mobx-react-lite'
import { CandidateType } from '../state/candidate'
import { useSpeechRecognition } from 'react-speech-recognition'
import useVapi from '../hooks/useVapi'
interface TextSectionProps {
  enabled?: boolean
}

interface TextSectionProps {
  candidate: CandidateType
}

export const TextSection: FC<TextSectionProps> = observer((): ReactNode => {
  const { startVapi, vapiInitialized } = useVapi()
  const { isMicrophoneAvailable } = useSpeechRecognition()

  if (!vapiInitialized) {
    return (
      <button
        onClick={startVapi}
        type="button"
        className="z-20 mb-2 me-2 w-fit rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-lg font-bold  text-white transition duration-150 ease-in-out hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        Enable Vapi
      </button>
    )
  }

  return (
    <div className="relative z-10 md:text-center lg:text-left">
      <img
        className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
        src={blurCyanImage}
        alt=""
        width={530}
        height={530}
      />
      <div className="relative">
        {!isMicrophoneAvailable && (
          <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-6xl ">
            Please Enable Microphone to proceed
          </p>
        )}
        {isMicrophoneAvailable && (
          <>
            <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-6xl text-transparent">
              HR screening tool
            </p>
            <p className="mt-3 text-2xl tracking-tight text-slate-400">
              Website is voice driven
            </p>
            <p className="inline bg-gradient-to-r from-red-500 via-sky-500 to-violet-900 bg-clip-text text-6xl text-transparent">
              follow the voice assistant
            </p>
          </>
        )}
      </div>
    </div>
  )
})
