import app from './app'

function main() {
  const content = document.createElement('div');
  const heading = document.createElement('h1');
  heading.innerHTML = 'Hello!!';
  content.appendChild(heading);
  content.appendChild(app());
  return content;
}

document.getElementById('root').appendChild(main());