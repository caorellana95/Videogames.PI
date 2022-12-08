import {Link} from 'react-router-dom'
import cs from '../Landing/Landing.module.css';

export default function Landing(){
    return (
        <div className={cs.full} >
            <div className={cs.full_inner}>
                <div className={cs.content}>
                <h2 className={cs.titulo}>Videogames App</h2>
           <Link to='/home'>
                <button className={cs.btn}>
                <span className={cs.ingresar}>CLICK TO START</span> 
                </button>
            </Link>
                     </div>
                
            </div>
        </div>
    )
}