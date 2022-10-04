const btn = document.querySelector('#v2');


btn.onclick = function() {
    console.log ("You Clicked Me!");
    console.log ("I Hope it worked!");

}

function scream(){
    console.log("AHHHH!!!!");
    console.log("STOP TOUCHING ME!!");
}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("Clicked!")
})

// the different events for addEventListener can be found
// https://developer.mozilla.org/en-US/docs/Web/Events


function twist() {
    console.log('TWIST!!');
}

function shout() {
    console.log('SHOUT!!');
}

const tasButton = document.querySelector('#tas');

// tasButton.onlclick = twist;
// tasButton.onlclick = shout;


// The advantage of addEventListener over direct property reference (see above)
// is that you cannot assign more than one function/item to a property.
// In the above example, only shout will run. However, below both will run
// because addEventListener allows you to call as many objects/functions as you would like
// when the event occurs

tasButton.addEventListener('click', twist, {once : true})
tasButton.addEventListener('click', shout)

// addEventListener is also more feature rich with various additional arguments
// and options https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener