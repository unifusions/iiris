import SectionTitle from "@/Components/ui-ext/SectionTitle";
import { Card, CardContent } from "@/Components/ui/card";
import { RenderFieldDatas, RenderSymptomDatas, RenderSymptomRows } from "../FormData/FormDataHelper";
import { Siren } from "lucide-react";
import SectionNoData from "@/Components/ui-ext/SectionNoData";
import SymptomDataForm from "./symptom-data-form";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/Components/ui/table";


const symptomConfig = [
    {
        labelText: "Angina on Exertion",
        key: "angina",
        classKey: "angina_class",
        durationKey: "angina_duration",
    },
    {
        labelText: "Dyspnea on Exertion",
        key: "dyspnea",
        classKey: "dyspnea_class",
        durationKey: "dyspnea_duration",
    },
    {
        labelText: "Syncope",
        key: "syncope",
        durationKey: "syncope_duration",
    },
    {
        labelText: "Palpitation",
        key: "palpitation",
        durationKey: "palpitation_duration",
    },
    {
        labelText: "Giddiness",
        key: "giddiness",
        durationKey: "giddiness_duration",
    },
    {
        labelText: "Fever",
        key: "fever",
        durationKey: "fever_duration",
    },
    {
        labelText: "Heart Failure Admission",
        key: "heart_failure_admission",
        durationKey: "heart_failure_admission_duration",
    },
    {
        labelText: "Others",
        key: "others",
        classKey: "others_text",
        durationKey: "others_duration",
    },
];

export default function SymptomData({
    crf, entity, entityType,
    symptoms, role, enableActions, title, isEditing, onEdit, onCancel }) {
    return (
        <Card>
            <SectionTitle title={`${title} Symptoms`} enableActions={enableActions}

                coordinator={role.coordinator}

                data={symptoms}
                icon={Siren}


                isEditing={isEditing}
                onEdit={onEdit}
            />

            <CardContent>

                {
                    isEditing ? <SymptomDataForm
                        title={title}
                        crf={crf}
                        entity={entity}
                        entityType={entityType}
                        onCancel={onCancel} onEdit={onEdit}
                        symptom={symptoms}
                        editMode={symptoms === null ? 'store' : 'update'}

                    /> :
                        <>
                            {symptoms !== null ?
                                <div className="space-y-3">
                                    {symptoms.symptoms ? <>
                                        <RenderFieldDatas labelText="Symptoms" value={symptoms.symptoms && 'Yes'} />

                                        
                                        <Table>
                                            <TableHeader className="border-b border-gray-200 bg-muted">
                                                <TableHead>Symptom</TableHead>
                                                <TableHead>Presence</TableHead>
                                                <TableHead>Class</TableHead>
                                                <TableHead>Duration</TableHead>
                                            </TableHeader>
                                            <TableBody>
                                                {symptomConfig.map((item) => (
                                                 


                                                        <RenderSymptomRows
                                                            key={item.key}
                                                            labelText={item.labelText}
                                                            boolValue={symptoms[item.key]}
                                                            symptomClass={item.classKey ? symptoms[item.classKey] : undefined}
                                                            duration={symptoms[item.durationKey]}
                                                        />
                                                   
                                                ))}
                                            </TableBody>
                                        </Table>





                                    </> :

                                        'No symptoms found'}





                                </div> : <SectionNoData title={`${title} Symptoms`} />

                            }
                        </>

                }
            </CardContent>

        </Card>
    )
}