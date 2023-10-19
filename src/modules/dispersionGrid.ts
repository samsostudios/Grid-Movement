export const dispersionGrid = () => {
  const gridParent = document.querySelector('.section_bg-grid') as HTMLElement;
  const gridBlock = document.querySelector('.bg-grid_point') as HTMLElement;

  const gridPoints = calculateGrid();
  drawGrid(gridPoints[1]);
  resize();

  // Hover Effects
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    // console.log(mouseX, mouseY);
  });

  // console.log(mouseX, mouseY);

  const points = [...document.querySelectorAll('.bg-grid_point')];
  // for (const i in points) {
  //   const temp = points[i] as HTMLElement;

  //   temp.addEventListener('mouseenter', (e) => {
  //     // // console.log(e);
  //     // console.log('mouse', mouseX, mouseY);
  //     // console.log('dot', e.screenX, e.screenY);

  //     // console.log(e, e.pageY);
  //     console.log('dot', e.pageX, e.pageY);
  //     console.log('mouse', mouseX, mouseY);

  //     const movementX = e.pageX - mouseX;
  //     const movementY = e.pageY - mouseY;
  //     const movementMultiplier = 0.8;

  //     console.log('move', movementX, movementY);

  //     const target = e.target as HTMLElement;
  //     const targetDot = target.children[0] as HTMLElement;
  //     targetDot.style.backgroundColor = 'yellow';

  //     if (movementX < 50 && movementY < 50) {
  //       gsap.to(targetDot, {
  //         x: -movementX * movementMultiplier,
  //         y: -movementY * movementMultiplier,
  //       });

  //       setTimeout(() => {
  //         targetDot.style.backgroundColor = '#C9C7C3';
  //         gsap.to(targetDot, { x: 0, y: 0 });
  //       }, 500);
  //     }
  //   });
  // }

  // console.log(points);

  function calculateGrid() {
    const blockWidth = gridBlock.clientWidth;
    const blockHeight = gridBlock.clientHeight;
    const blockGap = Number(window.getComputedStyle(gridParent).rowGap.split('p')[0]);
    const blockWidthTotal = blockWidth + blockGap;
    const blockHeightTotal = blockHeight + blockGap;

    const colTotal = Math.round(gridParent.clientWidth / blockWidthTotal);
    const rowTotal = Math.floor(gridParent.clientHeight / blockHeightTotal);

    const pointTotal = colTotal * rowTotal;

    // console.log(gridParent.clientWidth, gridParent.clientHeight);
    // console.log(blockWidthTotal, blockHeightTotal, blockGap);
    console.log('col', colTotal, 'row', rowTotal, 'tot', pointTotal);

    return [pointTotal, colTotal, rowTotal];
  }

  function clearGrid() {
    console.log('clear');
    while (gridParent.firstChild) {
      console.log('i');
      gridParent.removeChild(gridParent.firstChild);
    }
  }

  function drawGrid(pointTotal: number) {
    console.log('here', pointTotal);
    clearGrid();
    console.log('drawing');
    for (let i = 0; i < pointTotal - 1; i++) {
      const tempBlock = gridBlock.cloneNode(true);
      gridParent.appendChild(tempBlock);
    }
  }

  function resize() {
    window.addEventListener('resize', () => {
      const gridPoints = calculateGrid();
      // console.log('tot', gridPoints);
      drawGrid(gridPoints[1]);
    });

    // window.addEventListener('resize', () => {
    //   clearTimeout(resizeTimeout);
    //   const resizeTimeout = setTimeout(() => {
    //     for (let i = 0; i < gridParent.childNodes.length - 1; i++) {
    //       const temp = gridParent.children[i] as HTMLElement;
    //       gridParent.removeChild(temp);
    //       // console.log(gridParent.children[i]);
    //     }
    //   }, 100);
    //   //   calculateGrid();
    // });
  }
};
