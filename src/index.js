import React from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './index.css';

const contaner = document.getElementById('root');
const root = createRoot(contaner);
root.render(
  <>
    <GifExpertApp />
  </>
);
