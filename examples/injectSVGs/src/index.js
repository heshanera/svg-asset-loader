import icon from '../../assets/stop-watch.svg';
import icon2 from '../../assets/coconut-tree.svg';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <svg viewBox="${icon.viewBox}">
        <use href="#${icon.id}"></use>
      </svg>
      <svg viewBox="${icon2.viewBox}">
        <use href="#${icon2.id}"></use>
      </svg>
    `;
  }
});
