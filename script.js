let tg = window.Telegram.WebApp;
 		 //tg.showAlert(`Добро пожаловать, ${tg.initDataUnsafe.user.first_name}!`);
 		 tg.expand();
 		 tg.MainButton.textColor = "#FFFFFF";
 		 tg.MainButton.color = "#2cab37";
		//  let user = document.getElementById('user');
 		//  let p = document.createElement('p');
 		//  p.innerText = `${tg.initDataUnsafe.user.first_name}${tg.initDataUnsafe.user.last_name}`;
		
 		//  user.appendChild(p);
		
	let store = [
		{name:'№5',
		zones:[
			{number:'1',V:0,catGM:'', delivery: false, ship: true},
			{number:'2',V:0,catGM:'', delivery: false, ship: false},
			{number:'3',V:0,catGM:'', delivery: false, ship: false},
			{number:'4',V:0,catGM:'', delivery: false, ship: false}
	],
	V:function(){
		let sum = 0;
			for(let i =0; i<this.zones.length; i++){
			sum += Number(this.zones[i].V);
			}
			return sum;
			}
	},
		{name:'№15',
		zones:[
			{number:'1',V:0,catGM:'', delivery: false, ship: false},
			{number:'2',V:0,catGM:'', delivery: false, ship: false},
			{number:'3',V:0,catGM:'', delivery: false, ship: false},
			{number:'4',V:0,catGM:'', delivery: false, ship: false}
	],
	V:function(){
		let sum = 0;
			for(let i =0; i<this.zones.length; i++){
			sum += Number(this.zones[i].V);
			}
			return sum;
			}
		},
		{name:'№4',
		zones:[
			{number:'1',V:0,catGM:'', delivery: false, ship: false},
			{number:'2',V:0,catGM:'', delivery: false, ship: false},
			{number:'3',V:0,catGM:'', delivery: false, ship: false},
			{number:'4',V:0,catGM:'', delivery: false, ship: false}
	],
	V:function(){
		let sum = 0;
			for(let i =0; i<this.zones.length; i++){
			sum += Number(this.zones[i].V);
			}
			return sum;
			}
	},
		{name:'№9',
		zones:[
			{number:'1',V:0,catGM:'', delivery: false, ship: false},
			{number:'2',V:0,catGM:'', delivery: false, ship: false},
			{number:'3',V:0,catGM:'', delivery: false, ship: false},
			{number:'4',V:0,catGM:'', delivery: false, ship: false}
	],
	V:function(){
		let sum = 0;
			for(let i =0; i<this.zones.length; i++){
			sum += Number(this.zones[i].V);
			}
			return sum;
			}
	},
		{name:'№10',
		zones:[
			{number:'1',V:0,catGM:'', delivery: false, ship: false},
			{number:'2',V:0,catGM:'', delivery: false, ship: false},
			{number:'3',V:0,catGM:'', delivery: false, ship: false},
			{number:'4',V:0,catGM:'', delivery: false, ship: false}
	],
	V:function(){
		let sum = 0;
			for(let i =0; i<this.zones.length; i++){
			sum += Number(this.zones[i].V);
			}
			return sum;
			}
		},
		{name:'№14',
		zones:[
			{number:'1',V:0,catGM:'', delivery: false, ship: false},
			{number:'2',V:0,catGM:'', delivery: false, ship: false},
			{number:'3',V:0,catGM:'', delivery: false, ship: false},
			{number:'4',V:0,catGM:'', delivery: false, ship: false}
	],
	V:function(){
		let sum = 0;
			for(let i =0; i<this.zones.length; i++){
			sum += Number(this.zones[i].V);
			}
			return sum;
			}
	}
	]	
	
	
	 
	  let cardzone = document.querySelector('#cardzone');
	  let titleCard = '', Card = '', listZones ='';
		for (let i = 0; i < store.length; i++){ 
			Card = document.createElement('div');
				Card.className = "card mt-2";
				Card.style="min-width:20rem; margin: auto;";
				
			titleCard = document.createElement('div');
				titleCard.className='card-header';
				titleCard.innerHTML= 'перегрузка'+store[i].name;
				titleCard.title =store[i].name;
			Card.appendChild(titleCard);
			listZones =  document.createElement('ul');
				listZones.className ='list-group list-group-flush';
				listZones.title =store[i].name;
			
				for (let z =0; z < store[i].zones.length; z++){
					let li = document.createElement('li');
					li.className='list-group-item';
					li.innerHTML = 'зона №' + store[1].zones[z].number  +`<input type='checkbox'class='checkmark' id = 'check${store[i].name}(${z+1})'/>  
					<input id='${store[i].name}(${z+1})' class='cls' type='number' placeholder='объем' min = 1 max = 30>
					<select name="categories" id = 'catGM${store[i].name}(${z+1})'>
						<option value="">нет зоны</option>
						<option value="R">руда</option>
						<option value="V">вскрыша</option>
					</select>`;
					

					listZones.appendChild(li);
				}
				
				Card.appendChild(listZones);
			
			
		
			cardzone.appendChild(Card);
			
		}

      
     
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
	var d = new Date(); 
    
	 document.getElementById('time').innerHTML ='данные на '+ formatDate(d); 
		
	
	
		
			for (let i = 0; i < store.length; i++) {
			
			
			
				for (let z = 0; z < store[i].zones.length; z++){
					//console.log(store[i].zones[z]);
					if (document.getElementById(`check${store[i].name}(${store[i].zones[z].number})`).checked == true){
						store[i].zones[z].delivery = true;
					}
					store[i].zones[z].catGM=document.getElementById(`catGM${store[i].name}(${store[i].zones[z].number})`).value;
		//переменной val присваиваем значение поля ввода
			 
					//if (document.getElementsByTagName('select')['categories'].value == 'руда'){
						
						store[i].zones[z].V=document.getElementById(`${store[i].name}(${store[i].zones[z].number})`).value;
					//}			
				}
				}
				
					 
				//присваеваем объекту массива значение из поля  ввода
			
		
		//console.log(store);
		document.getElementById("demo").innerHTML= "";
		
		
		  store.sort(function(a,b){
		  return a.V()-b.V();
		  });
		
		for(let i=0; i <store.length; i++ ) {
			
		
		document.getElementById("demo").innerHTML += 
		
		'<p>Перегрузка <strong>'+ store[i].name +  '</strong><space style="float: right;">Всего:<strong>'+store[i].V()+ '</strong></space><br>'
		+(store[i].zones[0].catGM !=''? store[i].zones[0].catGM +'1 = <strong>'+ store[i].zones[0].V :'')+'</strong>'
		+(store[i].zones[1].catGM !=''? store[i].zones[1].catGM +'2 = <strong>'+ store[i].zones[1].V :'')+'</strong>'
		+(store[i].zones[2].catGM !=''? store[i].zones[2].catGM +'3 = <strong>'+ store[i].zones[2].V :'')+'</strong>'
		+(store[i].zones[3].catGM !=''? store[i].zones[3].catGM +'4 = <strong>'+ store[i].zones[3].V :'')+'</strong></p><hr>';
			}
	//console.log(store);
		
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
	
  