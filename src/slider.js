
import a from './imgs/bike.jpg'
import b from './imgs/bikeB.jpg'
import c from './imgs/bikeC.jpg'
import d from './imgs/bikeD.jpg'
import e from './imgs/bikeE.jpg'
import f from './imgs/bikeF.jpg'
import g from './imgs/bikeG.jpg'
import h from './imgs/bikeH.jpg'
import i from './imgs/bikeI.jpg'
import j from './imgs/bikeJ.jpg'
import k from './imgs/bikeK.png'
import m from './imgs/bikeM.png'
import n from './imgs/bikeN.jpg'
import o from './imgs/bikeO.jpg'
import p from './imgs/bikeP.jpg'
import q from './imgs/bikeQ.jpg'
 
import s from './imgs/bikeS.jpg'
import t from './imgs/bikeT.jpg'
import u from './imgs/bikeU.jpg'
import v from './imgs/bikeV.jpg'
import w from './imgs/bikeW.jpg'
import x from './imgs/bikeX.jpg'
import l from './imgs/bikeL.jpg' 
export default function buildImageSlider(){
    const bikes = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,u,v,w,x ]
    const donate = document.querySelector('.donate')
    const slider = document.createElement('div')
    slider.classList.add('imgSlider')
    const wrap = document.createElement('div')
    wrap.classList.add('sliderWrap')
    for( let i = 0; i < bikes.length; i++){
        const image = document.createElement('img')
        image.src = bikes[i]
        slider.appendChild(image)
    }
    let count = 0
    var interval = setInterval(()=>{
        let vw = 26
        if(count ==-20){
            count = 0
            vw = vw*count
            slider.style.transition = 'none'
            slider.style.transform = `translateX(${vw}vw)`
        }else{
            count--
            vw = vw*count
            slider.style.transform = `translateX(${vw}vw)`
            slider.style.transition = 'transform 1s ease-in-out'
            }
    },5000)
    wrap.appendChild(slider)
    donate.appendChild(wrap)
}
 