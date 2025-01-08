// import './style.css'
import Style from './style.module.css'

function UsingModule() {
    return (
        <div>
            <p className={Style.mydiv}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem incidunt magnam totam earum! Nobis consectetur voluptate, recusandae deleniti fugiat quos ut neque. Iure, ad aperiam quam inventore id minus totam?
            </p>
            <p className={Style.mydiv1}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem incidunt magnam totam earum! Nobis consectetur voluptate, recusandae deleniti fugiat quos ut neque. Iure, ad aperiam quam inventore id minus totam?
            </p>
        </div>
    )
}
export default UsingModule