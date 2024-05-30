import Nook from "./08_Nook";
const Gallery = ({mesage1, onReply }) => {
  return (
  <div>
    <h1>Gallery</h1>
    <p>Message for JSD7:{mesage1}</p>
    <Nook mesage1 ={mesage1} onReply ={onReply} />
  </div>
  )
};

export default Gallery;