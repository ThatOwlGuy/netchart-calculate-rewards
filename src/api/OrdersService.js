const apiUrl = "http://localhost:3001/orders"

export async function GetAllOrders() {
    let response = await fetch(apiUrl);
    return await response.json();
}

export async function GetEligibleOrders() {
    return await GetAllOrders().then(result => {
        let thirtyDaysAgo = new Date();
        thirtyDaysAgo.setMonth(thirtyDaysAgo.getMonth()-3);
        let filteredResults = result.filter(order => {
            return parseInt(order.timeOfPurchase) > GetEpoch(thirtyDaysAgo);
        });
        return filteredResults;
    });
}

function GetEpoch(date) {
    return Math.floor(date.getTime() / 1000);
}