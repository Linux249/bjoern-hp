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

export default () => <Kontakt>
    <Fragment>
        <Column>
            Björn Ruperecht <br/>
            mail@email.com <br/>
            0172 123 456 <br/>

        </Column>
        <Column>
            <a href="https://www.instagram.com/bjoernruppert/"><Instagram/></a>
            <a href="https://www.facebook.com/bjorn.ruppert"><Facebook/></a>
        </Column>
    </Fragment>
</Kontakt>