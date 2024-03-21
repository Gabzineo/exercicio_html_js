const res = window.document.querySelector('.res')
 
 function comparasion(){
    const vl1 = window.document.getElementById('txtn1');
    const vl2 = window.document.getElementById('txtn2');
    const n1 = Number(vl1.value);
    const n2 = Number(vl2.value);
    if(n1 >= n2 ){
    res.innerHTML = 'O segundo valor é <b>Menor</b> do que o o primeiro valor'
    res.style.backgroundColor = "red";
    res.style.border = '2px solid black';
    }else{
     res.innerHTML = 'O segundo valor é <b>Maior</b> do que o primeiro valor'
     res.style.backgroundColor = "#33ff00";
      res.style.border = '2px solid black';
    }
 }

 