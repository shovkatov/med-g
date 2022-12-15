import {Header} from "./Header/Header";
import {MainContent} from "./MainContent/MainContent";
import {Services} from "./Services/Services";

export const Main = () => {
    return (
        <div className="mainPage">
            <Header/>
            <MainContent/>
            <Services/>
        </div>
    )
}