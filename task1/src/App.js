import React from 'react';

const PhotoItem = ({ photo }) => {
  return (
    <div>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <h3>{photo.title}</h3>
    </div>
  );
};

const PhotoList = ({ photos }) => {
  return (
    <div>
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

const App = () => {
  const photos = [
    {
      albumId: 1,
      id: 1,
      title: 'green',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'purple',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
  ];

  return (
    <div>
      <PhotoList photos={photos} />
    </div>
  );
};

export default App;