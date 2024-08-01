import { RouterProvider } from "react-router-dom"
import { createRouter } from '../config/router/router'

function App() {
    return (
        <>
            <RouterProvider router={createRouter} />
        </>
    )
}

export default App