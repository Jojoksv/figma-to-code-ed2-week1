import '../../styles/HomePage.css'
import Category from '../../components/common/Category'
import Card from '../../components/common/Card'
import cyberPunk from '../../assets/images/rectangle-3@2x.png'
import durolost from '../../assets/images/rectangle-31@2x.png'
import spaceX from '../../assets/images/rectangle-32@2x.png'
import snoopDog from '../../assets/images/rectangle-33@2x.png'


const categories = ['All categories', 'Art', 'Celebrities', 'Gaming', 'Sport'];
const cards = [
  { imgSrc: cyberPunk, title: 'CyberPunk', price: 68 },
  { imgSrc: durolost, title: 'Durolost Boll - Upper', price: 68 },
  { imgSrc: spaceX, title: 'Space X Wiper', price: 68 },
  { imgSrc: snoopDog, title: 'Snoop Dogg', price: 68 },
];

function HomePage() {
    return (
        <div className='home-page'>
            <div className="hero-section">
                <div className="hero-section-inner">
                    <div className='nfc-head'></div>
                    <div className='nfc-kong'></div>
                </div>
                <div className="see-the-nft-new-world">
                    <h1 className="see-the-nft">
                        <span>See the NFT</span>
                        <span>new world</span>
                    </h1>
                    <div className="vorem-ipsum-dolor-sit-amet-co">
                        <p>
                            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                            turpis molestie, di
                        </p>
                        <div className="discover-vow-parent">
                            <div className="discover-vow">Discover Vow</div>
                            <div className="move-right-wrapper">→</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="collections-section">
                    <b className="our-collections">Our Collections</b>
                    <div className="frame-group">
                        <div className="frame-container">
                            {categories.map((category, index) => (
                            <Category key={index} name={category} />
                            ))}
                        </div>
                        <div className="view-more">View more</div>
                    </div>
                    <div className="collections-cards">
                        {cards.map((card, index) => (
                            <Card key={index} imgSrc={card.imgSrc} title={card.title} price={card.price} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage