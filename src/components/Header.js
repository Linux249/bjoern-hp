import React from 'react'
import Header from '../style/Header'
import Menu from '../style/Menu'
import Title from '../style/Titel'
import Line from '../style/Line'
import Link from '../style/Link'
import styled from 'styled-components'


const Links = styled.div`
   width: 100%;
`

const Rechts = styled.div`


`

export default () => <Header>
    <Title>björn ruppert</Title>
    <Menu>

        <Rechts>
            <Link to='/Bilder'>bilder</Link>
            <Link to='/Ausstellungen' >ausstellungen </Link>
            <Link to='/Björn'>björn</Link>
            <Link to='/Kontakt' >kontakt </Link>
        </Rechts>
    </Menu>
    <Line/>
</Header>
