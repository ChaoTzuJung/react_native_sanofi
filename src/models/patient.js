import { createAction, handleActions } from 'redux-actions';
import { useRedux } from 'utils/hooks/redux';

export const setPatientName = createAction('SET_PATIENT_NAME', async name => {
    return name;
});

const reducer = {
	patient: handleActions(
		{
			SET_PATIENT_NAME: (state, action) => ({
                ...state,
				patientName: action.payload,
			}),
		},
        {
            patientId: '',
            patientName: '',
            reportDate: '',
            age: '',
            gender: '',
            interpretation: '',
            EASI: 0,
            BSA: 0,
            IGA: 0,
            HeadNeck: {
            id: '1',
            area: {
                areaScore: 0,
                areaPercent: 0,
            },
            symptom: {
                Erythema: 0,
                EdemaPapulation: 0,
                Excoriation: 0,
                Lichenification: 0,
            },
            bodypartScore: '0',
            },
            UpperExtremities: {
            id: '2',
            area: {
                areaScore: 0,
                areaPercent: 0,
            },
            symptom: {
                Erythema: 0,
                EdemaPapulation: 0,
                Excoriation: 0,
                Lichenification: 0,
            },
            bodypartScore: '0',
            },
            Trunk: {
            id: '3',
            area: {
                areaScore: 0,
                areaPercent: 0,
            },
            symptom: {
                Erythema: 0,
                EdemaPapulation: 0,
                Excoriation: 0,
                Lichenification: 0,
            },
            bodypartScore: '0',
            },
            LowerExtremities: {
            id: '4',
            area: {
                areaScore: 0,
                areaPercent: 0,
            },
            symptom: {
                Erythema: 0,
                EdemaPapulation: 0,
                Excoriation: 0,
                Lichenification: 0,
            },
            bodypartScore: '0',
            },
        }
	),
};

const mapHooksToState = state => ({
	patientName: state.patient.patientName,
});

export const usePatient = () => useRedux(mapHooksToState, { setPatientName });

export default { reducer };