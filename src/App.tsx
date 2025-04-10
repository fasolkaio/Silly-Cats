import { useEffect, useState } from 'react';
import './App.css';
import { TheCatAPI } from '@thatapicompany/thecatapi';

function App() {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [catBreed, setCatBreed] = useState('Unknown Breed');
  const theCatAPI = new TheCatAPI("live_LezWYEbLl1lzeB1AOaz2T0zWRXFTvgOrK0iaoxV2dTz1UU05SBnbtfq1HW4MPhx5");

  useEffect(() => {
    const fetchCat = async () => {
      const image = await theCatAPI.images.getRandomImage({
        hasBreeds: true,
      });
      if (image && image.breeds && image.breeds.length > 0) {
        setCatImageUrl(image.url);
        setCatBreed(image.breeds[0]?.name || 'Unknown Breed');
      } else {
        setCatBreed('Unknown Breed');
      }
    };

    fetchCat();
  }, []);

  const changeCat = async () => {
    const image = await theCatAPI.images.getRandomImage({
      hasBreeds: true,
    });
    if (image && image.breeds && image.breeds.length > 0) {
      setCatImageUrl(image.url);
      setCatBreed(image.breeds[0]?.name || 'Unknown Breed');
    } else {
      setCatBreed('Unknown Breed');
    }
  };

  return (
    <>
      <div className="App">
        <h1>Random Cats</h1>
        <h2>{catBreed}</h2>
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
