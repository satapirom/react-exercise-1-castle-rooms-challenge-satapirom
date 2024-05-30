import SecretRoom from "./09_SecretRoom";
const Nook = ({mesage1, onReply }) => {
  return (
  <div>
    <h1>Nook</h1>
    <p>Message for JSD7:{mesage1}</p>
    <SecretRoom mesage1 ={mesage1} onReply ={onReply} />
  </div>
  )
};

export default Nook;
