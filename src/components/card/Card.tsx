import { FiCheck } from 'react-icons/fi';
import { MdBlock, MdReportProblem } from 'react-icons/md';


import classes from './Card.module.scss'

interface CardProps {
  name: string;
  picture: string;
  theme: 'blocked' | 'active' | 'expired';
  footerText: string
}

const themes = {
  blocked: {
    icon: <MdBlock />,
    style: "blocked"
  },
  active: {
    icon: <FiCheck />,
    style: "active"
  },
  expired: {
    icon: <MdReportProblem />,
    style: "expired"
  }
};

export const Card = ({ name, picture, theme, footerText }: CardProps) => {

  const { icon, style } = themes[ theme ];

  return (
    <div className={`${classes.card} ${classes[ style ]}`}>
      <div className={classes.body}>
        <img src={picture} alt="Imagem do aluno" />
        <strong>{name}</strong>
      </div>

      <div className={classes.footer}>
        {icon}
        <span>{footerText}</span>
      </div>
    </div>
  )
}