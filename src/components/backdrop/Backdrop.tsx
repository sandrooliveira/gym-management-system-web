import { MouseEventHandler } from 'react';
import classes from './Backdrop.module.scss';

interface BackdropProps {
    onClick: MouseEventHandler<HTMLDivElement>
}

export const Backdrop: React.FC<BackdropProps> = props => {
    return <div className={classes.container} onClick={props.onClick}></div>
}