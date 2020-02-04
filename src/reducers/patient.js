import { handleActions } from 'redux-actions';

const initState = () => ({
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
});

export default handleActions(
	{
		PATIENT_ACTION: state => ({
			...state,
			loading: true,
		}),
	},
	initState
);
