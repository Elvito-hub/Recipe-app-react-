import React,{useState,useEffect} from 'react';

const Link = ({href,children,className}) => {

    const [ styles,setStyes]=useState({backgroundColor:'',color:''})
    const onLinkCkicked = (e) =>{
        e.preventDefault();
        window.history.pushState({},'',href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)  
    }
    useEffect(() => {
        const onStyleChange =()=>{
        if(window.location.pathname===href){

            setStyes({backgroundColor:'green',color:'white'})
        }else{
            setStyes({backgroundColor:'white'})
        }
    }
        window.addEventListener('popstate',onStyleChange)
        onStyleChange()
        return ()=>{
            window.removeEventListener('popstate',onStyleChange)
        }
    }, [])
    return(
        <div>
           <a className="item" style={styles} onClick={onLinkCkicked} href={href}>{children}</a>
        </div>
    )
}
export default Link;