import SectionNoData from "@/Components/ui-ext/SectionNoData";
import { CardContent } from "@/Components/ui/card";
import { RenderFieldDatas } from "../FormData/FormDataHelper";

export default function LabInvestigationData({ labinvestigations }) {

     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }
    if (labinvestigations === null)
        return <CardContent><SectionNoData title="Lab Investigations" /></CardContent> 


    return (
        <CardContent>
            <div className="space-y-2">
                <h6 className="font-semibold">Blood test</h6>
                <RenderFieldDatas labelText='Date of Investigation' value={labinvestigations.li_date !== null ? new Date(labinvestigations.li_date).toLocaleString('en-in', options) : null} />
                <RenderFieldDatas labelText='Red Blood Cell (RBC)' value={labinvestigations.rbc} units='million/cu.mm' />
                <RenderFieldDatas labelText='White Blood Cell (WBC)' value={labinvestigations.wbc} units='cells/cu.mm' />
                <RenderFieldDatas labelText='Hemoglobin' value={labinvestigations.hemoglobin} units='g/dl' />
                <RenderFieldDatas labelText='Hematocrit' value={labinvestigations.hematocrit} units='%' />
                <RenderFieldDatas labelText='Platelet Count' value={labinvestigations.platelet} units='cells/cu.mm' />
                <RenderFieldDatas labelText='Blood Urea' value={labinvestigations.blood_urea} units='mg/dl' />
                <RenderFieldDatas labelText='Serum Creatinine' value={labinvestigations.serum_creatinine} units='mg/dl' />
                <RenderFieldDatas labelText='Alanine Transaminase (ALT)' value={labinvestigations.alt} units='u/l' />
                <RenderFieldDatas labelText='Aspartate Transaminase (AST)' value={labinvestigations.ast} units='u/l' />
                <RenderFieldDatas labelText='Alkaline Phosphatase (ALP)' value={labinvestigations.alp} units='u/l' />
                <RenderFieldDatas labelText='Albumin' value={labinvestigations.albumin} units='gm/dl' />
                <RenderFieldDatas labelText='Total Protein' value={labinvestigations.total_protein} units='gm/dl' />
                <RenderFieldDatas labelText='Bilirubin' value={labinvestigations.bilirubin} units='mg/dl' />
                <RenderFieldDatas labelText='Prothrombin Time(PT)' value={labinvestigations.pt_inr} units='seconds' />

                <RenderFieldDatas labelText='International Normalised Ratio' value={parseFloat(labinvestigations.inr).toFixed(2)} />


            </div>
        </CardContent>
    )
}