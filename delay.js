(function() {

  var WAITFORIT;

  // style objects for styles bc lazy
  var divstyles = {
    'width' : '300px',
    'height' : '150px',
    'backgroundColor' : '#fff',
    'position' : 'fixed',
    'top' : '200px',
    'left' : '50%',
    'marginLeft' : '-150px',
    'border' : '7px solid #f181ad',
    'zIndex' : '100000'
  };

  var buttstyles = {
    'border': '2px solid pink',
    'background': 'white',
    'color': '#333',
    'cursor': 'pointer',
    'height': '40px',
    'fontSize': '16px',
    'margin' : '7px 0 7px 7px',
    'width': '30%'
  };

  // all the single elements, all the single elements
  var div = document.createElement('div');
      div.id = 'butts';

  var countdown = document.createElement('div');
      countdown.id = 'countdown';
      countdown.innerHTML = 'delay!';
      countdown.style.color = '#f181ad';
      countdown.style.fontFamily = 'sans-serif';
      countdown.style.fontSize = '72px';
      countdown.style.fontWeight = '600';
      countdown.style.textAlign = 'center';

  var butt1 = document.createElement('button');
      butt1.setAttribute('data-ms', '1');
      butt1.innerHTML = '1 sec';

  var butt2 = document.createElement('button');
      butt2.setAttribute('data-ms', '2');
      butt2.innerHTML = '2 secs';

  var butt3 = document.createElement('button');
      butt3.setAttribute('data-ms', '5');
      butt3.innerHTML = '5 secs';

  var butts = [butt1, butt2, butt3];

  var finalcountdown = function() {
    var elt = document.getElementById('countdown');

    if (elt.innerHTML === 'delay!') {
      num = elt.getAttribute('data-ms');
    } else {
      num = parseInt(elt.innerHTML, 10);
    }

    if (num > 0) {
      elt.innerHTML = num - 1;
    } else {
      window.clearTimeout(WAITFORIT);
      go();
    }
  };

  var go = function() {
    jQuery('#composer-message').trigger('change').trigger('submit');
    document.body.removeChild(document.getElementById('butts'));
    window.removeEventListener('keydown', remove, false);
  };

  var remove = function(e) {
    if (e.keyCode == 27) {
      document.body.removeChild(document.getElementById('butts'));
    }
    window.removeEventListener('keydown', remove, false);
  };

  // set styles on the container div
  for (var i in divstyles) {
    div.style[i] = divstyles[i];
  }

  for (var lol in butts) {
    // set styles on all the butts lol
    for (var style in buttstyles) {
      butts[lol].style[style] = buttstyles[style];
    }

    // add event listeners to the butts lol
    butts[lol].addEventListener('click', function(e) {
      var d = document.getElementById('butts'),
          bs = d.getElementsByTagName('button');

      for (butt in bs) {
        if (bs[butt] !== undefined && typeof bs[butt] === 'object') {
          bs[butt].style.display = 'none';
        }
      }

      var time = e.target.getAttribute('data-ms');
      countdown.innerHTML = time;

      WAITFORIT = window.setInterval(function() {
        finalcountdown();
      }, 1000);
    });

    // append the butts to the div lol
    div.appendChild(butts[lol]);
  }

  div.appendChild(countdown);

  window.addEventListener('keydown', remove, false);

  document.body.appendChild(div);

}());

