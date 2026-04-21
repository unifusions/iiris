 
 
import { Button } from "@/Components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { router } from "@inertiajs/react";
import { Trash } from "lucide-react";

export default function PhysicalActivityTable({ crf, entity, entityType, physicalactivities, deletable }) {

  const handleDelete = ( activity ) => {
    
    const params = { crf: crf, [entityType]: entity, physicalactivity: activity }
    const options = { preserveScroll: true, }
    router.delete(route(`crf.${entityType}.physicalactivity.destroy`, params), options)
  }
  return (
    <Table className="max-w-120">
      <TableHeader className="bg-muted">
        <TableHead>Activity</TableHead>
        <TableHead>Duration</TableHead>
        {deletable && <TableHead className="text-right">Actions</TableHead>}

      </TableHeader>
      <TableBody>
        {physicalactivities?.length > 0 &&
          physicalactivities.map((activity) => <TableRow>
            <TableCell>{activity.activity_type}</TableCell>
            <TableCell>{activity.duration} hrs/week</TableCell>
            {deletable && <TableCell className="text-right">
              <Button  onClick={() => handleDelete(activity)} variant="destructive" method="delete" as="button" ><Trash /> Delete </Button></TableCell>}
          </TableRow>)
        }
      </TableBody>
    </Table>

  )
}