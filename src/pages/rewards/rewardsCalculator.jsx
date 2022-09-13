import React from "react";

export default class RewardsCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalEstimate: 0 };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({totalEstimate: event.target.value});
    }

    GetOrders() {
        console.log("Get Orders not yet implemented.");
        return null;
    }
    
    CalculatePointsFromOrders(orders) {
        let orderTotal = 0;
        orders.forEach(order => {
            orderTotal += order.price;
        });
    
        return this.CalculatePointsFromTotal(orderTotal);
    }
    
    CalculatePointsFromTotal(total) {
        if (total === null || total == 0)
            return 0;
        
        let pointTotal = 0;
        if (total > 50)
            pointTotal += total-50 > 50 ? 50 : total-50;
        if (total > 100)
            pointTotal += (total-100) * 2;
        
        return Math.floor(pointTotal);
    }

    render() {
        return (
            <div>
                <h1>The Rewards Calculator!</h1>
                <h2>Rewards Estimator!</h2>
                <input type="number" min="0" value={this.state.value} onChange={this.onChange}></input>
                <h2>Rewards Estimate: {this.CalculatePointsFromTotal(this.state.totalEstimate)}</h2>
            </div>
        );
    }


}
