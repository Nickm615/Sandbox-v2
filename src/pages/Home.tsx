import { Link } from 'react-router-dom'


export function Home() {
    return(
        <div className='home-page'>
            <h1>Home Page</h1>
            <h2>Welcome to the support sandbox! The purpose of this space is to host examples of various integrations for the purposes of testing by the support team. If you need access to this or would like to contribute, please contact me at nicholasm@kontent.ai </h2>
            <Link to='/products'>Algolia Product Search</Link>
            <Link to='/resolver'>Rich Text Resolver</Link>
        </div>

    )
}