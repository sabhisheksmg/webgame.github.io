let h = document.getElementById('bird');
let birdtop = 0;
let birdleft = 0;

/*
function c() {
    pheight += 10;
    p = pheight + 'px';
    pwidth += 10;
    p = pwidth + 'px';
}

function v() {
    pheight -= 10;
    p = pheight + 'px';
    pwidth -= 10;
    p = pwidth + 'px';
}*/

if (birdleft == 0 && birdtop == 0) {

    alert("START THE GAME");
}
let id = setInterval(anim, 50);

function anim() {
    if (birdtop >= 520) {
        //  clearInterval(id);
        alert("GAME OVER TRY AGAIN 1");
        clearInterval(id);
    } else {
        birdtop += 10;
        //   birdleft += 5;
        h.style.top = birdtop + 'px';
        // h.style.left = birdleft + 'px';
    }
}

function onim(e) {

    if (e.keyCode == 39) {
        birdleft += 15;
        h.style.left = birdleft + 'px';

        if (birdleft >= 480) {
            alert("GAME OVER TEY AGAIN 2");
        }
    }
    if (e.keyCode == 37) {
        birdleft -= 15;
        h.style.left = birdleft + 'px';

        if (birdleft <= -2) {
            alert("GAME OVER TRY AGAIN 3");

        }
    }
    if (e.keyCode == 38) {
        birdtop -= 15;
        h.style.top = birdtop + 'px';

        if (birdtop <= -17) {
            alert("GAME OVER TRY AGAIN 4");
        }
    }
    if (e.keyCode == 40) {
        birdtop += 15;
        h.style.top = birdtop + 'px';
    }

}
document.onkeydown = onim;
document.onkeyup = onim;
document.onkeypress = onim;