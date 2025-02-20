import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Telefone" onChange={handleChange} required />
      <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
      <button type="submit">Confirmar Pedido</button>
    </form>
  );
};

export default CheckoutForm;
