const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '672f444ba1msh5ef96f3113280dep176206jsnb157cac756a8',
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
	}
};

export const getTodaysDeals = async () => {
    try {
        const response = await fetch('https://amazon24.p.rapidapi.com/api/todaydeals', options);

        const data = await response.json();

        return data.products_docs;
    } catch (error) {
        console.log(error);
    }
}