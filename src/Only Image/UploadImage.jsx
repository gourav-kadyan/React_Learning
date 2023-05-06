//create a component upload only image display the image in square box and display in browser you can also use multiple images at a same time

import React, { useState } from "react";

function UploadImage() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const images = Array.from(event.target.files);
    const validImages = images.filter((image) =>
      image.type.startsWith("image/")
    );
    setSelectedImages(validImages.map((image) => URL.createObjectURL(image)));
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {selectedImages.map((image) => (
          <div key={image} style={{ width: 100, height: 100, margin: 5 }}>
            <img src={image} alt="selected" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadImage;
