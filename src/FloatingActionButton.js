import React from 'react';
import './FloatingActionButton.css';
import BookOutline from './ICONS/book-outline.svg';
import LeafOutline from './ICONS/leaf-outline.svg';
import RefreshOutline from './ICONS/refresh-outline.svg';

const FloatingActionButton = () => {
  return (
    <div className="fab">
      <img src={BookOutline} alt="Open Book" className="fab-item"/>
      <img src={LeafOutline} alt="Tree" className="fab-item"/>
      <img src={RefreshOutline} alt="Refresh" className="fab-item"/>
    </div>
  );
};

export default FloatingActionButton;
