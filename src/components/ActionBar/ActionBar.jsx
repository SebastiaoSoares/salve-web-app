import React from "react";
import style from "./ActionBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function useActivePath() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  React.useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return activePath;
}

function Action({ to, label, ionIcon, className = "" }) {
  const active = useActivePath() === to;

  return (
    <Link to={to}>
      <button className={`${style.actionButton} ${className} ${active ? style.actionButtonActive : ""}`}>
        <ion-icon name={ionIcon}></ion-icon>
        <span>{label}</span>
      </button>
    </Link>
  );
}

function EmergencyButton({params}) {
  return (
    <a href={`tel:${params}`}>
      <button className={`${style.actionButton} ${style.emergencyButton}`}>
        <ion-icon name="medical-outline"></ion-icon>
        <span>{params}</span>
      </button>
    </a>
  );
  
}

export default function ActionBar({ className = "" }) {
  return (
    <div className={`${style.actionBar} ${className}`}>
      <Action to="/" label="Início" ionIcon="home-outline" />
      <Action to="/aprenda" label="Aprenda" ionIcon="book-outline" />
      <EmergencyButton params="192" />
      <Action to="/salve" label="Salve" ionIcon="medkit-outline" />
      <Action to="/sobre" label="Sobre" ionIcon="information-circle-outline" />
    </div>
  );
}
