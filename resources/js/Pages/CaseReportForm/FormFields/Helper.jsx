export const BOOLYESNO = [
    { labelText: 'Yes', value: '1' },
    { labelText: 'No', value: '0' }
];
export const PREDEFINED_MEDICAL_HISTORY_FIELDS = [
    { fieldName: 'diabetes_mellitus', labelText: 'Diabetes Mellitus' },
    { fieldName: 'hypertension', labelText: 'Hypertension' },
    { fieldName: 'copd', labelText: 'copd' },
    { fieldName: 'respiratory_failure', labelText: 'Respiratory Failure' },
    { fieldName: 'stroke', labelText: 'Stroke' },
    { fieldName: 'peripheral_vascular_disease', labelText: 'Peripheral Vascular Disease ' },
    { fieldName: 'others', labelText: 'Others' }
];

export const PREDEFINED_CONCOMITANT_PROCEDURE = [
    { fieldName: 'cabg', labelText: 'CABG' },
    { fieldName: 'mitral_valve_repair', labelText: 'Mitral Valve Repair' },
    { fieldName: 'mitral_valve_replacement', labelText: 'Mitral Valve Replacement' },
    { fieldName: 'aortic_root', labelText: 'Aortic Root Replacement ' },
    { fieldName: 'ascending_aorta', labelText: 'Ascending Aorta Replacement ' },
    { fieldName: 'aortic_arch', labelText: 'Aortic Arch Replacement' },
    { fieldName: 'concomitant_procedure_others', labelText: 'Others' }
];


export const PREDEFINED_MEDICATION = [
    { fieldName: 'antiplatelets ', labelText: 'Antiplatelets' },
    { fieldName: 'anticoagulant', labelText: 'Anticoagulant' },
    { fieldName: 'antihypertensives', labelText: 'Antihypertensives' },
    { fieldName: 'diuretics', labelText: 'Diuretics' },
    { fieldName: 'angiotension', labelText: 'Angiotensin Receptor Neprilysin Inhibitor' },
    { fieldName: 'others', labelText: 'Others' },

];

export const FAMILY_HISTORY_FIELDS = [
    { fieldName: 'diabetes_mellitus', labelText: 'Diabetes Mellitus' },
    { fieldName: 'hypertension', labelText: 'Hypertension' },
    { fieldName: 'coronary_artery_disease', labelText: 'Coronary Artery Disease' },
    { fieldName: 'aortic_disease', labelText: 'Aortic Disease' },
    { fieldName: 'others', labelText: 'Others' }
];

export const RELATION_OPTIONS = [
    { optionText: 'Father', value: 'Father' },
    { optionText: 'Mother', value: 'Mother' },
    { optionText: 'Brother', value: 'Brother' },
    { optionText: 'Sister', value: 'Sister' }
];

export const MEDICINE_TYPES = [
    { optionText: 'Antiplatelets', value: 'antiplatelets' },
    { optionText: 'Anticoagulant', value: 'anticoagulant' },
    { optionText: 'Antihypertensives', value: 'antihypertensives' },
    { optionText: 'Diuretics', value: 'diuretics' },
    { optionText: 'Angiotension Receptor Neprilysis Inhibitor', value: 'arni' },
    { optionText: 'Others', value: 'others' }

];

export const NotAvailable = () => {
    return (
        <span className='fw-normal text-secondary fst-italic'>No data available</span>
    )
}

export const RenderBoolYesNo = ({ boolValue }) => {
    if (boolValue == null) {
        return <NotAvailable />
    }
    else {
        return (
            <span className='fw-normal'>{boolValue ? 'Yes' : 'No'}</span>
        )

    }
}

export const RenderMedicineType = ({ medicineType }) => {
    return (
         MEDICINE_TYPES.filter(medtype => medtype.value === medicineType).map(rendType =>
              (rendType.optionText)
         ))
}