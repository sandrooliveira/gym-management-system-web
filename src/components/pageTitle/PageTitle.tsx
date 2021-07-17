import { MdArrowBack } from 'react-icons/md';
import { MouseEventHandler } from 'react';

import classes from './PageTitle.module.scss';

interface PageTitleProps {
  title: string;
  onBackArrowClick?: MouseEventHandler;
}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <div className={classes.container}>
      {props.onBackArrowClick &&
        <MdArrowBack onClick={props.onBackArrowClick} />
      }

      <span>{props.title}</span>
    </div>
  );
}
