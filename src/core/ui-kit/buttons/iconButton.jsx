import {memo} from "react";
import { Button } from 'antd';


const MButtonWithIcon = (props) => {
    return(
        <>
            <Button
                type={props.type}
                size={props.size}
                icon={props.icon}
                onClick={props.action}
                ghost={props.ghost}
                className={props.className}
                htmlType={props.htmlType}
                disabled={props.disabled}
            >{ props.label }</Button>
        </>
    )
}

export default memo(MButtonWithIcon);