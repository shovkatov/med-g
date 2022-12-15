import '../../css/MainContent.scss'
import group from '../../images/group-light.png'

export const MainContent = () => {
    return (
        <div className="mainContent">
            <h1>Консультация врача в любое время и в любом месте по звонку</h1>
            <p>Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога и других высококласных врачей</p>
            <button>Записаться онлайн</button>
            <img src={group} alt="group"/>
        </div>
    )
}