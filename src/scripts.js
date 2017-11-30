// Every second, move the video around! Note: this won't work on
// mobile, you can't move the video around there.
setInterval(function () {
    mixer.display.moveVideo({
        top: Math.random() * 100,
        bottom: Math.random() * 100,
        left: Math.random() * 100,
        right: Math.random() * 100,
    });
}, 1000);

// Whenever someone clicks on "Hello World", we'll send an event
// to the game client on the control ID "title"
document.getElementById('title').onclick = function (event) {
    mixer.socket.call('giveInput', {
        controlID: 'title',
        event: 'click',
        button:  event.button,
    });
};

// You can read a full set of docs for the `mixer` library at:
// https://<todo>
// Talk to us on Discord if you have any questions! discord.gg/mixer
