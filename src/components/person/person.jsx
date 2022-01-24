import style from './person.module.css';

const Person = ({firstname, lastname, gender}) => {

    // ↓ Exemple de ternaire
    // const title = (gender === 'F') ? 'Madame' : (gender === 'M') ? 'Monsieur' : ''; 
    // const color = (gender === 'F') ? style.colorWoman : (gender === 'M') ? style.colorMan : style.colorOther

    // ↓ Exemple de structure « if ... else »
    let title;
    let color = style.colorOther;
    if(gender === 'F') {
        title = 'Madame';
        color = style.colorWoman;
    }
    else if (gender === 'M') {
        title = 'Monsieur';
        color = style.colorMan;
    }

    return (
        <p>
            {title} {firstname} <span className={`${style.lastname} ${color}`}>{lastname}</span>
        </p>
    );
};

export default Person;