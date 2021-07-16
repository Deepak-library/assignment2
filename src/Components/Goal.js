
import './Goal.css';
function Goal(props){
    console.log(props);
async function del(id){
    try{
        await fetch("http://localhost:5000/todos",{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({"id":id}) });
    }catch(e){
        console.log(e);
    }

    props.del(id);
};

async function update(id){
    let a=prompt("enter current tempo-");
    let b=prompt("enter goal tempo-");
    a=parseInt(a);
    b=parseInt(b);
    try{
        await fetch("http://localhost:5000/todos",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({"current":a,"goal":b,"id":id}) });
    }catch(e){
        console.log(e);
    }
    props.modify(id,a,b);
}
    const renderList = props.list.map((iteam) => {
        return (
        <div key={iteam.id}>
            {iteam.instrument}--{iteam.exercise}--{iteam.current}--{iteam.goal}-
            <button onClick={()=>del(iteam.id)}>delete</button>-
            <button onClick={()=>{update(iteam.id)}}>modify</button>
        </div>
        );
      });

    return(
        <div>
                {renderList}
        </div>
    );
};

export default Goal;