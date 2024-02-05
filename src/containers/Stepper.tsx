import { CheckIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'

const steps = [
  { id: '00', href: '#', status: 'complete' },
  { id: '01', href: '#', status: 'current' },
  { id: '02', href: '#', status: 'upcoming' },
  { id: '03', href: '#', status: 'upcoming' },
  { id: '04', href: '#', status: 'upcoming' },
  { id: '05', href: '#', status: 'upcoming' },
  { id: '06', href: '#', status: 'upcoming' }
]

const Stepper: FC = () => {
  return (
    <div className="z-10  max-w-full bg-cyan-500/50">
      <nav aria-label="Progress">
        <ol
          role="list"
          className="divide-y divide-gray-300 rounded-md md:flex md:divide-y-0"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative md:flex md:flex-1">
              {step.status === 'complete' ? (
                <a href={step.href} className="group flex items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex size-10  items-center justify-center rounded-full bg-green-600">
                      <CheckIcon
                        className="size-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <div className="background-color: rgb(6 182 212 / 0.5); text-center text-4xl">
                    🗿
                  </div>
                </a>
              ) : step.status === 'current' ? (
                <a
                  href={step.href}
                  className="flex items-center px-6 py-4 text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-green-600">
                    <span className="text-white">{step.id}</span>
                  </span>
                  <div className="background-color: rgb(6 182 212 / 0.5); mx-3 text-center text-4xl">
                    🛠️
                  </div>
                </a>
              ) : (
                <a href={step.href} className="group flex items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white">
                      <span className="text-white group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                  </span>
                  <div className="background-color: rgb(6 182 212 / 0.5); text-4xl first-line:text-center">
                    👀
                  </div>
                </a>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  <div
                    className="absolute right-0 top-0 hidden h-full w-5 md:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="size-full text-white"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default Stepper
