import _ from 'lodash';
import './component.css';
import Swatch from './a1.png';
import Data from './data.json';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', Data.first], ' ');
  element.classList.add('component');

  var myIcon = new Image();
  myIcon.src = Swatch;
  myIcon.style.width = '36px';
  myIcon.style.height = '36px';

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
