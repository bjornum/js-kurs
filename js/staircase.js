function StairCase(x) {

    var stairs = "";
    var space = "-";
    var hash = "a";
    var count = x;
    var array = []
  
    for (var b = 1; b <= count; b++) {
          document.write(space.repeat(count-b).concat(hash.repeat(b)));
      document.write("<br>");
  
    } 
    
    console.log(array);
  }
  
  StairCase(8);