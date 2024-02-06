import { Layout } from './src/components/Layout'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './src/styles/prism.css'
import './src/styles/tailwind.css'
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',

    element: (
      <>
        <Layout />
      </>
    )
  }
])

root.render(<RouterProvider router={router} />)
