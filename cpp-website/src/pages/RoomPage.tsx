import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RoomPage = () => {
  const location: any = useLocation();
  const msg: string = location.state ? location.state.msg : "you did not come from the link on the main page";

  useEffect(() => {
    console.log(msg);
  }, []);

  return (
    <h1> You are now in the room page </h1>
  );
}

export default RoomPage;
