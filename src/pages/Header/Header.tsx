import {Logo} from "./Logo";
import '../../css/Header.scss'
import {Language} from "./Language";

export const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <div className="contact">
                <div className="contactNumber">
                    <p>+998 (97) 123-45-67</p>
                    <span>контактный центр</span>
                </div>
                <Language/>
                <button className="feedbackBtn">
                    Обратный звонок
                </button>
            </div>
        </div>
    )
}