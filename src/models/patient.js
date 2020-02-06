import { createAction, handleActions } from 'redux-actions';
import { useRedux } from 'utils/hooks/redux';

// area = payload
export const setPatientArea = createAction('SET_PATIENT_AREA', async area => area);

const reducer = {
	patient: handleActions(
		{
			SET_PATIENT_AREA_FULFILLED: (state, action) => ({
                ...state,
                [action.payload.body]: {
                    area: {
                        ...action.payload,
                    }
                }
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
            'Head & Neck': {
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
                score: '0',
            },
            'Upper extremities': {
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
                score: '0',
            },
            'Trunk': {
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
                score: '0',
            },
            'Lower extremities': {
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
                score: '0',
            },
        }
	),
};

const mapHooksToState = state => ({
	patient: state.patient,
});

export const usePatient = () => useRedux(mapHooksToState, { setPatientArea });

export default { reducer };