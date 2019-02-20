/**
 *
 * ImageLogo
 *
 */

import React from 'react';
import source from "./../../images/logo.svg";

function ImageLogo() {
  return (
    <div>
      <img src={source} alt="Adopets" />
    </div>
  );
}

ImageLogo.propTypes = {};

export default ImageLogo;
