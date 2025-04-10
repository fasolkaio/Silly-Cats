import { useEffect, useState } from 'react';
import './App.css';
import { TheCatAPI } from '@thatapicompany/thecatapi';

function App() {
  const [catImageUrl, setCatImageUrl] = useState('');
  const theCatAPI = new TheCatAPI("live_LezWYEbLl1lzeB1AOaz2T0zWRXFTvgOrK0iaoxV2dTz1UU05SBnbtfq1HW4MPhx5");

  useEffect(() => {
    const fetchCat = async () => {
      const image = await theCatAPI.images.getRandomImage({
        hasBreeds: true,
      });
      if (image) {
        setCatImageUrl(image.url);
      }
    };

    fetchCat();
  }, []);

  const changeCat = async () => {
    const image = await theCatAPI.images.getRandomImage({
      hasBreeds: true,
    });
    if (image) {
      setCatImageUrl(image.url);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Random Cat</h1>
        {catImageUrl && (
          <img src={catImageUrl} alt="Random Cat" style={{ width: '300px', borderRadius: '10px' }} />
        )}
      </div>
      <div>
        <button onClick={changeCat}>Change cat</button>
      </div>
    </>
    
  );
}

export default App;
