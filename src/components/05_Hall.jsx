import Corridor from "./06_Corridor";
const Hall = ({mesage1, onReply }) => {
  return (
  <div>
    <h1>Hall</h1>
    <p>Message for JSD7:{mesage1}</p>
    <Corridor mesage1 ={mesage1} onReply ={onReply} />
  </div>
  )
};

export default Hall;
