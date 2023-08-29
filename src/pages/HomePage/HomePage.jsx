import '../../styles/HomePage/HomePage.css';


function HomePage () {
    return (
        <section className='homePage-section'>
            <div className='picture-div'>
                <img className='photo' src={require('../../assets/image.webp')} alt="cliché de moi" />
            </div>                
            <div>
                <h1>Bonjour, je suis Manuel<span className="Home-hand"> 🤚</span></h1>
                <h2>Je suis développeur Front-end.</h2>
            </div>
            
            
        </section>
    );
};

export default HomePage;