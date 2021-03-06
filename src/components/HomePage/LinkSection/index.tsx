/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss";
import { NavLink } from "react-router-dom";

interface LinkSectionProps {
  title: string;
  buttonName: string;
}

const LinkSection = ({ title, buttonName }: LinkSectionProps) => (
  <div className="linkSection">
    <h2 className="linkSection__title">{title}</h2>
    <NavLink to="/eventList"><a className="linkSection__buttonName">
      {buttonName}
    </a></NavLink>
  </div>
);

export default LinkSection;
