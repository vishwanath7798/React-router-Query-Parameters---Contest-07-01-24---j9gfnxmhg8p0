import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Child from './Child';

const Shapes = () => {
  const location = useLocation();
  const { shape, color } = new URLSearchParams(location.search);

  return (
    <div id='shapesdiv'>
      <h2>Shapes</h2>
      <ul className="navbar-shapes">
        <li>
          <Link to="/shapes?shape=square&color=Blue">Blue Square</Link>
        </li>
        <li>
          <Link to="/shapes?shape=square&color=Red">Red Square</Link>
        </li>
        <li>
          <Link to="/shapes?shape=circle&color=Blue">Blue Circle</Link>
        </li>
        <li>
          <Link to="/shapes?shape=circle&color=Red">Red Circle</Link>
        </li>
      </ul>

      <Child shape={shape} color={color} />
    </div>
  );
};

export default Shapes;
