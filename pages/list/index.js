import Link from "next/link"
import styles from "../../styles/List.module.css"

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    
    return {
        props:{lists:data}
    }
}
const List = ({lists}) => {
    return (
        <div>
            <h1>ALL USERS LIST</h1>
            {
                lists.map((list) => (
                    <Link href={`/list/${list.id}`} key={ list.id}>
                        <a className={ styles.single}>
                            <h3>{list.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default List
