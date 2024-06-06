import icon from '../../assets/stop-watch.svg';
import icon2 from '../../assets/coconut-tree.svg';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <img src=${icon} height="100px" width="100px" />
      <img src=${icon2} height="100px" width="100px" />
    `;
  }
});
