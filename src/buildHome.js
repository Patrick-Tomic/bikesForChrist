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
    const visionHead = document.createElement('h2')
    visionHead.innerHTML = 'Our Vision'
    const vision = document.createElement('p')
    vision.innerHTML = 'Our vision is simple... Provide love and compassion to people while also tending to their spiritual needs so that each individual we touch has a chance to learn and grow in Christ'
    aboutUs.appendChild(visionHead)
    aboutUs.appendChild(vision)
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
    const scriptDiv = document.createElement('div')
    scriptDiv.classList.add('scriptDiv')
    const script = document.createElement('p')
    script.classList.add('script')
    script.innerHTML = 'Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute'
    scriptDiv.appendChild(script)
   const scriptTag = document.createElement('h4')
    scriptTag.innerHTML = 'Psalm 82:3'
    scriptTag.addEventListener('click',()=>{
        window.location = 'https://www.bible.com/bible/59/PSA.82.3.ESV'
    })
    scriptDiv.appendChild(scriptTag)
    main.appendChild(scriptDiv)
    const iframe = document.createElement('iframe')
    const videoDiv = document.createElement('div')
    videoDiv.classList.add('videoDiv')
    iframe.src = "https://www.youtube.com/embed/q-lRec57pOg?si=6W7Ao2lHXz_Za78k" 
    iframe.title = 'Bikes For Christ'
    videoDiv.appendChild(iframe)
    const videoDescription = document.createElement('div')
    videoDescription.classList.add('description')
    const vidHeader = document.createElement('h3')
    vidHeader.innerHTML = 'Who we are'
    videoDescription.appendChild(vidHeader)
    const vidParagraph = document.createElement('p')
    vidParagraph.innerHTML = `We provide donated bicycles to the needy, veterans, underprivileged children and seniors while also ministering to their spiritual needs and sharing God's love with them `
    videoDescription.appendChild(vidParagraph)
    videoDiv.appendChild((videoDescription))
    main.appendChild(videoDiv)
  }