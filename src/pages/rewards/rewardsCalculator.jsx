import React from "react";
import { GetAllOrders, GetEligibleOrders } from "../../api/OrdersService";
import { SiThymeleaf } from "react-icons/si";

export default class RewardsCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalEstimate: 0,
            rewards: 0,
            hasCalculated: false,
            failedCalculation: false
        };
        this.onChange = this.onChange.bind(this);
        this.rewards = this.CalculateRewards.bind(this);
        this.hasCalculated = this.CalculateRewards.bind(this);
        this.failedCalculation = this.CalculateRewards(this);
    }

    componentDidMount() {
        this.CalculateRewards();
    }

    onChange(event) {
        this.setState({totalEstimate: event.target.value});
    }

    CalculateRewards() {
        GetEligibleOrders().then(eligibleOrders => {
            let points = this.CalculatePointsFromOrders(eligibleOrders);
            this.setState({
                rewards: points
            });
        }).then(() => {
            this.setState({
                hasCalculated: true
            });
            this.setState({
                failedCalculation: false
            });
        }).catch((error) => {
            this.setState({
                hasCalculated: false
            });
            this.setState({
                failedCalculation: true
            });
        });
    }
    
    CalculatePointsFromOrders(orders) {
        let pointTotal = 0;
        orders.forEach(order => {
            let orderTotal = 0;
            order.items.forEach(item => {
                orderTotal += item.price;
            });
            pointTotal += this.CalculatePointsFromTotal(orderTotal);
        });
    
        return pointTotal;
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

    RewardsEstimator() {
        return (
            <div className="flex-child widget-panel">
                <center>
                    <h1>Rewards Estimator</h1>
                    <h3>Type in a dollar amount and see how many rewards you can get!</h3>
                    <p>(You start getting rewards after your purchase exceeds $50)</p>
                </center>
                <br/>
                <div className="flex-container">
                    <h3 className="flex-child">$</h3>
                    <input className="flex-child-input" type="number" min="0" value={this.state.value} onChange={this.onChange}></input>
                </div>
                <br/>
                
                <center>
                    { this.state.totalEstimate > 50 && (
                        <h2>You could be eligible for {this.CalculatePointsFromTotal(this.state.totalEstimate)} plant 
                        point{this.state.totalEstimate == 51 ? "" : "s"} on a purchase!</h2>
                    )}
                    { this.state.totalEstimate <= 50 && (
                        <h2>That's not enough to earn any plant points!</h2>
                    )}
                </center>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="flex-container">
                    <div className="flex-child info-panel">
                        <h1>Thank you!</h1>
                        <br/>
                        <h3>You're a valued customer here @ Plant Shoppe. And for that, you get rewards!</h3>
                        <br/><p>Below, you can see how many rewards you get from your green thumb membership. And on the right, you can see how many points you can accrue in a single purchase!</p>
                    </div>
                    {this.RewardsEstimator()}
                </div>
                <div className="info-panel">
                    {!this.state.failedCalculation && (
                        <center>
                            <SiThymeleaf className="icon-button" size={100}></SiThymeleaf>
                            <br/><br/><br/>
                            <h1>Rewards!</h1>
                            <br/>
                        </center>
                    )}
                    {this.state.hasCalculated && (<center><h2>You have accrued {this.state.rewards} plant points!</h2></center>)}
                    {this.state.failedCalculation && (
                        <>
                        <center>
                            <h1>Sorry!</h1>
                            <h3>It seems that we were unable fetch your order history for calculation. Please try again later!</h3>
                            <p>(Are you running the backend? If not, try running the below command in the project directory)</p>
                        </center>
                        <pre>
                            <code>
                                $ json-server --watch src/api/db.json --port 3001
                            </code>
                        </pre>
                        </>
                    )}
                </div>
            </div>
        );
    }


}
