import {getApi} from './state.js';
import './app-bar.js';
import './search-bar.js';
import '../style/style.css';




const subuh=document.querySelector('.Subuh')
const Dzuhur=document.querySelector('.Dzuhur')
const Ashar=document.querySelector('.Ashar')
const Maghrib=document.querySelector('.Maghrib')
const Isya=document.querySelector('.Isya')


document.addEventListener("DOMContentLoaded",async function(){
          let key='Surabaya'
          let url=`https://cors-anywhere.herokuapp.com/https://muslimsalat.com/${key}.json?key=f22e5ca70cd7c5ce7cf915d0fab4d8ee`;
    
          const data=await getApi(url)
          renderBox(data.items[0])      
        })


const btnSearch=document.querySelector('.btn-search')
btnSearch.addEventListener('click',async function(){

  const city=document.querySelector('search-bar').value

  let url=`https://cors-anywhere.herokuapp.com/https://muslimsalat.com/${city}.json?key=f22e5ca70cd7c5ce7cf915d0fab4d8ee`;
    
          const data=await getApi(url)
          renderBox(data.items[0])
          
          
      const locationName=document.querySelector('.location p')
      locationName.innerHTML=city


  })


  function renderBox(item){
    subuh.innerHTML=`<p>Subuh: ${item.fajr}</p>`
    Dzuhur.innerHTML=`<p>Dzuhur: ${item.dhuhr}</p>` 
    Ashar.innerHTML=`<p>Ashar: ${item.asr}</p>` 
    Maghrib.innerHTML=`<p>Maghrib: ${item.maghrib}</p>` 
    Isya.innerHTML=`<p>Isya: ${item.isha}</p>` 
  }


