function blocoMensagem(mensagem){
    var div = document.createElement("div");
    var msg = document.createElement("p");
    var b = document.createElement("button");
  
    div.setAttribute("id","MsgBox");

    b.setAttribute("id","bt" + numero);
    b.textContent = "Continuar";
    

    msg.setAttribute("id","msg" + numero);
    msg.textContent = mensagem;
    msg.classList.add("flexItem");
    mostrar(div,msg);
    mostrar(div,b);
    var main = document.getElementById("main");
    main.append(div);
    

}
function blocoOpcoes(mensagem,opcao1,opcao2){
    var div = document.createElement("div");
    var msg = document.createElement("p");
    var div2 = document.createElement("div2");
    var radio1 = document.createElement("input");
    var label1 = document.createElement("label");
    var label2 = document.createElement("label");
    
    radio1.setAttribute("type","radio");
    radio1.setAttribute("value",opcao1);
    radio1.setAttribute("name","escolha");
    radio1.setAttribute("id","radio1");
    label1.setAttribute("for","radio1");
    label1.setAttribute("id","label1");
    label1.textContent = opcao1;
   


    msg.setAttribute("id","msg2" + numero);
    msg.textContent = mensagem;
    mostrar(div,msg);
    
    
    var radio2 = document.createElement("input");
    radio2.setAttribute("type","radio");
    radio2.setAttribute("value",opcao2);
    radio2.setAttribute("name","escolha");
    radio2.setAttribute("id","radio2");
    label2.setAttribute("for","radio2");
    label2.setAttribute("id","label2");
    label2.textContent = opcao2;

    

    var b = document.createElement("button");
    b.setAttribute("id","bt2"+numero);
    b.textContent = "Continuar";
    var br = document.createElement("br");
   
    
   
   div.setAttribute("id","MsgBox");
   div2.setAttribute("id","MsgBoxChild");

   radio1.classList.add("flexItem");
    radio2.classList.add("flexItem");
    label1.classList.add("flexItem");
    label2.classList.add("flexItem");
    msg.classList.add("flexItem");
    div2.classList.add("flexItem");

   mostrar(div2,label1);
   mostrar(div2,radio1);
   mostrar(div2,label2)
   mostrar(div2,radio2);
   mostrar(div,div2);
   mostrar(br);
   mostrar(div,b);
   var main = document.getElementById("main");
   main.append(div);
    
    
}