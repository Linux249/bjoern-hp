import React, { Component } from 'react'
import Image from '../components/Image'
import Page from '../style/Page'


const context = require.context('../img/paintings', false ,/\.(jpg)$/)
const imgs = context.keys().map( (filename, i) =>
    <Image key={i} img={context(filename)} name={filename.replace('./', '').replace('.jpg','')}/>
)

export default class Bilder extends Component {


    render ()
    {
        return <Page>

            {
                imgs.map(img => img)

            }
        </Page>

    }}