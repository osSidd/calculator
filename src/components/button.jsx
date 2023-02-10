export default function Button({id, handler, classname}){
    return (
        <button id={id} className={classname} onClick={handler}>{id}</button>
    )
}
