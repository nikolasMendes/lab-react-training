import style from "./style.module.css"


export function Greetings(props) {
let lingua = ''
    if (props.lang === "de"){
       lingua =  'Hallo'
    }
    if (props.lang === "en"){
        lingua =  'Hello'    }
    if (props.lang === "es"){
        lingua =  'Holla'   }
    if (props.lang === "fr"){
        lingua =  'bonjour'  }
return <div className={style.infoGreet}> <p> {lingua} {props.children}</p></div>
}