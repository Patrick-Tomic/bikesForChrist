import buildImageSlider from "./slider.js"
export default function buildHome(){
    const main = document.querySelector('main')
    const donateDiv = document.createElement('div')
    donateDiv.classList.add('donate')
  
    const aboutUs = document.createElement('div')
    aboutUs.classList.add('about')
    const aboutP = document.createElement('p')
    const aboutHead = document.createElement('h2')
    aboutHead.innerHTML = 'About Us'
    aboutP.innerHTML = `Bikes For Christ was started in 2016 with a commitment to helping those in need while also sharing the love of God. Our organization has quickly grown to encompass providing transportation across Hillsborough, Pinellas, Polk and Pasco counties with a mission to one day be nationwide. By showing God's love through providingbicycles for those in need, we hope to lead them to a life in His eternal kingdom.`
    aboutUs.appendChild(aboutHead)
    aboutUs.appendChild(aboutP)
    main.appendChild(aboutUs)
    const h1 = document.createElement('h1')
    const donateAnchor = document.createElement('button')
    donateAnchor.innerHTML = 'Donate today!'
    donateAnchor.addEventListener('click',()=>{
        main.innerHTML = ''
    })
    h1.appendChild(donateAnchor)
    donateDiv.appendChild(h1)
     
    main.appendChild(donateDiv)
    buildImageSlider()
  }