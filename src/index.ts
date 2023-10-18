import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// mainJS ///');

  const gridParent = document.querySelector('.section_bg-grid') as HTMLElement;
  const gridBlock = document.querySelector('.bg-grid_point') as HTMLElement;

  const blockWidth = gridBlock.clientWidth;
  const blockheight = gridBlock.clientHeight;

  const colTotal = Math.floor(gridParent.clientWidth / blockWidth);
  const rowTotal = Math.floor(gridParent.clientHeight / blockheight);

  const pointTotal = colTotal * rowTotal;

  console.log(blockWidth, blockheight);

  console.log('col', colTotal, 'row', rowTotal, 'tot', pointTotal);

  for (let i = 0; i < pointTotal - 1; i++) {
    const tempBlock = gridBlock.cloneNode(true);
    gridParent.appendChild(tempBlock);
  }

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
  for (const i in points) {
    const temp = points[i] as HTMLElement;

    temp.addEventListener('mouseenter', (e) => {
      // // console.log(e);
      // console.log('mouse', mouseX, mouseY);
      // console.log('dot', e.screenX, e.screenY);

      // console.log(e, e.pageY);
      console.log('dot', e.pageX, e.pageY);
      console.log('mouse', mouseX, mouseY);

      const movementX = e.pageX - mouseX;
      const movementY = e.pageY - mouseY;
      const movementMultiplier = 0.8;

      console.log('move', movementX, movementY);

      const target = e.target as HTMLElement;
      const targetDot = target.children[0] as HTMLElement;
      targetDot.style.backgroundColor = 'yellow';

      if (movementX < 50 && movementY < 50) {
        gsap.to(targetDot, {
          x: -movementX * movementMultiplier,
          y: -movementY * movementMultiplier,
        });

        setTimeout(() => {
          targetDot.style.backgroundColor = '#C9C7C3';
          gsap.to(targetDot, { x: 0, y: 0 });
        }, 500);
      }
    });
  }

  // console.log(points);
});
