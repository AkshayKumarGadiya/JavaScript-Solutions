class Ui{
	//Display the profile details in UI
	showProfileInUi(res){
		console.log(res);
		if(res.profile.message === "Not Found"){
			this.showMessage();
			this.clearField();
		}else{
			let output = '';
		output += `<div class="card">
				<div class="card-body">
					<div class="row">
						<div class="col-4">
							<img src="${res.profile.avatar_url}" class="img-fluid">
							<a href="${res.profile.html_url}" target="_blank" class="btn btn-primary mt-3 w-100">View Profile</a>
						</div>
						<div class="col-8">
							<button class="btn btn-primary">Public Repos: ${res.profile.public_repos}</button>
							<button class="btn btn-secondary">Public Gists: ${res.profile.public_gists}</button>
							<button class="btn btn-success">Followers:${res.profile.followers}</button>
							<button class="btn btn-info">Following: ${res.profile.following}</button>
							<ul class="mt-5" style="list-style: none; margin: 0; padding: 0">
								<li class= "border p-2">Company: ${res.profile.company}</li>
								<li class= "border p-2">Website: ${res.profile.html_url}</li>
								<li class= "border p-2">Location: ${res.profile.location}</li>
								<li class= "border p-2">Member Since: ${res.profile.created_at}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			`;

			output +=`<h4 class="mt-5">Latest Repos</h4>
			<ul class ="mt-5" style="list-style: none; margin: 0; padding: 0">`;

			res.userre.forEach(userre=>{
				output += `<li class="border p-3 mb-2 pl-3"><a href="${userre.html_url}" target="_blank">${userre.name}</a><button class="btn btn-sm btn-primary float-right mr-2">Stars: ${userre.stargazers_count}</button>
					<button class="btn btn-sm btn-secondary float-right mr-2">Watchers: ${userre.stargazers_count}</button>
					<button class="btn btn-sm btn-success float-right mr-2">Forks: ${userre.forks_count}</button></li>`;
			})

			output +=`<ul>`;

			document.getElementById('output').innerHTML = output;
		}
		


	}
	//clear field function 
	clearField(){
		document.getElementById('output').innerHTML="";
	}
	showMessage(){
		this.clearAlert();
		const div = document.createElement('div');
		div.className = "alert alert-danger";
		div.appendChild(document.createTextNode("No such user exist!"));
		const container = document.querySelector(".container");
		document.body.insertBefore(div,container);
		setTimeout(function(){
			document.querySelector(".alert").remove();
		},3000)
	}
	clearAlert(){
		const currentAlert = document.querySelector('.alert');
		if(currentAlert){
			currentAlert.remove();
		}
	}
}