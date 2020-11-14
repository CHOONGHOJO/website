var Links = {
    setColor:function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length){
        alist[i].style.color = color;
        i = i + 1 ;
        }    
    }
}

var Body = {
    setColor : function (color) {
        document.querySelector('body').style.color = color;
     },
    setBackroundColor : function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler (self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackroundColor ('black');
        Body.setColor ('white');
        self.value = 'day';

        Links.setColor('yellow');
        
    } else {
        Body.setBackroundColor ('white');
        Body.setColor ('black');
        self.value = 'night';

        Links.setColor('blue');
    }
 }