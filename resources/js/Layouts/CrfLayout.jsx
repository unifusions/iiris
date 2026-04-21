
import Authenticated from "./Authenticated";
import CrfSidebar from "@/Pages/CaseReportForm/CrfSidebar";

import ScreenTitle from "@/Components/ScreenTitle";
import { usePage } from "@inertiajs/react";
import CaseReportFormData from "@/Pages/CaseReportForm/FormData/CaseReportFormData";




export default function CrfLayout({ pageTitle, children, screenTitle, backUrl,
    entity, entityType, extraActions }) {

    const { crf } = usePage().props;
    const staticLinks = [
        {
            id: 1,
            linkTitle: 'Pre-Operative',
            entity: crf.preoperative,
            crf: crf,
            entityRouteKey: 'preoperative',
            subMenu: [
                { linkTitle: 'Diagnosis', anchor: 'diagnosis' },
                { linkTitle: 'Physical Examination', anchor: 'physicalexamination' },
                { linkTitle: 'Symptoms', anchor: 'symptoms' },
                { linkTitle: 'Medical History', anchor: 'medical-history' },
                { linkTitle: 'Surgical History', anchor: 'surgical-history' },
                { linkTitle: 'Family History', anchor: 'family-history' },
                { linkTitle: 'Personal History', anchor: 'personal-history' },
                { linkTitle: 'Physical Activity', anchor: 'physical-activity' },
                { linkTitle: 'Lab Investigation', anchor: 'lab-investigation' },
                { linkTitle: 'Electrocardiogram', anchor: 'electrocardiogram' },
                { linkTitle: 'Echocardiography', anchor: 'echocardiography' },
                { linkTitle: 'Medications', anchor: 'medications' },
                { linkTitle: 'Echo Files', anchor: 'echo-files' },

            ]
        },
        {
            id: 2,
            linkTitle: 'Intra-Operative',
            entity: crf.intraoperative,
            crf: crf,
            entityRouteKey: 'intraoperative'
        },
        {
            id: 3,
            linkTitle: 'Post-Operative',
            entity: crf.postoperative,
            crf: crf,
            entityRouteKey: 'postoperative'
        }
    ]

    const svLinks = (crf.scheduledvisits || []).map((visit) => ({
        id: `visit-${visit.id}`,
        linkTitle: `Visit No. ${visit.visit_no ?? visit.id}`,
        entityRouteKey: "scheduledvisit",
        entity: visit,
        crf: crf,
        is_submitted: visit.is_submitted,

    }));

    const usvLinks = {
        url: route('crf.unscheduledvisit.index', { crf: crf }),
        linkTitle: 'Unscheduled Visits',
        isActive: route().current('crf.unscheduledvisit.*') ? true : false
    }

    const links = [
        ...staticLinks,
        ...svLinks,

    ];
    return (
        <Authenticated pageTitle={pageTitle}

            hasSecondarySidebar={true}
            secondarySidebar={<CrfSidebar links={links} staticLink={usvLinks} />}
        >
            <ScreenTitle
                title={screenTitle}
                backUrl={backUrl}
                crf={crf}
                entity={entity}
                entityType={entityType}


            />
            <CaseReportFormData crf={crf} />
            <div className="grid grid-cols-5 gap-4">
                <div className=" ">
                    <CrfSidebar links={links} staticLink={usvLinks} />
                </div>

                <div className="col-span-4 space-y-3 mt-4">

                    
                        {children}
                    

                </div>
            </div>








        </Authenticated>
    )
}