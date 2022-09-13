const apiUrl = "http://localhost:3001/orders"

export async function GetAllOrders() {
    let response = await fetch(apiUrl);
    let data = await response.json();
    return data;
}

export async function GetEligibleOrders() {
    return await GetAllOrders(0).then(result => {
        let thirtyDaysAgo = new Date()
        thirtyDaysAgo.setMonth(thirtyDaysAgo.getMonth()-1);
        let filteredResults = result.filter(order => {
            let purchaseTime = new Date();
            purchaseTime.setUTCSeconds(parseInt(order.timeOfPurchase));
            return purchaseTime.getUTCSeconds() > thirtyDaysAgo.getUTCSeconds();
        });
        return filteredResults;
    });
}