export default function Navigation() {
    return (
        <nav className="navigation">
            <a href="/home" className="title">Plant Shoppe</a>
            <ul>
                {(!isOnPage("/home") && !isOnPage("/")) &&
                    <li>
                        <a href="/home">Home</a>
                    </li>
                }
                <li>
                    <a href="/shop">Shop</a>
                </li>
                <li>                    
                    <a href="/cart">Cart</a>
                </li>   
                <li>
                    <a href="/rewards">Rewards</a>
                </li>                 
                <li>
                    <a href="/about">About Us</a>
                </li>    
            </ul>

        </nav>
    );
}

function isOnPage(path)
{
    return window.location.pathname === path;
}