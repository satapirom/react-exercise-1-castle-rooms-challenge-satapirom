import Gallery from "./07_Gallery";
const Corridor = ({mesage1, onReply }) => {
  return (
  <div>
    <h1>Corridor</h1>
    <p>Message for JSD7:{mesage1}</p>
    <Gallery mesage1 ={mesage1} onReply ={onReply} />
  </div>
  )
};

export default Corridor;