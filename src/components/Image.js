/**
 * Created by libor on 09.09.2017.
 */
import React from 'react'
import Image from '../style/Image'
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
    //height: 300px;
`

export default ({ img, name }) =>
    <Image>
        <Img src={img} alt={name}/>
    </Image>