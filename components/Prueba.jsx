import React, { useState } from 'react';

const MiComponente = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>El contador está en {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  );
}

export default MiComponente;
