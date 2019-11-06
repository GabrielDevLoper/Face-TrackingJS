function init(){
    const video = document.querySelector("#video");
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    const tracker = new tracking.ObjectTracker("face");

    tracking.track("#video", tracker, { camera: true});

    tracker.on("track", event =>{
        //console.log(event);
        context.clearRect(1,1, canvas.width, canvas.height);
        event.data.forEach(rect => {
            context.strokeStyle = "#ff0000";
            context.lineWidth = 2;
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        })
    });
}
window.onload = init();