/*Importing Components */
import {Row, Col, Container } from 'react-bootstrap';
/*Importing Styles*/
import './Home.css';
/*Importing Images*/
import imgChicken from '../../Assets/homeBackGround2.png';
import imgCat from '../../Assets/homeBackGround3.png';

function getDate(beginDate){
    /*
    Function that calculates how many animals are abandonned from the beginning of the project
    PRE: date of the beginning of the project
    POST: number of animals abandonned from the beginning of the project
    */
    const d1 = new Date(beginDate);
    const d2 = new Date();
    let diffMilli = d2.getTime() - d1.getTime();  
    //get number of days between the beginning of the project and today (-1 to not count the day of the beginning)
    let diffMonth = Math.round(diffMilli / (1000 * 60 * 60 * 24)) - 1;
    return Math.round(diffMonth*(65000/12/30));

}

function Home() {
    return (
        <div>
            <div className='homeContent1 scrollDiv'>
                <h1>Ensemble luttons contre les abandons</h1>
                <p><span style={{fontSize:'400%'}}>{getDate('09/15/22')}</span><br/> animaux ont été abandonnés depuis le début de la création de ce site.</p>
            </div>
            <div className='homeContent2 scrollDiv'>
                <Container>
                    <Row xs={1} md={2}>
                        <Col style={{marginTop: '10%'}}>
                            <p>Près de <span style={{color:'orange'}}>65 000</span> animaux domestiques sont abandonnés tous les ans par leurs maîtres à l'approche de l'été.</p>
                        </Col>
                        <Col>
                            <img id="imgChicken" src={imgChicken} alt="Picture of a chicken"/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='homeContent3 scrollDiv'>
                <Container>
                    <Row xs={1} md={2}>
                        <Col style={{marginTop: '8%', maxWeight: '100%', maxHeight: '100%'}}>
                            <img id="imgCat" src={imgCat} alt="Picture of a cat"/>
                        </Col>
                        <Col style={{marginTop: '8%', maxWeight: '100%', maxHeight: '100%'}}>
                            <p>Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;
