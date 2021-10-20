import { Table, TableHeadRow, TableHead, TableRow, TableItem } from './styles'
import { Student } from '../../types/Student'

type Props = {
    people: Student[]
}

export const PersonListTable = ({ people }: Props) => {
    return (
        <Table>
            <thead>
            <TableHeadRow>
                <TableHead width={25}>Id</TableHead>
                <TableHead width={25}>Nome</TableHead>
                <TableHead width={25}>CPF</TableHead>
                <TableHead width={25}>Criação</TableHead>
            </TableHeadRow>
            </thead>
            <tbody>
            {people.map((person, key)=> (
                <TableRow key={key}>
                    <TableItem width={30}>{person.id}</TableItem>
                    <TableItem width={30}>{person.name}</TableItem>
                    <TableItem width={15}>{person.cpf}</TableItem>
                    <TableItem width={25}>{person.createdAt}</TableItem>
                </TableRow>
            ))}
            </tbody>
        </Table>
    )
}