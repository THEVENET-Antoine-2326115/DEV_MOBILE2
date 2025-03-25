import logo from './logo.png'

const Header = ({ taches = [] }) => {
    const nbTaches = taches.length;
    return(
        <div style={{backgroudColor: "yellowgreen"}}>
            <img src={logo} style={{margin: '0 auto', height: '30px'}}></img>
            <div>
                {nbTaches} Taches
            </div>
        </div>
    )
}

export default Header