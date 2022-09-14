export default function Home() {
    return (
        <div className="info-panel">
            <center>
                <h1>Welcome to Plant Shoppe</h1>
                <h3>(A simple mock rewards calculation app.)</h3>
            </center>
            <br/>
            <p>
                There's not much to see here. Simply go to the rewards page
                to see how the calculation is done.
            </p>
            <p>
                If you still haven't setup the backend for this simple site,
                go to this project's directory in the terminal and type:
            </p>
            <pre>
                <code>
                    $ json-server --watch src/api/db.json --port 3001
                </code>
            </pre>
        </div>
    );
}