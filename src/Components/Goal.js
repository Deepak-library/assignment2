
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
}
    const renderList = props.list.map((iteam) => {
        return (
        <div key={iteam.id}>
            {iteam.instrument}-{iteam.exercise}-{iteam.current}-{iteam.Goal}{iteam.current}-
            <button onClick={()=>del(iteam.id)}>delete</button>-
            <button>modify</button>
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