import "./style.scss";
import Button from "@mui/material/Button";
import friends from "../../../assets/illustrations/friends2-illu.svg";
import { NavLink } from "react-router-dom";
import TypedReactHooksSlogan from "./TypedJS";

const Slogan = () => {
  return (
    <div className="slogan">
      <div className="slogan__presentation">
        <div className="slogan__presentation__text">
          <h1>Découvrez votre prochaine activité du week-end : <span> <TypedReactHooksSlogan /> </span>
          </h1>
        </div>
        <div className="slogan__presentation__button">
        <NavLink to="/create" style={{ textDecoration: "none" }}>
        <Button
          sx={{ mb: 3, ml: 6, backgroundColor: "#F8CF61", "&:hover": { backgroundColor: "#F36B7F" } }}
          
          variant="contained"
        >
          Créer un évènement
        </Button>
        </NavLink>
        </div>
        
      </div>
      <div className="slogan__illustration">
        <img src={friends} alt="friends-illu" />
      </div>
    </div>
  );
};

export default Slogan;
