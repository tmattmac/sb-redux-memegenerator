import React from 'react';
import { useDispatch } from 'react-redux';
import useFormData from './useForm';
import './MemeForm.css';
import { v4 as uuid } from 'uuid';

const MemeForm = () => {
  const { formData, resetForm, updateFormData } =
    useFormData(['topText', 'bottomText', 'imgUrl']);
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_MEME',
      payload: { ...formData, id: uuid() }
    });
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit} class="MemeForm">
      <label>Top Text:
        <input
          placeholder="Top Text"
          onChange={updateFormData}
          name="topText"
          value={formData.topText}
        />
      </label>
      <label>Bottom Text:
        <input
          placeholder="Bottom Text"
          onChange={updateFormData}
          name="bottomText"
          value={formData.bottomText}
        />
      </label>
      <label>Image URL:
        <input
          placeholder="Image URL"
          onChange={updateFormData}
          name="imgUrl"
          value={formData.imgUrl}
        />
      </label>
      <button disabled={!Boolean(formData.imgUrl)}>Add Meme</button>
    </form>
  )
}

export default MemeForm;