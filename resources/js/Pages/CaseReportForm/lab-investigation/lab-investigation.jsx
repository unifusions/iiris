import SectionTitle from "@/Components/ui-ext/SectionTitle";
import { Card, CardContent } from "@/Components/ui/card";
import { Syringe } from "lucide-react";
import LabInvestigationForm from "./lab-investigation-form";
import LabInvestigationData from "./lab-investigation-data";


const SECTION_TITLE = "Lab Investigation";
export default function LabInvestigation({
    labinvestigations, role, enableActions, crf, entity, entityType, isEditing, onEdit, onCancel
}) {

    const editMode = labinvestigations === null ? 'store' : 'update';
    return (
        <Card>
            <SectionTitle title={SECTION_TITLE}
                icon={Syringe}
                enableActions={enableActions}
                coordinator={role.coordinator}
                data={labinvestigations}
                isEditing={isEditing}
                onEdit={onEdit}
            />

            {isEditing ?
                <LabInvestigationForm
                    crf={crf}
                    entity={entity}
                    entityType={entityType}
                    labinvestigations={labinvestigations}
                    editMode={editMode}
                    onCancel={onCancel} />
                : <LabInvestigationData
                    labinvestigations={labinvestigations}
                />}

        </Card>
    )
}