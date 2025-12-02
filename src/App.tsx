

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { CountContextProvider } from "./context/count-context";



function App() {




    return <>
        <CountContextProvider>
            <div className="md:px-20 h-dvh font-kumb md:flex justify-center items-center">
                <Navbar />
                <Hero />
            </div>
        </CountContextProvider>

    </>
}

export default App;
