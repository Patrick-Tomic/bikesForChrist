import './style.scss'
import best from './best.jpg'
import small from './smallBus.jpg'
import winner from './winner.jpg'
import bg from './BGLogo.jpg'
import buildHome from './buildHome'
import photo from './logo.jpeg'
import yt from './yt.png'
import fb from './fb.jpg'
 
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
const reachUs = document.createElement('h3')
reachUs.innerHTML = 'Call Us: 813-533-9177'
 
const headingDiv = document.createElement('div')
headingDiv.appendChild(heading)
headingDiv.appendChild(reachUs)
 
headerContainer.appendChild(headingDiv)

const navbar = document.createElement('table')
const tr = document.createElement('tr')
for(let i = 0; i< 6; i++){
    const th = document.createElement('th')
    switch(i){
        case 0: 
            th.innerHTML = 'Home'
            th.addEventListener('click',()=>{
                main.innerHTML = ''
                buildHome()

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
const hebrews = document.createElement('p')
    hebrews.innerHTML = `And do not forget to do good and to share with others, for with such sacrifices God is pleased`
const h5 = document.createElement('h5')
h5.innerHTML = ' Hebrews 13:16'
headerContainer.appendChild(hebrews)
headerContainer.appendChild(h5)
header.appendChild(headerContainer)
const socials = document.createElement('div')
const socialsB = document.createElement('div')
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
const footerHead = document.createElement('h1')
const footerDiv = document.createElement('div')
footerHead.innerHTML = 'Bikes For Christ'
footerDiv.appendChild(footerHead)
const FooterP = document.createElement('p')
FooterP.innerHTML = 'Bikes For Christ is a 501 (C)(3) Tax-Exempt Organization.'
footerDiv.appendChild(FooterP)
footer.appendChild(footerDiv)
const footerFoot = document.createElement('div')
footerFoot.classList.add('foot')
const form = document.createElement('form')
const input = document.createElement('input')
input.type = 'email'
input.name = 'email'
input.placeholder = 'Email Address'
const label = document.createElement('label')
label.for = 'email'
label.innerHTML = 'Join our mailing list<br> Never miss an update'
form.appendChild(label)
form.appendChild(input)
const btn = document.createElement('input')
btn.type = 'submit'
btn.classList.add('submit')
btn.innerHTML = 'Submit'
 
form.appendChild(btn)
footerFoot.appendChild(form)
const imgDiv = document.createElement('div')
count = 0
const BG = document.createElement('img')
BG.id = 'BG'
BG.src = bg
footer.appendChild(BG)
while(count < 3){
    const img = document.createElement('img')
    switch(count){
        case 0:
            img.src =  winner
            imgDiv.appendChild(img)
            count++
            break
        case 1:
            img.src =small
            imgDiv.appendChild(img)
            count++
            break
        case 2:
            img.src = best
            imgDiv.appendChild(img)
            count++
            break
    }
}
imgDiv.classList.add('imgs')
footerFoot.appendChild(imgDiv)
footer.appendChild(footerFoot)
