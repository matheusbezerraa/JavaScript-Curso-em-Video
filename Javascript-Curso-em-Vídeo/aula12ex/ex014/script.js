function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'fotodemanhã.png'
        document.body.style.background = '#F0E68C'
    }else if(hora >12 && hora <18){
        img.src = 'fotodetarde.png'
        document.body.style.background = '#FF7F50'
    }else{
        img.src = 'fotodenoite.png'
        document.body.style.background = '#191970'
    }
 }