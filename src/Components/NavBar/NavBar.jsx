import React, { useState, useEffect } from "react";
import { List } from "@phosphor-icons/react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Li from "../Li/Li"; // Importe o Li

const NavBar = () => {
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemsRef = doc(db, "Items", "uyXLON8VSjmxLCopp7PC");

      try {
        const snapshot = await getDoc(itemsRef);
        if (snapshot.exists()) {
          const productData = snapshot.data();
          setCategoryId(productData.categoryId);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav>
      <div className="navBar_li">
        <Li to={`/Aneis/Aneis`} label="Anéis" />
        <Li to={`/Brincos/Brincos`} label="Brincos" />
        <Li to={`/Correntes/Correntes`} label="Correntes" />
        <Li to={`/Pulseiras/Pulseiras`} label="Pulseiras" />
      </div>
      <List className="List" size={32} />
    </nav>
  );
};

export default NavBar;
