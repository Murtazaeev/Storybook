import React from 'react'
import Button from './Button'

export default {
    title: 'Button',
    component: Button
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Succes = () => <Button variant='succes'>Succes</Button>
export const Danger = () => <Button variant='denger'>Danger</Button>
// this is a comment