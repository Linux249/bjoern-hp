import React from 'react'
import Header from '../style/Header'
import Menu from '../style/Menu'
import Title from '../style/Titel'
import { Link } from 'react-router-dom'

export default () => <Header>
    <Title>BJÖRN RUPPERT</Title>
    <Menu>
        <Link to='/Bilder'>bilder</Link>
        <Link to='/Ausstellungen' >ausstelungen </Link>
        <Link to='/Björn'>über mich</Link>
        <Link to='/Kontakt' >kontakt </Link>
    </Menu>
</Header>