import '../../styles/HomePage/HomePage.css';


function HomePage () {
    return (
        <section className='homePage-section'>
            <div className='picture-div'>
                <img className='photo' src={require('../../assets/image.webp')} alt="cliché de moi" />
            </div>                
            <div className='text-div'>
                <h1>Bonjour, je suis <span className='h1-first-name'>Manuel</span><span className="home-hand">🤚</span></h1>
                <h2>Je suis développeur Front-end.</h2>
            </div>
            
            
        </section>
    );
};

export default HomePage;

