import React from 'react'
import styled from 'styled-components'
import { Column } from "../style/Column";

const ausstellungen = [{
    year: 2018,
    place: "Pannonica, Heidelberg",
    name: "Abstract Landscapes",
    type: "Einzelausstellung"
},{
    year: 2017,
    place: "WOW ART LU, Ludwigshafen",
    name: "Eden oder das verlorene Paradies",
    type: "Gruppenausstellung"
},{
    year: 2017,
    place: "Milchzenrale, Heidelberg, Alternativer Frühling",
    name: "Wir haben einen(T)Raum",
    type: "Gruppenausstellung"
},{
    year: 2016,
    place: "Breidenbach Studios, Heidelberg",
    name: "Just in Case",
    type: "Gruppenausstellung"
},{
    year: 2016,
    place: "Port 25, Mannheim",
    name: "Raum für Gegenwartskunst",
    type: "Gruppenausstellung"
},{
    year: 2015,
    place: "Breidenbach Studios, Heidelberg",
    name: "Art Breidenbach #3",
    type: "Gruppenausstellung"
},{
    year: 2013,
    place: "PH Heidelberg",
    name: "Civitella best of",
    type: "Gruppenausstellung"
}]

const Name = styled.div`
  
`
export default () => <div>
    <Column>
        {ausstellungen.map(e => <Column>
            <Name>{e.year}</Name>
            <Name>{e.name}</Name>
            <Name>{e.place}</Name>
            <Name>{e.type}</Name>
            <br />
        </Column>)}
    </Column>
</div>