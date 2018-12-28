import React, { Fragment } from 'react'
import styled from 'styled-components'
import Column from '../style/Column'
import Instagram from '../icons/Instagram'
import Facebook from '../icons/Facebook'
import Mail from '../icons/Mail'
import Phone from '../icons/Phone'


const Kontakt = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    
    svg {
      padding-right: 1rem;
    }
    
`
const A = styled.a`
    display: flex;
    align-items: center;
`

export default () =>
    <Kontakt>
        <Fragment>
            <Column>
                <div>Björn Ruppert</div>
                <A href="https://www.instagram.com/bjoernruppert/"><Instagram/>instagram.com/bjoernruppert</A>
                <A href="https://www.facebook.com/bjorn.ruppert"><Facebook/>facebook.com/bjorn.ruppert</A>
                <A href="mailto:bjoernruppert@gmx.net"><Mail/>bjoernruppert@gmx.net</A>
                <A href="tel:+49157 347 99 33 7"><Phone/>0157 347 99 33 7</A>
            </Column>
        </Fragment>
    </Kontakt>
