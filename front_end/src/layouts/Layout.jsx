import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <header>Header</header>
            <hr />
            <Outlet />
            <hr />
            <footer>Footer</footer>
        </>
    )
}
