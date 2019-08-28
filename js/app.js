console.log("Hey there! What brings you to these parts?");

var jobs = document.querySelectorAll('.job');

for (var i = 0; i < jobs.length; i++) {
  jobs[i].addEventListener("click", function() {
    //event.preventDefault();

    var wrap = this;
    var list = wrap.querySelector('.pts');
    console.log(list);
  	if (!wrap.classList.contains('active')) {

      wrap.classList.add('active');
      list.style.height = 'auto';
      var height = list.clientHeight + 'px';
      list.style.height = '0px';

      setTimeout(function () {
        list.style.height = height;
      }, 0);
    } else {
      var height = list.clientHeight + 'px';
      console.log(height);
      list.style.height = height;
      console.log("ping");
      setTimeout(function () {
        list.style.height = '0px';
      }, 0);

      list.addEventListener('transitionend', function () {
        console.log("transitionend");
        console.log(wrap.classList);
        wrap.classList.remove('active');
      }, {
        once: true
      });
    }
  });
}


var experience = document.querySelectorAll('.experience');
for (var i = 0; i < experience.length; i++) {
  experience[i].addEventListener("click", function(e) {

  	event.preventDefault();

    var wrap = this;
    var list = wrap.querySelector('ul');
  	if (!wrap.classList.contains('active')) {

      wrap.classList.add('active');

      list.style.height = 'auto';

      var height = list.clientHeight + 'px';

      list.style.height = '0px';

      setTimeout(function () {
        list.style.height = height;
      }, 0);
    } else {
      list.style.height = '0px';

      list.addEventListener('transitionend', function () {
        wrap.classList.remove('active');
      }, {
        once: true
      });
    }
  });
}
