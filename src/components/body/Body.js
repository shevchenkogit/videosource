import {Videos} from '../videos/Videos'

import './Body.css'



const VideosRend = ({j}) =>{
 
    const {name,url} = j
    
    return (
        <div className='video'>
            
            <img className='img' alt={name} src={url}/>
            <div className='play'>
            <svg className='sign' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>
            </div>
            <div className='titlediv'>
            <div className='title'>{name}</div></div>
        </div>
    )
}

const Body = () => {


    return (
    <div className='allVideos'>
        {
            Videos.map(v=><VideosRend key={v.id} j={v} />)
        }
    </div>
    )
    
}
export { Body };