import logo from '../../assets/images/logo.png'
import '../../styles/Header.css'

function Header() {
  return (
    <header className="flex font-semibold text-nowrap">
        <nav className='navbar'>
            <img src={logo} alt="NFT logo" className="frame-icon" />
            <div className="navbar-items">
                <div className="items">Home</div>
                <div className="items">Top sales</div>
                <div className="items">Collections</div>
                <div className="items">Our blog</div>
                <div className="items">About us</div>
            </div>
            <div className="wrapper">
                <div className="sign-up-wrapper">
                    <div className="items">Sign up</div>
                </div>
                <div className="connect-wallet-wrapper">
                    <div className="items">Connect Wallet</div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header