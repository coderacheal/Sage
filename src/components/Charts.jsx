import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Navbar from './NavBar';

const Charts = () => (
  <div>
    <Navbar />
    <div>
      <Link to="/">Back</Link>
      <Bar />
    </div>
  </div>
);

export default Charts;
