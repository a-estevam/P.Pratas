import { useState } from "react";
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(buyer);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input_form" type="text" name="name" placeholder="Nome" onChange={handleChange} required />
      <input className="input_form" type="text" name="phone" placeholder="Telefone" onChange={handleChange} required />
      <input className="input_form" type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
      <button className="form_button" type="submit">Confirmar Pedido</button>
    </form>
  );
};

export default CheckoutForm;
