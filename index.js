
		function lovecal(){


		const firstname = document.getElementById('firstname');
		const lastname = document.getElementById('lastname');
		const error = document.getElementById('error');
		const answer = document.getElementsByClassName('heading');
		const message = document.getElementsByClassName('message');

         if(firstname.value==""||lastname.value==""){
			error.style.visibility="visible";
			error.innerText="invalid name";
			error.style.color="orange";
		}
		else if(firstname.value.length<3||lastname.value.length<3){

			error.style.visibility="visible";
			error.innerText=" Please must be minimum 3 Letars or Number";
			error.style.color="orange";
		}
		else
		{
			
			var love=Math.ceil(Math.random()*100);
			answer[0].innerText=love+"%";
			answer[0].style.visibility='visible';
			message[0].innerText=`Mr.${firstname.value} and Mrs.${lastname.value} congratulation for a Real Love. `
		}


	}



	