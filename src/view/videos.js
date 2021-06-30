export default () => {
  const videosToMotivate = `

<h2 class="text-center">Solo videos motivacionales</h2>
<figure class="text-center">
<img class="image" src="https://i.pinimg.com/originals/4f/77/4a/4f774a5d564ed629183a63cd8425e359.gif" alt="init image">
</figure>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = videosToMotivate;

  return divElemt;
};
