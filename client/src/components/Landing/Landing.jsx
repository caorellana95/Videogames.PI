import {Link} from 'react-router-dom'

export default function Landing(){
    return (
        <div className='Image'>
            <image className='Images' src=''alt=''/>
            <Link to="/videogames">
                <h2>PI Cistobal Orellana Videogames</h2>
                <button className='myButton'>Gamer</button>
            </Link>
        </div>
    )
}