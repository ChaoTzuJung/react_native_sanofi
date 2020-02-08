import { createAction, handleActions } from 'redux-actions';
import { useRedux } from 'utils/hooks/redux';

export const setPatientArea = createAction('SET_PATIENT_AREA', area => async (dispatch, getState) => {
    dispatch(calculatorBodyScore(area.body));
    return area;
});

export const setPatientSymptom = createAction('SET_PATIENT_SYMPTOM', symptom => async (dispatch, getState) => {
    dispatch(calculatorBodyScore(symptom.body));
    return symptom;
});

export const calculatorBodyScore = createAction('CALCULATOR_BODY_SCORE', async body => body);

const reducer = {
	patient: handleActions(
		{
			SET_PATIENT_AREA_FULFILLED: (state, action) => ({
                ...state,
                [action.payload.body]: {
                    ...state[action.payload.body],
                    area: {
                        ...action.payload,
                    }
                }
            }),
            SET_PATIENT_AREA_REJECTED: (state, action) => ({
                ...state,
                err: action.payload.message,
            }),
            SET_PATIENT_SYMPTOM_FULFILLED: (state, action) => ({
                ...state,
                [action.payload.body]: {
                    ...state[action.payload.body],
                    symptom: {
                        ...state[action.payload.body].symptom,
                        ...action.payload,
                    }
                }
            }),
            CALCULATOR_BODY_SCORE_FULFILLED:  (state, action) => {
                const areaPoint = state[action.payload].area.areaScore;
                console.log('areaPoint:', areaPoint);
                const symptomScore = Object.values(state[action.payload].symptom).reduce((accumulator, currentValue) => {
                    return accumulator + currentValue
                }, 0);
                console.log('symptomScore:', symptomScore);
                const sum = areaPoint * symptomScore * 0.1;
                console.log(symptomScore);
                return {
                    ...state,
                    [action.payload]: {
                        ...state[action.payload],
                        score: sum
                    }
                }
            }
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
                    'Edema / papulation': 0,
                    Excoriation: 0,
                    Lichenification: 0,
                },
                score: 0,
            },
            'Upper extremities': {
                id: '2',
                area: {
                    areaScore: 0,
                    areaPercent: 0,
                },
                symptom: {
                    Erythema: 0,
                    'Edema / papulation': 0,
                    Excoriation: 0,
                    Lichenification: 0,
                },
                score: 0,
            },
            'Trunk': {
                id: '3',
                area: {
                    areaScore: 0,
                    areaPercent: 0,
                },
                symptom: {
                    Erythema: 0,
                    'Edema / papulation': 0,
                    Excoriation: 0,
                    Lichenification: 0,
                },
                score: 0,
            },
            'Lower extremities': {
                id: '4',
                area: {
                    areaScore: 0,
                    areaPercent: 0,
                },
                symptom: {
                    Erythema: 0,
                    'Edema / papulation': 0,
                    Excoriation: 0,
                    Lichenification: 0,
                },
                score: 0,
            },
        }
	),
};

const mapHooksToState = state => ({
    patient: state.patient,
    HeadScore: state.patient['Head & Neck'],
    UpperScore:  state.patient['Upper extremities'],
    TrunkScore:  state.patient['Trunk'],
    LowerScore:  state.patient['Lower extremities'],
});

export const usePatient = () => useRedux(mapHooksToState, { setPatientArea, setPatientSymptom, calculatorBodyScore });

export default { reducer };