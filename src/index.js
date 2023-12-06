import './style.scss'
import buildHome from './buildHome'
import photo from './logo.jpeg'
import yt from './yt.png'
import fb from './fb.jpg'
import a from './imgs/bike.jpg'
import twitter from './twitter.png'
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
const headerContainer = document.createElement('div')
headerContainer.classList.add('headContainer')
heading.classList.add('title')
headerContainer.appendChild(heading)
const navbar = document.createElement('table')
const tr = document.createElement('tr')
for(let i = 0; i< 6; i++){
    const th = document.createElement('th')
    switch(i){
        case 0: 
            th.innerHTML = 'Home'
            th.addEventListener('click',()=>{
                main.innerHTML = ''

            })
            tr.appendChild(th)
            break
        case 1: 
            th.innerHTML = 'About'
            tr.appendChild(th)
            break
        case 2:
            th.innerHTML = 'Missions'
            tr.appendChild(th)
            break
        case 3:
            th.innerHTML = 'Volunteer'
            th.classList.add('volunteer')
           /*  const td = document.createElement('td')
            td.innerHTML = 'Help List'
            th.appendChild(td) */
            tr.appendChild(th)
            break
        case 4:
            th.innerHTML = 'Events'
            tr.appendChild(th)
            break
        case 5: 
            th.innerHTML = 'Contact'
            tr.appendChild(th)
            break
                }
            }
        navbar.appendChild(tr)
headerContainer.appendChild(navbar)
header.appendChild(headerContainer)
const socials = document.createElement('div')
let count = 0
while(count <3 ){
    const anchor = document.createElement('a')
    const img = document.createElement('img')
    switch(count){
        case 0:
            img.src = fb
            img.alt = 'Facebook'
            img.title ='Facebook'
        img.addEventListener('click',()=>{
            window.location = 'https://www.facebook.com/Bicycles4Christ/'
        })
        socials.appendChild(img)
        break
        case 1:
            img.src = yt
            img.alt = 'youtube'
            img.title ='Youtube'
        img.addEventListener('click',()=>{
            window.location = 'https://www.youtube.com/channel/UCCPQ2ZBmAj9flOeGE508Wvw'
        })
        socials.appendChild(img)
        break
        case 2:
            img.src = twitter
            img.alt = 'twitter'
            img.title = 'Twitter'
            img.addEventListener('click',()=>{
                window.location = 'https://twitter.com/Bikes4Christ'
            })
             
            socials.appendChild(img)
            break
    }
   
    count++
}
socials.classList.add('socials')
header.appendChild(socials)
buildHome()
