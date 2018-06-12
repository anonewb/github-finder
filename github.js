class Github {
  constructor() {
    // get these from github/settings/developer settings/oauth apps
    this.client_id = '82be063fd01c9d416e7e';
    this.client_secret = 'cc3c8a26ffb4bcb9f6ab8ddcad8ad9df7fc2b8e0';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json(); // profile data
    const repos = await reposResponse.json(); // repos data

    return {
      profile, //same as profile: profile
      repos
    }
  }
}