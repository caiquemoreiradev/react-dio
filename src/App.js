import { useState } from 'react';

import { Header } from './components/Header';

import './App.css';

function App() {

  const [artists, setArtists] = useState([
    {
      "id": '1',
      "name": 'Lil Tjay',
      "imgProfile": 'https://www.rollingstone.com/wp-content/uploads/2021/04/lil-tjay-charts.jpg',
      'songs': 'FN, Calling my Phone, Leaked, Sex Sounds'
    },

    {
      "id": '2',
      "name": 'Skillet',
      "imgProfile": 'https://onmilwaukee.com/images/articles/st/state-fair-chris-young-beachboys-skillet/state-fair-chris-young-beachboys-skillet_fullsize_story1.jpg',
      'songs': 'Hero, Monster, Feel Invicible, Legandary, Save Me'
    },

    {
      "id": '3',
      "name": 'Hailee Stenfield',
      "imgProfile": 'https://www.radiosajnet.com.br/files/2020/04/Hailee-Steinfeld-2.jpg',
      'songs': 'Love myself, Most Girls, Wrong Direction'
    },

    {
      "id": '4',
      "name": 'Kyan',
      "imgProfile": 'https://i.ytimg.com/vi/9IVs6NhWMyw/maxresdefault.jpg',
      'songs': 'Trap de cria, Preto e dinheiro, Nós é ruim e o cabelo ajuda'
    },

    {
      "id": '5',
      "name": 'Zara Larson',
      "imgProfile": 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/f/7/c/3/f7c3efd3995adfd58ef83af1bf90fa88.jpg',
      'songs': 'WoW, Never Forget You, Lush Life, Uncover'
    },

    {
      "id": '6',
      "name": 'Yung Lixo',
      "imgProfile": 'https://i.redd.it/msq0ip2ajwf01.jpg',
      'songs': 'Salafrária, Mazda Medusa, Porshe Panamera'
    },
  ]);

  const [artistName, setArtistName] = useState('');
  const [artistImageURL, setArtistImageURL] = useState('');
  const [artistSongs, setArtistSongs] = useState('');

  function handleRemoveArtist(id) {

    const updateArtists = artists.filter(artist => artist.id !== id);

    setArtists(updateArtists);
  }

  function handleAddArtist() {

    const newArtist = {
      id: Math.random(),
      name: artistName,
      imgProfile: artistImageURL,
      songs: artistSongs
    }

    setArtistName('');
    setArtistImageURL('');
    setArtistSongs('');
    setArtists([...artists, newArtist]);
  }

  return (
    <div className="app">
      <Header />

      <section className='form'>
        <div className="info__form">
          <label htmlFor="artist">Artista</label>
          <input value={artistName} onChange={(e) => setArtistName(e.target.value)} name='artist' type="text" />
        </div>

        <div className="info__form">
          <label htmlFor="url_img">Url Imagem</label>
          <input value={artistImageURL} onChange={(e) => setArtistImageURL(e.target.value)} name='url_img' type="text" />
        </div>

        <div className="info__form">
          <label htmlFor="songs">Músicas</label>
          <input value={artistSongs} onChange={(e) => setArtistSongs(e.target.value)} name='songs' type="text" />
        </div>

        <button onClick={handleAddArtist}>Salvar Artista</button>
      </section>

      <section className='artists__section'>
        {artists.map(artist => (
          <div key={artist.id} className="card__container">
            <img src={artist.imgProfile} alt={artist.name} />

            <section className="artist__infos">
              <h3>{artist.name}</h3>

              <h4>{artist.songs}</h4>
            </section>

            <button onClick={e => handleRemoveArtist(artist.id)}>Remover artista</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
