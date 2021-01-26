//instaniate ui class
const ui = new Ui();

const search = document.getElementById('GitHub_Finder');
//adding eventlistener for search
search.addEventListener('keyup',function(e){
	const userText = e.target.value;
		if(userText ===''){
		ui.clearField();
	}else{
		//instaniate the github class
		const github = new GitHub();
		// invoking getUsers function
		github.getUsers(`${userText}`)
		.then( res=>ui.showProfileInUi(res))
		.catch( err =>console.log(err));
	}
});