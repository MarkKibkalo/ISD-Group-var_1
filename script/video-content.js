// document.querySelector('.project__item-link').addEventListener('mouseover', function(event)
// {   
//   document.body.style.backgroundColor = '#000'
// }, false);

// document.querySelector('.project__item-link').addEventListener('mouseout', function(event)
// {   
//   document.body.style.backgroundColor = '#fdfbf6'
// }, false);  

let projectContent = document.querySelectorAll('[data-project]')
let contentProjectsMedia = document.querySelectorAll('[data-project-content]')
let selectedProject = null;
let video = null;

projectContent.forEach(function (item) {
   item.addEventListener('mouseover', function (obj) {
      // выбрать нужный contentProjectMedia и показать его//
      // contentProjectMedia.classList.remove('hidden')
      if(video !== null) video.classList.add('hidden')
      video = document.querySelector('#' + obj.target.attributes['data-project'].value);
      video.classList.remove('hidden')
   })
})