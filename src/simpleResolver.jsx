import Home from "./pages/home/home";
import RewardsCalculator from "./pages/rewards/rewardsCalculator";
import Error from "./pages/error/error";

export default function SimpleResolver(path)
{
    let component;
    switch(path) {
        case "/":
        case "/home":
            component = <Home />;
            break;
        case "/rewards":
            component = <RewardsCalculator />;
            break;
        default:
            component = <Error />;
            break;
    }

    return (
        <>
            {component}
        </>
    );
}