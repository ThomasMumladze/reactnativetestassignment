import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { createContext } from 'react'
import List from './routes/List'

import { Home } from './routes/Home'
import { useUniqueGenerator } from './hook/useUniqueGenerator'

export const AppContext = createContext(null)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'list',
    element: <List />,
  },
])

function App() {
  const {filterUniqueIds} = useUniqueGenerator()

  return (
    <AppContext.Provider value={{ filterUniqueIds }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
