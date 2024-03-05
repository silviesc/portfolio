import "../scss/burgerbtn.scss";

function BurgerBtn({ toggleClick, isOpen }) {
  return (
    <div onClick={toggleClick} className={`burgerbtn ${isOpen ? "open" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerBtn;
