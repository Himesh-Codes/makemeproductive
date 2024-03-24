import "../assets/css/clock.css"

export default function Clock(): JSX.Element{
    return (
        <>
            <div className="viewcontent">
                <h1 className="timerremaining">00:02:12</h1>
                <h2 className="taskSubject">Check Emails</h2>
                <h3 className="fromclock">23:22:01</h3>
                    <h4><i>to</i></h4>
                <h3 className="toclock">23:22:01</h3>
            </div>
        </>

    );
}