import Description from "../components/Description"
import style from "../styles/MainPage.module.css"

const numbers = [
    { id: 1, name: "Nurzada", age: 22 },
    { id: 2, name: "Eldiyar", age: 21 },
    { id: 3, name: "Ivan", age: 22 },
]

function MainPage(){
    return (
        <div>
            <h2 className={style.title}>MainPage</h2>
            {numbers.map((el) =>
                <div key={el.id}>age: {el.age}, name: {el.name}</div>)
            }
            <Description data={{title: "Title", description: "description"}} />
        </div>
    )
}

export default MainPage