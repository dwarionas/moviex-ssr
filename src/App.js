import NavigationSide from "./components/NavigationSide/NavigationSide";
import MainContent from "./components/MainContent/MainContent";
import RSide from "./components/PersonalSide/RSide";

function App() {
    return (
        <div className="App flex justify-between h-screen">
            <NavigationSide/>
            <MainContent/>
            <RSide/>
        </div>
    );
}

export default App;