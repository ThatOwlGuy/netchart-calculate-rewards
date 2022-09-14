export default function ErrorPage()
{
    return (
        <div className="info-panel">
            <center>
                <h1>Whoops!</h1>
                <br/>
                <h3>It looks like we weren't able to pull up what you wanted.
                    Please try again later.
                </h3>
                <br/>
                <p>
                    (Except it won't matter. Only the <a href="/rewards">rewards</a> page
                     is functional.)
                </p>
            </center>
        </div>
    );
}