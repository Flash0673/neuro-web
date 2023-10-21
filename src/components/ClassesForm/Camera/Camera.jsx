import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './Camera.css';

const CameraForm = () => {
  const webcamRef = useRef(null);
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [captureInterval, setCaptureInterval] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const capturePhoto = () => {
    const capturedPhoto = webcamRef.current.getScreenshot();
    setCapturedPhotos(prevPhotos => [...prevPhotos, { photo: capturedPhoto }]);
  };

  const startCapture = () => {
    capturePhoto();
    const interval = setInterval(capturePhoto, 200);
    setCaptureInterval(interval);
  };

  const stopCapture = () => {
    if (captureInterval) {
      clearInterval(captureInterval);
      setCaptureInterval(null);
    }
  };

  const deletePhoto = (index) => {
    const updatedPhotos = [...capturedPhotos];
    updatedPhotos.splice(index, 1);
    setCapturedPhotos(updatedPhotos);
  };
//TODO HandleSavePhotos можно добавить отправку на сервер
  const handleSavePhotos = () => {
    if (capturedPhotos.length > 0) {
      console.log('Сохранение фотографий:', capturedPhotos);
    } else {
      console.log('Фотографии не были захвачены');
    }
  };

  return (
    <React.Fragment>
      <div className="card">
        <button onClick={() => setShowCamera(!showCamera)}>
          {showCamera ? 'Скрыть камеру' : 'Показать камеру'}
        </button>
        {showCamera && (
          <div>
            <Webcam ref={webcamRef} className="webcam" /> {/* Добавление класса для камеры */}
            <button className={'btn'} onMouseDown={startCapture} onMouseUp={stopCapture}>
              Сфотографировать (удерживание)
            </button>
          </div>
        )}
        <div className="photo-container">
          {capturedPhotos.map((photo, index) => (
            <div key={photo.id} className="photo-item">
              <img src={photo.photo} alt={`Photo ${index}`} />
              <button className={'btn'} onClick={() => deletePhoto(index)}>Delete</button>
            </div>
          ))}
          <button onClick={handleSavePhotos}>Сохранить все фото</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CameraForm;
