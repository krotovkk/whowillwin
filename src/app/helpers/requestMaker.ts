export async function getCurrentRound(leagueId: number) {
  return await fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/${leagueId}/current`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "6b329fe810msh8c2e124ed165b44p129ec0jsn4c1f4247bc48"
    }
  }).then(response => response.json());
}