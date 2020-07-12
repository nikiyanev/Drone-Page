let photosSection = document.querySelector('.block');
let videosSection = document.querySelector('.videos-section');

function switchVisiblePhotos() {
  if(!photosSection) return;

  if (getComputedStyle(photosSection).display == 'none') {
    photosSection.style.display = 'block';
    videosSection.style.display = 'none';
  } 
}

function switchVisibleVideos() {
    if(!videosSection) return;
    
    
   if (getComputedStyle(videosSection).display == 'none') {
      photosSection.style.display = 'none';
      videosSection.style.display = 'block';
    }
}

  if (localStorage.key(0) === "isVideos" ) {
    photosSection.style.display = 'none';
    videosSection.style.display = 'block';

    localStorage.removeItem("isVideos");
  }

  
document.getElementById('photos').addEventListener('click', switchVisiblePhotos);
document.getElementById('videos').addEventListener('click', switchVisibleVideos);




