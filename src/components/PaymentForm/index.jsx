/*import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PaymentForm = ({pagoAprobado}) => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div className='card-container'>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={}
        required
      />
      <form className='card-form'>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
         <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
          <input
          type="text"
          name="expiry"
          placeholder="Expiration Date MM/YY"
          pattern="\d{2}/\d{2}"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
         <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
      </form>
    </div>
  );
}

export default PaymentForm;*/

import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PaymentForm = ({ cardInfo, setCardInfo }) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setCardInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setCardInfo((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className='card-container'>
      <Cards
        number={cardInfo.number}
        expiry={cardInfo.expiry}
        cvc={cardInfo.cvc}
        name={cardInfo.name}
        focused={cardInfo.focus}
      />
      <form className='card-form'>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={cardInfo.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={cardInfo.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <input
          type="text"
          name="expiry"
          placeholder="Expiration Date MM/YY"
          pattern="\d{2}/\d{2}"
          value={cardInfo.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cardInfo.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
      </form>
    </div>
  );
};

export default PaymentForm;
