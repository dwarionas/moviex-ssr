import LeftSide from "./components/LeftSlide/LeftSide";
import MainContent from "./components/MainContent/MainContent";
import RightSide from "./components/RightSide/RightSide";

function App() {
    return (
        <div className="App flex justify-between h-screen">
            <LeftSide/>
            <MainContent/>
            <RightSide/>
        </div>
    );
}

export default App;