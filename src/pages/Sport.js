import React from "react";
import { useState, useEffect } from "react";

const Sport = () => {
  const [photos, setPhotos] = useState([]);

  const getPhoto = async () => {
    const response = await fetch("../sport.json");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <section>
      <div className="image-blocks">
        {photos.map((photo) => {
          return (
            <div className="photo-border">
              <img className="photo-image" src={photo.image} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Sport;
