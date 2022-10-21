import img from '../public/download.jpg?sizes[]=300,sizes[]=600,sizes[]=1024';

const imgElement = document.createElement('img');
imgElement.src = img.src;
imgElement.srcset = img.srcSet;
imgElement.sizes="(min-width: 1024px) 1024px, 100vw"
imgElement.loading="lazy"
document.getElementById('app').appendChild(imgElement);