/*
function handleTimeUpdate(index) {
  const audioPlayer = document.querySelector(`#player${index}`);
  const width = Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + '%';
  document.querySelector(`#progress${index}`).style.width = width;
}

function handleOnEnded(index) {
  _resetProgress(index);
} 

function _resetProgress(index) {  
  document.querySelector(`#progress${index}`).style.width = '0%';
  document.querySelector(`#icon${index}`).classList.remove("fa-pause");
  document.querySelector(`#icon${index}`).classList.add("fa-play");
}

function handleClickPlayOrPause(index) {  
  const audioPlayer = document.querySelector(`#player${index}`);
  const iconPlayer = document.querySelector(`#icon${index}`);

  if (iconPlayer.classList.contains("fa-play")) {
    iconPlayer.classList.remove("fa-play");
    iconPlayer.classList.add("fa-pause");
    audioPlayer.play();
  } else {
    iconPlayer.classList.remove("fa-pause");
    iconPlayer.classList.add("fa-play");
    audioPlayer.pause();
  }
}

  <audio id="player${index}" src=${narration.audio} onEnded="handleOnEnded(${index})"
    onTimeUpdate="handleTimeUpdate(${index})">
  </audio>
  <div class="narration__play">
    <button onclick="handleClickPlayOrPause(${index})" class="narration__play--button">
      <i id="icon${index}" class="narration__play--icon fa fa-play"/></i>
    </button>
  </div>
  <div class="narration__progress">
    <div id="progress${index}" class="narration__progress--running" style="width: 0%"></div>
  </div>   
*/