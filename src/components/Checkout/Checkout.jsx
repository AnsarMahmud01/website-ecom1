import "./Checkout.css"
import React from "react";
import FormBuilder from "@rocketcamp/material-formbuilder";
import { useRef } from "react";

const Checkout = () => {
    const formRef = useRef();
    const handleSubmit = (data) => {
        // data in FormData format

        alert("Сәтті сатып алынды") 
    };
      return (
        <div className="checkout">
        <FormBuilder
          fields={[
            {
              name: "firstname",
              label: "Имя",
              width: 1 / 2,
              required: true,
            },
            {
              name: "lastname",
              label: "Фамилия",
              width: 1 / 2,
              required: true,
            },
            {
              name: "address",
              label: "Ваш Адрес",
              required: true,
            },
        ]}
          handleSubmit={handleSubmit}
        />
        </div>
      );
    }

export default Checkout;