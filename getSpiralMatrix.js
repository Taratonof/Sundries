const getSpiralMatrix = (width, height, format = 'clockwise') => {

  const matrix = [];
  
  for (let i = 0; i < height; i += 1) {
    const matrixLine = [];
    for (let m = 0; m < width; m += 1) {
      matrixLine.push(0);
    }
    matrix.push(matrixLine);
  }

  let topBorder = 0;
  let bottomBorder = height - 1;
  let leftBorder = 0; 
  let rightBorder = width - 1;

  let y = 0;
  let x = 0;
  let direction = 'right';

  const initValue = (format === 'reverse') ? width * height - 1 : 0;
  const endValue = (format === 'reverse') ? 0 : width * height;
  
  for (let i = initValue; format === 'reverse' ? i > endValue : i < endValue; format === 'reverse' ? i -= 1 : i += 1) {
    matrix[y][x] = i;
    switch (direction) {
      case 'right':
        x += 1;
        if (x === rightBorder) {
          direction = 'bottom';
          topBorder += 1;
        }
        break;
      
      case 'bottom':
        y += 1; 
        if (y === bottomBorder) {
          direction = 'left';
          rightBorder -= 1;
        }
        break;

      case 'left':
        x -= 1;
        if (x === leftBorder) {
          direction = 'top';
          bottomBorder -= 1;
        }
        break;
      
      case 'top':
        y -= 1;
        if (y === topBorder) {
          direction = 'right';
          leftBorder += 1;
        }
        break;
    }
  }

  console.log(matrix);
  return matrix;
};