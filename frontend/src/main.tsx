import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import { AuthProvider } from './auth/AuthProvider'
import { ThemeProvider } from './hooks/useTheme'
import './styles/global.css'

function AppRouter() {
  const [router] = React.useState(() => createBrowserRouter([
    {
      path: '*',
      element: <App />,
    },
  ]))

  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
