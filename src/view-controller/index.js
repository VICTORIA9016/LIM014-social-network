import { components } from '../view/index.js';

export const changeTmp = (hash) => {
  const id = hash.split('/')[1];
  const sectionMain = document.getElementById('container');
  container.innerHTML = '';

  switch (hash) {
    case '#/home':
    {
      return sectionMain.appendChild(components.home());
    }
    case '#/pictures':
    {
      return sectionMain.appendChild(components.pictures());
    }
    case '#/videos':
    {
      return sectionMain.appendChild(components.videos());
    }
    case '#/groups':
    {
      return sectionMain.appendChild(components.groups());
    }
    default:
      return sectionMain.appendChild(components.different());
  }
};
