import React from 'react'
import Header from '../style/Header'
import Menu from '../style/Menu'
import Title from '../style/Titel'
import Line from '../style/Line'
import { Link } from 'react-router-dom'

export default () => <Header>
    <Title>björn ruppert</Title>
    <Menu>
        <Link to='/Bilder'>bilder</Link>
        <Link to='/Ausstellungen' >ausstellungen </Link>
        <Link to='/Björn'>björn</Link>
        <Link to='/Kontakt' >kontakt </Link>
    </Menu>
    <Line/>
</Header>