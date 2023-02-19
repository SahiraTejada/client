
document.querySelector('.cta').addEventListener('click', (e) => {
    document.querySelector('.cta').classList.add('hide');
    document.querySelector('.wifi-loader-container').classList.remove('hide');

    setTimeout(StopLoader, 5000);
    function StopLoader() {
      document.querySelector('.wifi-loader-container').classList.add('hide');
      var file_size = 127,
      start = performance.now(),
      time = 0,
      end =0,
      xmlhttp = new XMLHttpRequest(),
      result =0;
      xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200 ){
        end = performance.now();
        time = (end - start)/1000;
        result = (file_size/time/1000*8).toFixed(2);
        document.querySelector('.speed').innerHTML = result + ' Mbps';
      } 
    }
    xmlhttp.open('GET','https://codepen.io/informiho/pen/CuGJI.html',true);
    xmlhttp.send();
    }
  }
)  
  
  