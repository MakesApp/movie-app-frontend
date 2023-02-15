import React from 'react';
import React, { useState } from 'react';

const App = () => {

const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState([]);

const handleClick = () => {
  setIsLoading(true);
  //  
  let newData = [1, 2, 3, 4, 5];
  setTimeout(() => {
    setData(newData);
    setIsLoading(false);
  }, 3000);
};

return (
  <div>
    {isLoading ? (
      <div className="spinner"></div>
    ) : (
      <div>
        <button onClick={handleClick}>Fetch Data</button>
        <ul>
          {data.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
};

export default App;
/**import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
*/
/**function Spinner() {
	return <div></div>;
}

export default Spinner; */