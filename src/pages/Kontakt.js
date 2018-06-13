import React, { Fragment } from 'react'
import styled from 'styled-components'
import Page from '../style/Page'
import Column from '../style/Column'
import Instagram from '../img/Instagram'
import Facebook from '../img/Facebook'

const Kontakt = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
const Center = styled.div`
    display: flex;
    justify-content: center;
`

export default () =>
    <Kontakt>
        <Fragment>
            <Column>
                <div>Björn Ruperecht </div>
                <div>mail@email.com</div>
                <div>0172 123 456</div>
                <Center>
                    <a href="https://www.instagram.com/bjoernruppert/"><Instagram/></a>
                    <a href="https://www.facebook.com/bjorn.ruppert"><Facebook/></a>
                </Center>
            </Column>
        </Fragment>
    </Kontakt>