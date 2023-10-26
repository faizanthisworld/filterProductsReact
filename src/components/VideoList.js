import Video from "./Video";
import { db } from "../videosDb";


 
const VideoList = ({heading}) => {

    return (
        <>
        <h3 className="heading">{heading}</h3>
        {
           
            db.map((video,index) =>  <Video key={index} img={video.img} title={video.title} desc={video.desc}/>)
        }
        </>
       
    )
}

export default VideoList