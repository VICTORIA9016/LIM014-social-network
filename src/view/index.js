import viewHome from './home.js';
import picturesToMotivate from './pictures.js';
import videosToSmile from './videos.js';
import comment from './groups.js';
import Different from './404.js';

// eslint-disable-next-line no-use-before-define

const components = {
  home: viewHome,
  pictures: picturesToMotivate,
  videos: videosToSmile,
  groups: comment,
  different: Different,
};
export { components };