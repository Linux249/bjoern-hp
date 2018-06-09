import React from 'react'
import styled from 'styled-components'
import Page from '../style/Page'
import profil from '../img/profil.jpg'

const Img = styled.img`
    width: inherit;
    max-width: 450px;
    min-width: 200px;
    max-height: 500px;
    float: left;
    margin: 1rem;
    //margin-bottom: 20px;
`

const P = styled.p`
    width: 95%;
    //font-size: 1.3rem;
    margin-top: 0;
`

export default () => <Page>
        <Img src={profil} alt={profil.toString()} />
    <br/>
    <P>
        Björn Ruppert, geboren 1980 in Ulm, lebt und arbeitet als freischaffender Künstler in Heidelberg. In seinen Ölmalereien ertastet er die Grenzen von Natur und Architektur und eröffnet so neue Räume, die den Blick bis hin zum Horizont ziehen. Seine kreierten Orte sind oft karg und kühl und doch durchzogen von fremdartigen Pflanzen sowie Spuren menschlichen Daseins in Form von Urbanen Baumaterialien wie Holz, Stein oder Beton. Diese fügen sich in die Landschaft ein oder formieren sich zu neuen Konstrukten.
        Trotz des langwierigen Arbeitsprozesses bewahren die Bilder etwas rohes und Ursprüngliches. Die Farbe wird von Ruppert in zahlreichen Schichten aufgetragen und teilweise wieder abgeschliffen, wodurch schwere raue Oberflächenstrukturen als auch leichte transparente Flächen entstehen.

    </P>
    <P>
        Studium an der PH Heidelberg in den Fächern Kunst, Mathematik und Technik.
        Seit 2014 Residenz für künstlerisches Schaffen, Breidenbach Studios, Heidelberg
    </P>
</Page>