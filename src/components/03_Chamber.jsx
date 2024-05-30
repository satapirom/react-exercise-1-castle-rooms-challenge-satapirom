import Room from "./04_Room";
const Chamber = ({mesage1, onReply }) => {
  return (
  <div>
    <h1>Chamber</h1>
    <p>Message for JSD7:{mesage1}</p>
    <Room mesage1 ={mesage1} onReply ={onReply} />
  </div>
  )
};

export default Chamber;