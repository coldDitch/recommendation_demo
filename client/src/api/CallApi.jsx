
export default class HandleRecommendation{
	callApi = async () => {
		const response = await fetch('/api/recommend');
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
		return body;
  	}
}
