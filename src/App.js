import "./App.css";
import Header from "./components/Header";
import UserBid from "./screens/UserBid";

function App() {
  const initailState = {
    users: [
      {
        allInputs: {
          name: "",
          inputValue: [],
        },
      },
    ],
  };

  const { users } = initailState;
  const { allInputs } = users[0];
  console.log(allInputs);
  return (
    <div>
      <Header />
      <UserBid />
    </div>
  );
}

export default App;
