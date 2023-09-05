 let tg = window.Telegram.WebApp;
 		 tg.showAlert(`Добро пожаловать, ${tg.initDataUnsafe.user.first_name}!`);
 		 tg.expand();
 		 tg.MainButton.textColor = "#FFFFFF";
 		 tg.MainButton.color = "#2cab37";
 		 let user = document.getElementById('user');

 		 let p = document.createElement('p');
 		 p.innerText = `${tg.initDataUnsafe.user.first_name}${tg.initDataUnsafe.user.last_name}`;
		
		 user.appendChild(p);
		

	var storeZ = [
	     {name:"№5",R1:0,
		 R2:0,
		 R:function (){
		 return Number(this.R1)+Number(this.R2);}
		 },
	     {name:"№15",R1:0,
		 R2:0,
		 R:function (){
		 return Number(this.R1)+Number(this.R2);}
		 },
	  ];
	  var storeW = [
	    {name:"№4",R1:{
		 r:0,
		 action:"+",
		 },
		 R2:0,
		 R:function (){
		 return Number(this.R1.r)+Number(this.R2);}
		 },
	     {name:"№9",R1:{
		 r:0,
		 action:"+",
		 },
		 R2:0,
		 R:function (){
		 return Number(this.R1.r)+Number(this.R2);}
		 },
		 {name:"№10",R1:{
		 r:0,
		 action:"+",
		 },
		 R2:0,
		 R:function (){
		 return Number(this.R1.r)+Number(this.R2);}
		 },
		 {name:"№14",R1:{
		 r:0,
		 action:"+",
		 },
		 R2:0,
		 R:function (){
		 return Number(this.R1.r)+Number(this.R2);}
		 },
		 
	  ];
	  var   i, x = "", z = "", y= "" ;
	  for (let i = 0; i < storeZ.length; i++){ 
         x += storeZ[i].name+ "<br>";
         z += storeZ[i].input1="<input type='checkbox' class='checkmark'/><input id='input1' class='cls1' type='number' placeholder='зона1'><input type='checkbox' class='radio'/>"+ "<br>";
		 y += storeZ[i].input2="<input type='checkbox'class='checkmark'/><input id='input2' class='cls2' type='number' placeholder='зона2'><input type='checkbox' class='radio'/>"+ "<br>";
	     
		  document.getElementById("name").innerHTML = x;
          document.getElementById("input1").innerHTML = z;
	      document.getElementById("input2").innerHTML = y;
	      
 
};
	  var   i, x = "", z = "", y= "";
	  for (let i = 0; i < storeW.length; i++){ 
         x += storeW[i].name+ "<br>";
         z += storeW[i].R1.r="<input type='checkbox'class='checkmark'/><input id='input1W' class='cls1W' type='number' placeholder='зона №1'><input type='checkbox' class='radio'/>"+ "<br>";
		 y += storeW[i].R2="<input type='checkbox'class='checkmark'/><input id='input2W' class='cls2W' type='number' placeholder='зона №2'><input type='checkbox' class='radio'/>"+ "<br>";
	     
		  document.getElementById("nameW").innerHTML = x;
          document.getElementById("input1W").innerHTML = z;
	      document.getElementById("input2W").innerHTML = y;
	      
 
};
	  
	  
	  
	/*for (var i = 0; i <storeZ.length; i++ ){
	     document.getElementById("demo").innerHTML += '<p>Перегрузка'+ storeZ[i].name +'<br>Руда '+ storeZ[i].R +'</p>';
		 
	  }*/
	  
	  
	 function getValue() {
	 
	for (var i = 0; i < storeZ.length; i++) {
	var d = new Date(); 
	 document.getElementById('time').innerHTML =d; 
	    var val1 = document.getElementsByClassName('cls1')[i].value;//переменной val присваиваем значение поля ввода
		//document.getElementsByClassName('cls1')[i].value="";
		var val2 = document.getElementsByClassName('cls2')[i].value;
		//document.getElementsByClassName('cls2')[i].value="";
		var st1 = storeZ[i].R1=val1;//присваеваем объекту массива значение из поля  ввода
		var st2 = storeZ[i].R2=val2;
		}
		document.getElementById("demo").innerHTML= "";
		//document.getElementById("name").innerHTML= "";
		
		storeZ.sort(function(a,b){
		return a.R()-b.R();
		});
		
		for(var i=0; i <storeZ.length; i++ ) {
		//document.getElementById("name").innerHTML +='<div>'+ storeZ[i].name +  '</div>';
		document.getElementById("demo").innerHTML += '<p>Перегрузка <strong>'+ storeZ[i].name +  '</strong><br>R1__ <markR>'+ storeZ[i].R1 +'</markR>R2 __<markR>'+ storeZ[i].R2 +'</markR> всего: '+ storeZ[i].R() +'</p>';
		}
		
	  }
	  function getValueW() {
	 
	for (var i = 0; i < storeW.length; i++) {
	 
	    var val1 = document.getElementsByClassName('cls1W')[i].value;//переменной val присваиваем значение поля ввода
		//document.getElementsByClassName('cls1W')[i].value="";
		var val2 = document.getElementsByClassName('cls2W')[i].value;
		//document.getElementsByClassName('cls2W')[i].value="";
		var st1 = storeW[i].R1.r=val1;//присваеваем объекту массива значение из поля  ввода
		var st2 = storeW[i].R2=val2;
		}
		document.getElementById("demoW").innerHTML= "";
		//document.getElementById("nameW").innerHTML= "";
		
		storeW.sort(function(a,b){
		return a.R()-b.R();
		});
		
		for(var i=0; i <storeW.length; i++ ) {
		//document.getElementById("nameW").innerHTML +='<div>'+ storeW[i].name +  '</div>';
		document.getElementById("demoW").innerHTML += '<p>Перегрузка<strong>'+ storeW[i].name +  '</strong><br>R1__<markR>'+ storeW[i].R1.r +'</markR>R2__<markR>'+ storeW[i].R2 +'</markR>  всего: '+ storeW[i].R() +'</p>';
		}
		
	  }
	  let Allinputs  = document.querySelectorAll("input");
	 
	  for (let i=0; i<Allinputs.length; i++){
		Allinputs[i].addEventListener("change",function(){

			if (tg.MainButton.isVisible){
				tg.MainButton.hide();
			}else{
				tg.MainButton.setText("добавить информацию");
				tg.MainButton.show();
			}
			
	  })
		
		};
        //объект Telegram.WebApp с помощью метода onEvent определяет событие "mainButtonClicked" клик на главную кнопку после чего выполняетя функция и инстукция по сокрытию кнопки
		Telegram.WebApp.onEvent("mainButtonClicked", function(){
			getValueW();
			if (tg.MainButton.isVisible){
				tg.MainButton.hide();
		}
	})
