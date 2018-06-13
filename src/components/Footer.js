import React from 'react'
import Line from '../style/Line'
import styled from 'styled-components'

const Footer = styled.div`
    width: 90%;
    max-width: 1000px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    margin-top: 20px;
    height: 4rem; 

`

export default () => <Footer>
    <Line/>

    impressum
</Footer>