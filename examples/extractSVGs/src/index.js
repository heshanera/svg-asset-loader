import watch from '../../assets/stop-watch.svg';
import tree from '../../assets/coconut-tree.svg';
import coding from '../../assets/coding.svg';
import settings from '../../assets/settings.svg';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
            <svg viewBox="${watch.viewBox}">
                <use href=${watch.href}></use>
            </svg>
            <svg viewBox="${tree.viewBox}">
                <use href=${tree.href}></use>
            </svg>
            <svg viewBox="${coding.viewBox}">
                <use href=${coding.href}></use>
            </svg>
            <svg viewBox="${settings.viewBox}">
                <use href=${settings.href}></use>
            </svg>
        `;
  }
});
