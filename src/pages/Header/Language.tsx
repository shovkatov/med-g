import ru from '../../images/russia.png'
import uz from '../../images/uzbekistan.png'
import us from '../../images/united-states.png'
import {Select} from "antd";
import {Option} from "antd/es/mentions";
import {useState} from "react";

export const Language = () => {
    const [language, setLanguage] = useState<string>('ru')
    return (
        <div className="language">
            <Select  defaultValue={language} onSelect={(e) => setLanguage(e)}>
                <Select.Option value="ru"><div className="flex"><img src={ru} alt="ru"/>Русский</div></Select.Option>
                <Select.Option value="uz"><div className="flex"><img src={uz} alt="ru"/>O`zbekcha</div></Select.Option>
                <Select.Option value="en"><div className="flex"><img src={us} alt="ru"/>English</div></Select.Option>
            </Select>
        </div>
    )
}