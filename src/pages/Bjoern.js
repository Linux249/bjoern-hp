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

const Text = styled.p`
    width: 95%;
    //font-size: 1.3rem;
    margin-top: 0;
`

export default () => (
    <Page>
        <Img src={profil} alt={profil.toString()} />
        <br />
        <Text>
            Björn Ruppert, geboren 1980 in Ulm, lebt und arbeitet als freischaffender Künstler in
            Heidelberg. In seinen Gemälden verfängt sich der Blick in Landschaften aus dezenten
            Farben. Er ertastet die Grenzen von Natur und Architektur und eröffnet so neue Räume,
            die die Sicht bishin zum Horizont ermöglichen.
        </Text>
        <Text>
            Diese urbanen Ansichten entstehen in einem anhaltenden Übermalungsakt. Die einzelnen
            Schichten aus Ölfarbe und die zeitliche Hingabe, mit der sich der Maler dem Motiv
            widmet, kennzeichnen die Intensität der Bilder.
        </Text>
        <Text>
            Das Rohe und Ursprüngliche der Ölbilder findet sich auch in den Linoldrucken wieder, die
            der Künstler, als eine minimalistische Ausdrucksweise für sich entdeckt hat. In beiden
            Fällen sind die Motive losgelöst von Ort und Zeit und entstehen aus der
            Vorstellungskraft des Künstlers.
        </Text>
    </Page>
);
