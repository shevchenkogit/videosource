import './Navigation.css'
import {Tags} from '../tags/tags'

const Navigation = () => {
    return (
    <div className='main'>
        <div className='header'>
            YMV Recommends
        </div >
        <div className='headerB' >
            Choose the tags you like the most
        </div>
        <div className='tags'>
           {Tags.map((t, index)=><div key={index+1} className='tag'>{t}</div>)}
        </div>
    </div>
    )
    
}
export { Navigation };