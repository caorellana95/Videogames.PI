import {Link} from 'react-router-dom'

export default function Landing(){
    return (
        <div className='Image'>
            <image className='Images' src=''alt=''/>
            <Link to="/home">
                <h2>PI Cristobal Orellana Videogames</h2>
                <button className='myButton'>Home</button>
            </Link>
        </div>
    )
}