import { useState } from 'react'
import * as Container from './styles'
import { Item } from '../../types/Item'

type Props =
{
    item: Item;
}

export default function ListItem({ item }: Props)
{
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <Container.Container done={isChecked}>
            <input type="checkbox"
            name=""
            id="" 
            checked={isChecked} 
            onChange={event => setIsChecked(event.target.checked)}

            />
            <label htmlFor="">{item.name}</label>
        </Container.Container>
    )
}