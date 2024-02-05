import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import createTheme from '@uiw/codemirror-themes'
import { javascript } from '@codemirror/lang-javascript'

const extensions = [javascript({ jsx: true, typescript: true })]

const CodeEditor: React.FC = () => {
  const [cheatSheat, setCheatSheat] = useState(false)
  const myTheme = createTheme({
    theme: 'dark',
    styles: [],
    settings: {
      background: 'rgba(255, 255, 255, .0)'
    }
  })

  const code = `
    const cheatSheat = {
      analyze: 'say analyle now - to get score on each answer',
      quick: 'say quick rick - to speed up voice and',
      story: 'say cool story - to hear cool story,
      DONT: 'do not say kraken for god sake'
      '
    }
  `

  const codeHint = `
    const closeBrowser = 'to see cheat sheet'
  `

  return (
    <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
      <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
      <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
      <div className="pl-4 pt-4">
        <svg
          aria-hidden="true"
          viewBox="0 0 42 10"
          fill="none"
          className="size-10 stroke-green-500"
        >
          <circle cx="5" cy="5" r="4.5" />
          <circle cx="21" cy="5" r="4.5" />
          <circle
            className="z-50 stroke-red-500 hover:cursor-pointer"
            cx="37"
            onClick={() => setCheatSheat(true)}
            cy="5"
            fill="red"
            r="4.5"
          />
        </svg>
        <div className="mt-6 flex items-start px-1 text-sm">
          <div
            aria-hidden="true"
            className="select-none border-r border-slate-300/5 pr-4 font-mono text-orange-500"
          >
            <CodeMirror
              theme={myTheme}
              autoCorrect="true"
              lang="javascript"
              extensions={extensions}
              height="300px"
              minWidth="600px"
              value={cheatSheat ? code : codeHint}
              basicSetup={{
                lineNumbers: false,
                autocompletion: true,
                syntaxHighlighting: true,
                foldGutter: false,
                indentOnInput: true,
                history: true,
                highlightActiveLineGutter: false,
                highlightActiveLine: false,
                highlightSelectionMatches: true
              }}
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeEditor
