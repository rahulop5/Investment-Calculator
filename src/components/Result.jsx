import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({input}){
    const finaldata=calculateInvestmentResults(input);
    const initinvestment=finaldata[0].valueEndOfYear-finaldata[0].interest-finaldata[0].annualinvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {finaldata.map((row, index)=>{
                    const totinterest=row.valueEndOfYear-row.annualinvestment*row.year-initinvestment;
                    const totamtinvested=row.valueEndOfYear-totinterest;
                    return (
                        <tr key={index}>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.valueEndOfYear)}</td>
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(totinterest)}</td>
                            <td>{formatter.format(totamtinvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Result;