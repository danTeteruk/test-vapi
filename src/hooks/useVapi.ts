import { useEffect, useState } from 'react'
import Vapi from '@vapi-ai/web'

interface UseVapyTypes {
  vapiInitialized: boolean
  startVapi: () => void
  vapi: Vapi
}
const useVapi = (): UseVapyTypes => {
  const [vapiInitialized, setVapiInitialized] = useState(false)
  const vapi = new Vapi('87775bc2-e3ca-415e-a4ba-26850074e34a')

  useEffect(() => {
    return () => {
      vapi.stop()
      setVapiInitialized(false)
    }
  }, [])

  const startVapi = async () => {
    await vapi.start('1dfa0cf1-3e5c-4576-9be7-b272767131bb')
    setVapiInitialized(true)
  }

  vapi.on('message', (message) => {
    console.log(message)
  })

  vapi.on('response' as any, (response: any) => {
    console.log(response)
  })

  return { vapiInitialized, startVapi, vapi }
}

export default useVapi
