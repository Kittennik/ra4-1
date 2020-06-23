import React, { useState } from 'react';
import hexToRgb from '../hexToRgb';

const correctValue = /#[a-f0-9]{6}/gi;

export default function ColorConverter() {
  const [colors, setColors] = useState({
    hex: '#',
    rgb: '',
    backgroundColor: '#000000',
  });
   
  const changeColors = ({ target }) => {
    if (target.value.length < 7) {
      setColors((prevColors) => ({ ...prevColors, hex: target.value }));
      return;
    }

    if (target.value.match(correctValue)) {
      const rgbColor = hexToRgb(target.value);
      setColors({
        hex: target.value,
        rgb: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`,
        backgroundColor: target.value,
      });
    } else {
      setColors((prevColors) => ({ ...prevColors, rgb: 'Ошибка!' }));
    }
  };

  return (
    <div className="color-element" style={{ backgroundColor: colors.backgroundColor }}>
      <input type="text" name="hexColor" value={colors.hex} onChange={changeColors} />
      <input type="text" name="rgbColor" value={colors.rgb} onChange={changeColors} />
    </div>
  );
}
