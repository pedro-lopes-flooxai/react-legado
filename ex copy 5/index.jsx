import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Silva'>
        <Member name="Guilherme"></Member>
        <Member name="Rafael"></Member>
        <Member name="Julia"></Member>
    </Family>
    , document.getElementById('app'))