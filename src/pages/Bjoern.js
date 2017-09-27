import React from 'react'
import styled from 'styled-components'
import Page from '../style/Page'
import profil from '../img/profil.jpg'

const Img = styled.img`
    width: auto;
    max-width: 300px;
    float: left;
    //margin-right: 20px;
    //margin-bottom: 20px;
`

const P = styled.p`
    font-size: 1.4rem;
    margin-top: 0;
`

export default () => <Page>
    <P>
        <Img src={profil} alt={profil.toString()} />
        Ruppert, geboren 1980 in Ulm, lebt und arbeitet als freischaffender Künstler in Heidelberg.
        In seinen Ölmalereien ertastet er die Grenzen von Natur und Archtitektur und eröffnet so neue Räume, die den Blick bishin zum Horizont ziehen.
        Seine kreirten Orte sind oft karg und kühl und doch durchzogen von fremdartigen Pflanzen sowie Spuren menschlichen Daseins in Form von Urbanen Baumaterialien wie Holz, Stein oder Beton.
        Diese fügen sich in die Landschaft ein oder formieren sich zu neuen Konstrukten.
        <br/>
        <br/>
        <hr/>
        Trotz des langwierigen Arbeitsprozesses bewahren die Bilder etwas rohes und Ursprüngliches.
        Die Farbe wird von Ruppert in zahlreichen Schichten aufgetragen und teilweise wieder abgeschliffen, wodurch schwere rauhe Oberflächenstrukturen als auch leichte transparente Flächen entstehen.
    </P>
</Page>