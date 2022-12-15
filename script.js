document.addEventListener('DOMContentLoaded', function() {

  let wrapper = document.getElementById('wrapper');

  let topLayer = wrapper.querySelector('.top');

  let handle = wrapper.querySelector('.handle');

  let skew = 0;

  let delta = 0;

  

    if(wrapper.className.indexOf('skewed') != -1) {

    skew = 1000;

  }

  wrapper.addEventListener('mousemove', function(event) {

    delta = (event.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = event.clientX + delta + 'px';

    topLayer.style.width = event.clientX + skew + delta + 'px';

  });

});