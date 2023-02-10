import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import UserBid from "./screens/UserBid";

function App() {
 

 

 
  // useEffect(() => {
  //   console.log(lowestUniqueValue(AllInputs));
  //   const value = lowestUniqueValue(AllInputs);
  //   console.log(findKeyByValue(AllInputs, value));
  //   findKeyByValue(AllInputs, value);
  // }, [AllInputs]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UserBid />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
