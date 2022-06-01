import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Layout from './components/Layout'
import Detail from './pages/Detail'
import Home from './pages/Home'

type RouteType = {
  key: string
  title: string
  path: string
  enabled: boolean
  component: () => JSX.Element
}

const routes: Array<RouteType> = [
  {
    key: 'detail',
    title: 'No Details Found',
    path: '/detail',
    enabled: true,
    component: () => <Navigate to="/" replace />
  },
  {
    key: 'detail',
    title: 'Detail',
    path: '/detail/:country',
    enabled: true,
    component: Detail
  },
  {
    key: 'home',
    title: 'Home',
    path: '/',
    enabled: true,
    component: Home
  }
]

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(route => (
            <Route key={route.key} path={route.path} element={<route.component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
