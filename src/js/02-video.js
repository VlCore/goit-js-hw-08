import Vimeo from '@vimeo/player'

import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe')
const player = new Vimeo('vimeo-player')
const saveCurrentTime = throttle(function(currentTime) {
    localStorage.setItem('"videoplayer-current-time"', currentTime)
}, 1000)

player.on('timeupdate', function(data) {
    const currentTime = data.seconds
    saveCurrentTime(currentTime)
})

window.addEventListener('DOMContentLoaded', function() {
    const currentTime = this.localStorage.getItem('"videoplayer-current-time"')
    if (currentTime) {
        player.setCurrentTime(currentTime)
    }
})