import './App.css';
import data from './data';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  console.log(count);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(count);
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in,
          pariatur optio expedita eos asperiores quae inventore fugit? Eos
          voluptatum cupiditate, atque nesciunt inventore ad ipsam fugit minus
          id illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in,
          pariatur optio expedita eos asperiores quae inventore fugit? Eos
          voluptatum cupiditate, atque nesciunt inventore ad ipsam fugit minus
          id illo.
        </p>
      </article>
    </section>
  );
}

export default App;
