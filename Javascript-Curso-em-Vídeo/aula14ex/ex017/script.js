function tabuada(){
    var num = document.getElementById("txtn")
    var tab = document.getElementById("seltab")

    if(num.value.lenght==0){
       alert("Digite um número")
    }else{
       let n = Number(num.value)
       tab.innerHTML = " "
       for(c=1;c<=10;c++){
          let item = document.createElement("option")
          item.text = `${n} x ${c}= ${n*c}`
          tab.appendChild(item)
       }
    }
}