import { dispersionGrid } from './modules/dispersionGrid';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// mainJS ///');

  dispersionGrid();
});
