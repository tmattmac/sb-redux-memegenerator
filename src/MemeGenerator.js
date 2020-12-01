import React from 'react';
import { useSelector } from 'react-redux';
import MemeForm from './MemeForm';
import Meme from './Meme';
import './MemeGenerator.css';

const MemeGenerator = () => {
  const memes = useSelector(state => state.memes);

  return (
    <>
      <h1>Meme generator or whatever</h1>
      <MemeForm />
      <div class="MemeGenerator-container">
        {memes.map(meme => (
          <Meme key={meme.id} {...meme} />
        ))}
      </div>
    </>
  )
}

export default MemeGenerator;