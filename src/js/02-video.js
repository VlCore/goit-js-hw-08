import Vimeo from '@vimeo/player'

import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe')
const player = new Vimeo('vimeo-player')
const saveCurrentTime = function(currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime)
}

// const saveCurrentTimeThrottle = throttle(saveCurrentTime, 1000)

player.on('timeupdate', throttle(function(data) {
    const currentTime = data.seconds.toFixed()
    saveCurrentTime(currentTime)
}, 1000))

window.addEventListener('DOMContentLoaded', function() {
    const currentTime = this.localStorage.getItem('videoplayer-current-time')
    if (currentTime) {
        player.setCurrentTime(currentTime)
    }
})