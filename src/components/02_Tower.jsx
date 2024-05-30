import Chamber from "./03_Chamber";
const Tower = ({mesage1, onReply }) => {
  return (
  <div>
    <h1>Tower</h1>
    <p>Message for JSD7:{mesage1}</p>
    <Chamber mesage1 ={mesage1} onReply ={onReply} />
  </div>
  )
};

export default Tower;