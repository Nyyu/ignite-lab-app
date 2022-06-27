import { Route, Routes } from "react-router-dom"
import { Event } from "./pages/Event"
import { Subscribe } from "./pages/Subscribe"

export function Router() {
    return <Routes>
        <Route element={<Subscribe />} path="/" />
        <Route element={<Event />} path="/event" />
        <Route element={<Event />} path="/event/lesson/:slug" />
    </Routes>
}