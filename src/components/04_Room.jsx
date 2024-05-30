import Hall from "./05_Hall";
const Room = ({mesage1, onReply }) => {
  return (
  <div>
    <h1>Room</h1>
    <p>Message for JSD7:{mesage1}</p>
    <Hall mesage1 ={mesage1} onReply ={onReply} />
  </div>
  )
};

export default Room;
