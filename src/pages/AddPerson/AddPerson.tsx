import { useHistory } from "react-router-dom";
import { MdExitToApp, MdSettings, MdArrowBack } from 'react-icons/md';

import { PageMenu } from '../../components/pageMenu/PageMenu';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { PageTitle } from '../../components/pageTitle/PageTitle';

import classes from './AddPerson.module.scss';


export const AddPerson = () => {
    const history = useHistory();

    const onBackArrowClick = () => {
        history.push('/');
    }

    return (
        <div className={classes.container}>
            <PageHeader>
                <PageTitle title="Novo Aluno" onBackArrowClick={onBackArrowClick} />
            </PageHeader>
        </div>
    )
};