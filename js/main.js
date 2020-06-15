document.querySelector("#view").innerHTML += `
  ${narrations.map((narration, index) => `
      <div class="narration">
        <div class="narration__info">
          <p class="narration_info--game">${narration.game}</p>
          <p>${narration.goal}</p>  
        </div>
        <div class="narration__audio">
          <audio id="player-${index}" src=${narration.audio} controls "/>
        </div>
      </div>` 
    ).join('')}`;