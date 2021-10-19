import { Table, TableHeadRow, TableHead, TableRow, TableItem } from './styles'
import { Student } from '../../types/Student'

type Props = {
    people: Student[]
}

export const PersonListTable = ({ people }: Props) => {
    return (
        <Table>
            <TableHeadRow>
                <TableHead width={25}>Id</TableHead>
                <TableHead width={25}>Nome</TableHead>
                <TableHead width={25}>CPF</TableHead>
                <TableHead width={25}>Criação</TableHead>
            </TableHeadRow>
            {people.map(person => (
                <TableRow>
                    <TableItem width={25}>{person.id}</TableItem>
                    <TableItem width={25}>{person.name}</TableItem>
                    <TableItem width={25}>{person.cpf}</TableItem>
                    <TableItem width={25}>{person.createdAt}</TableItem>
                </TableRow>
            ))}
        </Table>
    )
}