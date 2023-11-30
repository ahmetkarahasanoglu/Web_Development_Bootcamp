import "./App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import Navbar from "./Navbar";

import Deneme from "./Deneme(a simple trial; name, birthyear)";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <FormDemo />  */}
      {/* <RatingDemo /> */}
      <Deneme props={"thisIsProp"} />
      
    </div>
  );
}

export default App;
