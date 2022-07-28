const Statistics =({options,good,neutral,bad,total,positivePercentage})=> {
return (<div>
<div>
{Object.keys(options).map(key=>
<p key={key} >{key}: {options[key]}</p>)}
</div>
<p>total: {total} </p>
<p>Positive feedback: {positivePercentage}% </p></div>
)
}
export  default Statistics;