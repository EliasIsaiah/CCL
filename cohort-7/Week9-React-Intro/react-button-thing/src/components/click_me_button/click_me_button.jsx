import "./click_me_button.css";

function ClickMeButton(props) {
  return (
    <button onClick={props.onClick} className="button">
      favorite person: {props.favoritePerson}
    </button>
  );
}

export default ClickMeButton;
