function openWindow(id) { 
    if(document.getElementById(id).style.display == 'none' ){
        
        document.getElementById(id).style.display = 'inline'; 
    }
    else {
        document.getElementById(id).style.display = 'none';
   }
} 


function clearcolor(x, y){
    document.getElementById(x).style.opacity=1.0;
    document.getElementById(y).className='yellow-back';
}

function blurcolor(x, y){
    document.getElementById(x).style.opacity=0.7;
    document.getElementById(y).className='blue-back';
}

 