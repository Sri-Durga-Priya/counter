const Button=({label,onClick})=>{
    return(
        <button onClick={onClick} style={{margin:'0 10px',padding:'10px 20 px'}}>
            {label}
        </button>
    );
};
export default Button;