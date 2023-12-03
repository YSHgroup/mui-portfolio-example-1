import {lazy, Suspense } from 'react'
import {Outlet, Navigate, useRoutes } from 'react-router-dom'

export const Home = lazy(() => import('../pages/Home'))

export default function Router() {
    const routes = useRoutes([
        {
            element: (
                <Suspense>
                    <Outlet/>
                </Suspense>
            ),
            children: [
                {element: <Home/>, index: true},
            ]
        },
        {
            path: '*',
            element: <Navigate to={'/'} replace/>
        }
    ])
    return routes
}