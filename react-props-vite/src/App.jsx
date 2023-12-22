import "./App.scss";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import HomePage from "./pages/home-page";
import {users} from "./data/index"
function App() {


  let userName = "Sema";
  let age = 19;

  let cardTitle = "lorem ipsum";

  return (
    <>
      <Header />
      <HomePage
        userName={userName}
        age={age}
        cardTitle={cardTitle}
        users={users}
      />
      <Footer />
    </>
  );
}

export default App;
