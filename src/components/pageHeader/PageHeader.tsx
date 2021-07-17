
import classes from './PageHeader.module.scss';

interface PageHeaderProps {
}


export const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}