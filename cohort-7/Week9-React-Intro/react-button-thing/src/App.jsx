import "./App.css";
import ClickMeButton from "./components/click_me_button/click_me_button";

function App() {
  const people = [
    "aubrey plaza",
    "jeffrey epstein",
    "santa claus",
    "milo",
    "miguel",
    "breyten",
  ];
  return (
    <>
      <div id="wrapper">
        <ClickMeButton
          favoritePerson={people[0]}
          onClick={() => console.log("pee")}
        />
      </div>
    </>
  );
}

export default App;
