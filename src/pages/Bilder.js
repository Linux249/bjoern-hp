import React, {Component} from 'react'
import styled from 'styled-components'
import Image from '../components/Image'
import Page from '../style/Page'
import Stadtflucht from '../img/Stadtflucht.jpg'
import OhneTitel1 from '../img/OhneTitel1.jpg'
import WinterlicheUrbaneLandschaft from '../img/WinterlicheUrbaneLandschaft.jpg'
import OhneTitel2 from '../img/OhneTitel2.jpg'
import Walden from '../img/Walden.jpg'
import OhneTitel3 from '../img/OhneTitel3.jpg'
import Winter from '../img/Winter.jpg'
import OhneTitel4 from '../img/OhneTitel4.jpg'

const context = require.context('../img/paintings', false, /\.(jpg)$/)
const imgs = context.keys().map((filename, i) =>
    <Image key={i} img={context(filename)} name={filename.replace('./', '').replace('.jpg', '')}/>
)


const Row = styled.div`
    display: flex;
    align-items: flex-end;
    //justify-content: space-between;
    
    width: 100%;
    margin: 3rem 0;
`

const ImgBig = styled.div`
    //width: 50rem;
    //height: 50rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-content: center;
    //height: 100%;
    //border: 1px solid lightcoral;
    
    box-shadow: 20px 20px 28px 20px rgba(0,0,0,0.15);
    
    padding: 20px;
`

const ImgInfo = styled.div`
    padding: 1rem;
    //border: 1px solid lightcoral;
    
    //font-size: 1rem;

`


export default class Bilder extends Component {


    render() {
        return <Page>
            <div>Landschaftsmalerei</div>
            <div>Räume und Betonlandschaften</div>
            <div>Limoldrucke</div>
            <Row>
                <ImgBig>
                    <img src={Stadtflucht} alt="Stadtflucht"/>
                </ImgBig>
                <ImgInfo>
                    <div>"Stadtflucht"</div>
                    <div>Öl auf Holz</div>
                    <div>60 x 150 cm</div>
                    <div>2017</div>
                </ImgInfo>
            </Row>

            <Row>
                <ImgInfo>
                    <div>"ohne Titel"</div>
                    <div>Öl auf Leinwand</div>
                    <div>120 x 165 cm</div>
                    <div>2018</div>
                </ImgInfo>
                <ImgBig>
                    <img src={OhneTitel1} alt="OhneTitel1"/>
                </ImgBig>
            </Row>

            <Row>
                <ImgBig>
                    <img src={WinterlicheUrbaneLandschaft} alt="WinterlicheUrbaneLandschaft"/>
                </ImgBig>
                <ImgInfo>
                    <div>"winterliche urbane Landschaft"</div>
                    <div>Gouache, Acryl auf Papier</div>
                    <div>70 x 100 cm</div>
                    <div>2016</div>
                </ImgInfo>
            </Row>

            <Row>
                <ImgInfo>
                    <div>"ohne Titel"</div>
                    <div>Öl auf Leinwand</div>
                    <div>110 x 130 cm</div>
                    <div>2017</div>
                </ImgInfo>
                <ImgBig>
                    <img src={OhneTitel2} alt="OhneTitel2"/>
                </ImgBig>
            </Row>

            <Row>
                <ImgBig>
                    <img src={Walden} alt="Walden"/>
                </ImgBig>
                <ImgInfo>
                    <div>"Walden"</div>
                    <div>Öl auf Holz</div>
                    <div>150 x 120 cm</div>
                    <div>2017</div>
                </ImgInfo>
            </Row>

            <Row>
                <ImgInfo>
                    <div>"ohne Titel"</div>
                    <div>Öl auf Holz</div>
                    <div>190 x 140 cm</div>
                    <div>2017</div>
                </ImgInfo>
                <ImgBig>
                    <img src={OhneTitel3} alt="OhneTitel3"/>
                </ImgBig>
            </Row>

            <Row>
                <ImgBig>
                    <img src={Winter} alt="Winter"/>
                </ImgBig>
                <ImgInfo>
                    <div>"Winter"</div>
                    <div>Öl auf Holz</div>
                    <div>60 x 150 cm</div>
                    <div>2017</div>
                </ImgInfo>
            </Row>

            <Row>
                <ImgInfo>
                    <div>"ohne Titel"</div>
                    <div>Öl auf Holz</div>
                    <div>60 x 100 cm</div>
                    <div>2016</div>
                </ImgInfo>
                <ImgBig>
                    <img src={OhneTitel4} alt="OhneTitel4"/>
                </ImgBig>
            </Row>



            {
                imgs

            }
        </Page>

    }
}