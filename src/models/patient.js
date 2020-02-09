import { createAction, handleActions } from 'redux-actions';
import { useRedux } from 'utils/hooks/redux';


export const setPatientArea = createAction('SET_PATIENT_AREA', ({ areaScore, areaPercent }) => async (dispatch, getState) => {
    const { route } = getState();

    return new Promise((resolve, reject) => {
        resolve({ areaScore, areaPercent, body: route.query })
        reject("[Action] Dispatch calculatorBodyScore Fail !!")

        return { areaScore, areaPercent, body: route.query };
    })
});

export const setPatientSymptom = createAction('SET_PATIENT_SYMPTOM', symptom => async (dispatch, getState) => {
    const { route } = getState();

    return new Promise((resolve, reject) => {
        resolve({ ...symptom, body: route.query })
        reject("[Action] Dispatch setPatientSymptom Fail !!")

        return { ...symptom, body: route.query };
    })
});

export const calculatorBodyScore = createAction('CALCULATOR_BODY_SCORE', body => async (dispatch, getState) => {
    const { patient, route } = getState();
    const areaPoint = patient[body].area.areaScore;
    const symptomScore = Object.values(patient[body].symptom).reduce((prev, element) => prev + parseInt(element), 0);
    const sum = (areaPoint * symptomScore * 0.1).toFixed(1);

    return new Promise((resolve, reject) => {
        resolve({ sum, body })
        reject("[Action] Dispatch calculatorBodyScore Fail !!")

        return { sum, body };
    })
});

export const checkTabStatus = createAction('CHECK_TAB_STATUS', body => async (dispatch, getState) => {
    const { patient, route } = getState();
    const { area, symptom } = patient[body];
    const isCompleted = area.areaScore !== null
        && symptom.Erythema !== '0' 
        && symptom['Edema / papulation'] !== '0'
        && symptom.Excoriation !== '0'
        && symptom.Lichenification !== '0';
    
    return new Promise((resolve, reject) => {
        resolve({ isCompleted, body })
        reject("[Action] Dispatch checkTabStatus Fail !!")

        return { isCompleted, body };
    })
});

const reducer = {
	patient: handleActions(
		{
			SET_PATIENT_AREA_FULFILLED: (state, action) => ({
                ...state,
                [action.payload.body]: {
                    ...state[action.payload.body],
                    area: {
                        areaScore: action.payload.areaScore,
                        areaPercent: action.payload.areaPercent
                    }
                }
            }),
            SET_PATIENT_SYMPTOM_FULFILLED: (state, action) => ({
                ...state,
                [action.payload.body]: {
                    ...state[action.payload.body],
                    symptom: {
                        Erythema: action.payload.Erythema,
                        'Edema / papulation': action.payload['Edema / papulation'],
                        Excoriation: action.payload.Excoriation,
                        Lichenification: action.payload.Lichenification,
                    }
                }
            }),
            CALCULATOR_BODY_SCORE_FULFILLED: (state, action) => ({
                ...state,
                [action.payload.body]: {
                    ...state[action.payload.body],
                    score: action.payload.sum,
                }
            }),
            CHECK_TAB_STATUS_FULFILLED: (state, action) => ({
                ...state,
                [action.payload.body]: {
                    ...state[action.payload.body],
                    completed: action.payload.isCompleted,
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
                    areaScore: null,
                    areaPercent: null,
                },
                symptom: {
                    Erythema: '0',
                    'Edema / papulation': '0',
                    Excoriation: '0',
                    Lichenification: '0',
                },
                completed: false,
                score: 0,
            },
            'Upper extremities': {
                id: '2',
                area: {
                    areaScore: null,
                    areaPercent: null,
                },
                symptom: {
                    Erythema: '0',
                    'Edema / papulation': '0',
                    Excoriation: '0',
                    Lichenification: '0',
                },
                completed: false,
                score: 0,
            },
            'Trunk': {
                id: '3',
                area: {
                    areaScore: null,
                    areaPercent: null,
                },
                symptom: {
                    Erythema: '0',
                    'Edema / papulation': '0',
                    Excoriation: '0',
                    Lichenification: '0',
                },
                completed: false,
                score: 0,
            },
            'Lower extremities': {
                id: '4',
                area: {
                    areaScore: null,
                    areaPercent: null,
                },
                symptom: {
                    Erythema: '0',
                    'Edema / papulation': '0',
                    Excoriation: '0',
                    Lichenification: '0',
                },
                completed: false,
                score: 0,
            },
            'Result': {
                id: '5',
                completed: false,
                score: null,
            }
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

export const usePatient = () => useRedux(mapHooksToState, { setPatientArea, setPatientSymptom, calculatorBodyScore, checkTabStatus });

export default { reducer };