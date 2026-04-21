import SectionNoData from "@/Components/ui-ext/SectionNoData";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import { Card, CardContent } from "@/Components/ui/card";
import { Activity } from "lucide-react";
import { RenderFieldBoolDatas, RenderFieldDatas } from "../FormData/FormDataHelper";
import ElectrocardiogramForm from "./electrocardiogram-form";


const SECTION_TITLE = "Electrocardiogram";
export default function Electrocardiogram({
    crf, entity, entityType, isEditing, onEdit, onCancel,
    enableActions, electrocardiograms, role,
}) {
    const editMode = electrocardiograms === null ? 'store' : 'update';
    const options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }
    return (
        <Card  >
            <SectionTitle
                icon={Activity}
                title={SECTION_TITLE}
                enableActions={enableActions}
                coordinator={role.coordinator}
                data={electrocardiograms}
 isEditing={isEditing}
                    onEdit={onEdit}

            />
            {isEditing ? <ElectrocardiogramForm 
                crf={crf}
                entity={entity}
                entityType={entityType}
                electrocardiograms={electrocardiograms}
                editMode={editMode}
                onCancel={onCancel}
            />  :  <CardContent>
                {
                    electrocardiograms !== null ?

                        <div className="space-y-3">  <RenderFieldDatas labelText='Date of Investigation' value={electrocardiograms.ecg_date !== null ? new Date(electrocardiograms.ecg_date).toLocaleString('en-in', options) : null} />
                            <RenderFieldDatas labelText='Rhythm' value={electrocardiograms.rhythm} />
                            {electrocardiograms.rhythm === "Others" &&
                                <RenderFieldDatas labelText='' value={electrocardiograms.rhythm_others} />

                            }
                            <RenderFieldDatas labelText='Rate' value={electrocardiograms.rate} units='bpm' />
                            <RenderFieldBoolDatas labelText='LVH' boolValue={electrocardiograms.lvh} />
                            <RenderFieldBoolDatas labelText='LV Strain' boolValue={electrocardiograms.lvs} />
                            <RenderFieldDatas labelText='PR Interval' value={electrocardiograms.printerval} units='ms' />
                            <RenderFieldDatas labelText='QRS Duration' value={electrocardiograms.qrsduration} units='ms' />
                        </div> : <SectionNoData title={SECTION_TITLE} />
                }
            </CardContent>}
           
        </Card>
    )
}