import { createAction, handleActions } from 'redux-actions';
import { useRedux } from 'utils/hooks/redux';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

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

export const calculatorResult = createAction('CALCULATOR_RESULT', () => async (dispatch, getState) => {
    const { patient } = getState();

    const BSA = patient['Head & Neck'].area.areaPercent * 0.1
        + patient['Upper extremities'].area.areaPercent  * 0.2
        + patient['Trunk'].area.areaPercent  * 0.3
        + patient['Lower extremities'].area.areaPercent  * 0.4

    const result = parseInt(patient['Head & Neck'].score) 
        + parseInt(patient['Upper extremities'].score)
        + parseInt(patient['Trunk'].score)
        + parseInt(patient['Lower extremities'].score)
    
    let interpretation;
    if (result <= 0) interpretation = 'Clear';
    if (result >= 0.1 && result <= 1.0) interpretation = 'Almost Clear';
    if (result >= 1.1 && result <= 7.0) interpretation = 'Mild';
    if (result >= 7.1 && result <= 21.0) interpretation = 'Moderate';
    if (result >= 21.1 && result <= 50.0) interpretation = 'Severe';
    if (result >= 50.1 && result <= 72.0) interpretation = 'Very Severe';
    if (result > 72.0) interpretation = 'Very Severe';

    return new Promise((resolve, reject) => {
        resolve({ EASI: result, interpretation, BSA })
        reject("[Action] Dispatch calculatorResult Fail !!")

        return { EASI: result, interpretation, BSA };
    })
});

export const setPatientIGA = createAction('SET_PATIENT_IGA', id => async (dispatch, getState) => {
    const IGA_MAP = {
        0: '0 - Clear',
        1: '1 - Almost Clear',
        2: '2 - Mild',
        3: '3 - Moderate',
        4: '4 - Severe'
    };

    return new Promise((resolve, reject) => {
        resolve({ IGA: IGA_MAP[id] })
        reject("[Action] Dispatch calculatorResult Fail !!")

        return { IGA:  IGA_MAP[id] };
    })
});

export const setPatientBSA = createAction('SET_PATIENT_BSA', val => async (dispatch, getState) => {
    const BSA = val.toFixed(0);

    return new Promise((resolve, reject) => {
        resolve({ BSA })
        reject("[Action] Dispatch calculatorResult Fail !!")

        return { BSA };
    })
});

export const setPatientInfomation = createAction('SET_PATIENT_INFOMATION', data => async (dispatch, getState) => {
    const personal = {
        patientId: uuidv4(),
        patientName: data.name,
        age: data.age,
        gender: data.gender,
        reportDate: moment().format('YYYY/MM/DD HH:mm:ss'),
    };
    return new Promise((resolve, reject) => {
        resolve(personal)
        reject("[Action] Dispatch setPatientInfomation Fail !!")

        return personal;
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
            CALCULATOR_RESULT_FULFILLED: (state, action) => ({
                ...state,
                interpretation: action.payload.interpretation,
                EASI: action.payload.EASI,
                BSA:  action.payload.BSA,
            }),
            SET_PATIENT_IGA_FULFILLED: (state, action) => ({
                ...state,
                IGA: action.payload.IGA,
            }),
            SET_PATIENT_BSA_FULFILLED: (state, action) => ({
                ...state,
                BSA: action.payload.BSA,
            }),
            SET_PATIENT_INFOMATION_FULFILLED: (state, action) => ({
                ...state,
                patientId: action.payload.patientId,
                patientName: action.payload.patientName,
                reportDate: action.payload.reportDate,
                age: action.payload.age,
                gender: action.payload.gender,
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
            IGA: null,
            'Head & Neck': {
                id: '1',
                color: '#f0dd00',
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
                color: '#00a590',
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
                color: '#fbba00',
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
                color: '#bcbc1c',
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
});

export const usePatient = () => useRedux(
    mapHooksToState, 
    { 
        setPatientArea,
        setPatientSymptom,
        calculatorBodyScore,
        checkTabStatus,
        calculatorResult,
        setPatientIGA,
        setPatientBSA,
        setPatientInfomation
    }
);

export default { reducer };