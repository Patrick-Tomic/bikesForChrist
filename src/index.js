import './style.scss'
import photo from './logo.jpeg'
const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const logo = document.createElement('img')
logo.src = photo
logo.alt = 'logo'
logo.classList.add('logo')
header.appendChild(logo)
const heading = document.createElement('h1')
heading.innerHTML = 'Bikes For Christ'