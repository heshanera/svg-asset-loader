import watch from '../../assets/stop-watch.svg';
import tree from '../../assets/coconut-tree.svg';
import coding from '../../assets/coding.svg';
import settings from '../../assets/settings.svg';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <img src=${watch} height="100px" width="100px" />
      <img src=${tree} height="100px" width="100px" />
      <img src=${coding} height="100px" width="100px" />
      <img src=${settings} height="100px" width="100px" />
    `;
  }
});
