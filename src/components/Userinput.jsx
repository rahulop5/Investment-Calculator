function Userinput({input, inputchangefunc}){  
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" onChange={(event)=>{inputchangefunc("initialinvestment", event.target.value)}} value={input.initialinvestment}/>
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" onChange={(event)=>{inputchangefunc("annualinvestment", event.target.value)}} value={input.annualinvestment}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" onChange={(event)=>{inputchangefunc("expectedreturn", event.target.value)}} value={input.expectedreturn}/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" onChange={(event)=>{inputchangefunc("duration", event.target.value)}} value={input.duration}/>
                </p>
            </div>
        </section>
    );
}

export default Userinput;