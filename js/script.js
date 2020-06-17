let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let playBtn = document.querySelector('.autoplay');
let playIcon = playBtn.querySelector('i');
let imgContainer = document.querySelector('.slides img')
let images = ['img/img1.jpg',
			'img/img2.jpg', 
			'img/img3.jpg', 
			'img/img4.jpg'];
let current = 0;
let total = images.length;
let isPlay = false;

(function init() {
	imgContainer.src = images[current];
})()

function nextSlide() {
	current++;
	if (current >= total) {
		current = 0;
	}
	imgContainer.src = images[current];
}

nextBtn.addEventListener('click', nextSlide)

prevBtn.addEventListener('click', function() {
	current--;
	if (current < 0) {
		current = total - 1;
	}
	imgContainer.src = images[current];
})

let interval;
playBtn.addEventListener('click', function() {
	playIcon.classList.toggle('fa-pause');
	playIcon.classList.toggle('fa-play');
	if(isPlay) {
		clearInterval(interval);
	} else {
		interval = setInterval(nextSlide, 1500)
	}
	isPlay = !isPlay;
})