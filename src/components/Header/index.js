import Logo from '../../assets/logo.png';

import './styles.css';

export function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />

            <div className="right">
                <h3>Caique Moreira</h3>
                <img src="https://avatars.githubusercontent.com/u/56305107?v=4" alt="Caique Moreira" />
            </div>
        </header>
    )
}