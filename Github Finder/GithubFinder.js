//Github class
class GitHub{
	constructor(){
		this.client_id = '157219e35299ac60e486';
		this.client_secret ='f15154886a12766645a72c41a53559c50d4a9bbd';
		this.repos_count =5;
		this.repos_sort ='created:asc';
	}
	//async getusers function
	async getUsers(user){
		
		
	const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
	const profile = await profileResponse.json();
	const userRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
	const userre = await userRepos.json();
		return {
			profile,
			userre
		}
	}
}