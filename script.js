let tg = window.Telegram.WebApp;
 		 //tg.showAlert(`Добро пожаловать, ${tg.initDataUnsafe.user.first_name}!`);
 		 tg.expand();
 		 tg.MainButton.textColor = "#FFFFFF";
 		 tg.MainButton.color = "#2cab37";
		 let user = document.getElementById('user');
 		 let p = document.createElement('p');
 		 p.innerText = `${tg.initDataUnsafe.user.first_name}${tg.initDataUnsafe.user.last_name}`;
		
 		 user.appendChild(p);
		
         
	var store = [
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
	  for (let i = 0; i < store.length; i++){ 
         x += store[i].name+ "<br>";
         z += store[i].input1="<input type='checkbox' class='checkmark'/><input id='input1' class='cls1' type='number' placeholder='зона1'><input type='checkbox' class='radio'/>"+ "<br>";
		 y += store[i].input2="<input type='checkbox'class='checkmark'/><input id='input2' class='cls2' type='number' placeholder='зона2'><input type='checkbox' class='radio'/>"+ "<br>";
	     
		  document.getElementById("name").innerHTML = x;
          document.getElementById("input1").innerHTML = z;
	      document.getElementById("input2").innerHTML = y;
	      
 
};
	  

      
     
	  //функция для вывода даты в формате 00.00.00
     function formatDate(date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
      
        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
      
        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        var hh = date.getHours();
        if (hh < 10) hh = '0' + hh;
        var min = date.getMinutes();
        if (min < 10) min = '0' + min;
      
        return dd + '.' + mm + '.' + yy+ '(' + hh + ':'+min+')';
      } 
	 function getValue() {
	 
	for (var i = 0; i < store.length; i++) {
	var d = new Date(); 
	 document.getElementById('time').innerHTML = formatDate(d); 
	    var val1 = document.getElementsByClassName('cls1')[i].value;//переменной val присваиваем значение поля ввода
		//document.getElementsByClassName('cls1')[i].value="";
		var val2 = document.getElementsByClassName('cls2')[i].value;
		//document.getElementsByClassName('cls2')[i].value="";
		var st1 = store[i].R1=val1;//присваеваем объекту массива значение из поля  ввода
		var st2 = store[i].R2=val2;
		}
		document.getElementById("demo").innerHTML= "";
		//document.getElementById("name").innerHTML= "";
		
		store.sort(function(a,b){
		return a.R()-b.R();
		});
		
		for(var i=0; i <store.length; i++ ) {
		
		document.getElementById("demo").innerHTML += '<p>Перегрузка <strong>'+ store[i].name +  '</strong><br>R1__ <markR>'+ store[i].R1 +'</markR>R2 __<markR>'+ store[i].R2 +'</markR> всего: '+ store[i].R() +'</p>';
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
            getValue();
			if (tg.MainButton.isVisible){
				tg.MainButton.hide();
		}
	})