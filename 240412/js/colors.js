function LinksSetColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        alist[i].style.color = color;
        console.log(alist[i]);
        i = i + 1;
    }
}

function BodySetColor(color) {
    document.querySelector('body').style.color = color;
}

function BodySetBackgroudSetColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        BodySetBackgroudSetColor('black');
        BodySetColor('white')
        self.value = 'day'
        LinksSetColor('powderblue');
    } else {
        BodySetBackgroudSetColor('white');
        BodySetColor('black');
        self.value = 'night'
        LinksSetColor('blue');
    }
}

function setColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while ( i < alist.length) {
            alist[i].style.color = color;
            console.log(alist[i]);
            i = i + 1;
        }
    }
    
    setColor('blue')

    var Body = {
        setColor: function(color) {
     $('body').css('color', color);
      },
      setBackgroundColor: function(color) {
      $('body').css('backgroundColor', color);
      }
     }

    //         function nightDayHandler(self) {
// var target = document.querySelector('body');
//         if (self.value === 'night') {
//             target.style.backgroundColor = 'black';
//             target.style.color = 'white';
//             self.value = 'day'

//             var alist = document.querySelectorAll('a');
//             var i = 0;
//             while ( i < alist.length) {
//                     alist[i].style.color = 'powderblue';
//                     console.log(alist[i]);
//                     i = i + 1;
//                 }
//         } else {
//             target.style.backgroundColor = 'white';
//             target.style.color = 'black';
//             self.value = 'night'

//             var alist = document.querySelectorAll('a');
//             var i = 0;
//             while ( i < alist.length) {
//                     alist[i].style.color = 'blue';
//                     console.log(alist[i]);
//                     i = i + 1;
//                 }

//             }
// }