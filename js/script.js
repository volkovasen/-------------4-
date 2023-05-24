// cursor
const cursorRounded = document.querySelector('.cursor-dot-outline .cursor-video-outline');
const cursorPointed = document.querySelector('.cursor-dot');
var cursor = {
delay: 8,
_x: 0,
_y: 0,
endX: (window.innerWidth / 2),
endY: (window.innerHeight / 2),
cursorVisible: true,
cursorEnlarged: false,
$dot: document.querySelector('.cursor-dot'),
$outline: document.querySelector('.cursor-dot-outline'),
init: function() {
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;
    this.setupEventListeners();
    this.animateDotOutline();
},
setupEventListeners: function() {
    var self = this;
    document.querySelectorAll('a').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
    });
    document.querySelectorAll('button').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
    });
    document.querySelectorAll('label').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
    });
    document.querySelectorAll('input').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
    });
    document.addEventListener('mousedown', function() {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
    });
    document.addEventListener('mouseup', function() {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
    });
    document.addEventListener('mousemove', function(e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();

        self.endX = e.clientX;
        self.endY = e.clientY;
        self.$dot.style.top = self.endY + 'px';
        self.$dot.style.left = self.endX + 'px';
    });
    document.addEventListener('mouseenter', function(e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
    });
    document.addEventListener('mouseleave', function(e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
    });
},
animateDotOutline: function() {
    var self = this;
    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + 'px';
    self.$outline.style.left = self._x + 'px';
    requestAnimationFrame(this.animateDotOutline.bind(self));
},
toggleCursorSize: function() {
    var self = this;
    
    if (self.cursorEnlarged) {
        self.$dot.style.transform = "translate(-50%, -50%) scale(0.20)";
        self.$outline.style.transform = 'translate(-50%, -50%) scale(0)';
    } else {
        self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
        self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
    }
},
toggleCursorVisibility: function() {
    var self = this;
    
    if (self.cursorVisible) {
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
    } else {
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
    }
}
}
cursor.init();
// menu
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.container').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.menu').clientHeight <= scrollDistance) {
            document.querySelectorAll('.menu a').forEach((el) => {
                if (el.classList.contains('menu__active')) {
                    el.classList.remove('menu__active');
                }
            });
            document.querySelectorAll('.menu li')[i].querySelector('a').classList.add('menu__active');
        }
    });
});
// smoth menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0px";
  } else {
    document.getElementById("nav").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
// rotate star
const png = document.querySelector('.rotate__star .rotate__star-img');
window.addEventListener("scroll", function(){
  png.style.transform=`rotate(${window.scrollY * 0.22}deg)`
});
// menu burger
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}



// video btn
const btnOk = document.querySelector('.case__btn');
const wrapperVideo = document.getElementById('.case-video');

btnOk.addEventListener('click',function(){
  wrapperVideo.play();
});
  