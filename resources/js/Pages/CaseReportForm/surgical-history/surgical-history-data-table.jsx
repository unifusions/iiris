
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { router } from "@inertiajs/react";
import { Trash } from "lucide-react";

export default function SurgicalHistoryDataTable({ crf, entity, entityType, surgicalhistories, deletable }) {
    const handleDelete = (sh) => {

        const params = { crf: crf, [entityType]: entity, surgicalhistory: sh }
        const options = { preserveScroll: true, }
        router.delete(route(`crf.${entityType}.surgicalhistory.destroy`, params), options)
    }
    return (
        <Table className="max-w-120">
            <TableHeader className="bg-muted">
                <TableHead>Date</TableHead>
                <TableHead>Procedure</TableHead>
                <TableHead>Treatment</TableHead>
                {deletable && <TableHead className="text-right">Actions</TableHead>}

            </TableHeader>
            <TableBody>
                {surgicalhistories?.length > 0 &&
                    surgicalhistories.map((sh) => <TableRow>
                        <TableCell>{sh.sh_date}</TableCell>
                        <TableCell>{sh.diagnosis}</TableCell>
                        <TableCell>
                            <Badge variant={sh.treatment === null ? 'warning' :

                                sh.treatment === 1 ? 'success' : 'danger'
                            }>
                                {sh.treatment === null ? 'Unknown' :

                                    sh.treatment === 1 ? 'On Treatment' : 'Not on Treatment'}
                            </Badge>
                            {sh.treatment}</TableCell>
                        {deletable && <TableCell className="text-right">
                            <Button onClick={() => handleDelete(sh)} variant="destructive" method="delete" as="button" ><Trash /> Delete </Button></TableCell>}
                    </TableRow>)
                }
            </TableBody>
        </Table>
    )
}