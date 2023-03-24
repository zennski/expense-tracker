function Card(props) {
    return (
        <div style={{
            width: '400px', 
            height: "90px",
            textAlign: 'center',
            backgroundColor: 'skyblue',
            borderRadius: 18,
            margin: 'auto', 
            padding: 1,
            marginBottom: 11,   
        }}
        onClick={(event)=>{
            console.log(event)
            alert("You clicked "+props.name+" - "+props.price)  
        }}
        >
            <h3 style={{textAlign: 'left', marginLeft: 12}}>{props.name}</h3>
            <h3 style={{textAlign: 'right', marginRight: 12}}>{props.price}</h3>
        </div>
    );
}
export default Card;