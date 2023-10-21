import React, { useRef, useState } from 'react';
import { Camera } from './Camera';
import { Photo } from './Photo';

const ClassesForm = () => {
  const [forms, setForms] = useState([]);
  const [formIdCounter, setFormIdCounter] = useState(1);

  const addForm = () => {
    const newForm = { id: formIdCounter, photos: [] };
    setFormIdCounter(formIdCounter + 1);
    setForms(prevForms => [...prevForms, newForm]);
  };

  const deleteForm = formId => {
    setForms(prevForms => prevForms.filter(form => form.id !== formId));
  };

  const TakePhoto = formId => {
    const webcamRef = useRef(null);
    const photo = webcamRef.current.getScreenshot();

    setForms(prevForms => {
      return prevForms.map(form => {
        if (form.id === formId) {
          form.photos.push(photo);
        }
        return form;
      });
    });
  };

  const deletePhoto = (formId, photoIndex) => {
    setForms(prevForms => {
      return prevForms.map(form => {
        if (form.id === formId) {
          form.photos.splice(photoIndex, 1);
        }
        return form;
      });
    });
  };

  return (
    <React.Fragment>
      {forms.map(form => (
        <div key={form.id}>
          <Photo photos={form.photos} formId={form.id} deletePhoto={deletePhoto} />
          <button className='btn' onClick={() => deleteForm(form.id)}>Удалить форму</button>
          <Camera formId={form.id} TakePhoto={() => TakePhoto(form.id)} />
        </div>
      ))}
      <button className='btn' onClick={addForm}>Добавить форму</button>
    </React.Fragment>
  );
};

export default ClassesForm;
