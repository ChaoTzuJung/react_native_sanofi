import FrontHead from 'assets/front-head-sm.svg';
import BackHead from 'assets/back-head-sm.svg';

import FrontUpper from 'assets/front-upper-sm.svg';
import BackUpper from 'assets/back-upper-sm.svg';

import FrontTrunk from 'assets/front-trunk-sm.svg';
import BackTrunk from 'assets/back-trunk-sm.svg';

import FrontLower from 'assets/front-lower-sm.svg';
import BackLower from 'assets/back-lower-sm.svg';

export const symptomData = [
    {
        id: '1',
        name: 'Erythema',
        score: 0,
        data: [
            {label: 'None', score: 0, image: require('assets/Erythema_Clear_Skin.jpg'), info: null},
            {label: 'Mild', score: 1, image: require('assets/Erythema_Mild.jpg'), info: 'Faintly detectable, pink'},
            {label: 'Moderate', score: 2, image: require('assets/Erythema_Moderate.jpg'), info: 'Clearly distinguishable dull red'},
            {label: 'Severe', score: 3, image: require('assets/Erythema_Severe.jpg'), info: 'Deep dark or fiery bright red'},
        ],
    },
    {
        id: '2',
        name: 'Edema / papulation',
        score: 0,
        data: [
            {label: 'None', score: 0, image: require('assets/Edema_Clear_Skin.jpg'), info: null},
            {label: 'Mild', score: 1, image: require('assets/Edema_Mild.jpg'), info: 'Barely perceptible elevation'},
            {label: 'Moderate', score: 2, image: require('assets/Edema_Moderate.jpg'), info: 'Clearly perceptible elevation but not prominent'},
            {label: 'Severe', score: 3, image: require('assets/Edema_Severe.jpg'), info: 'Prominent elevation'},
        ],
    },
    {
        id: '3',
        name: 'Excoriation',
        score: 0,
        data: [
            {label: 'None', score: 0, image: require('assets/Excoriation_Clear_Skin.jpg'), info: null},
            {label: 'Mild', score: 1, image: require('assets/Excoriation_Mild.jpg'), info: 'Scant'},
            {label: 'Moderate', score: 2, image: require('assets/Excoriation_Moderate.jpg'), info: 'Many superficial and/or some deep excoriations'},
            {label: 'Severe', score: 3, image: require('assets/Excoriation_Severe.jpg'), info: 'Extensive superficial and/or many deep excoriations'},
        ],
    },
    {
        id: '4',
        name: 'Lichenification',
        score: 0,
        data: [
            {label: 'None', score: 0, image: require('assets/Lichenification_Clear_Skin.jpg'), info: null },
            {label: 'Mild', score: 1, image: require('assets/Lichenification_Mild.jpg'), info: 'Scant'},
            {label: 'Moderate', score: 2, image: require('assets/Lichenification_Moderate.jpg'), info: 'Thickened skin with exaggerated markings and/or some prurigo nodules'},
            {label: 'Severe', score: 3, image: require('assets/Lichenification_Severe.jpg'), info: 'Prominent thickening, exaggerated markings creating deep furrows and/or many prurigo nodules'},
        ],
    }
];

export const tabData = [
    {
        id: '1',
        title: 'Head & Neck',
        score: 0,
        front: 'NeckFront',
        back: 'NeckBack',
    },
    {
        id: '2',
        title: 'Upper extremities',
        score: 0,
        front: 'ArmFront',
        back: 'ArmBack',
    },
    {
        id: '3',
        title: 'Trunk',
        score: 0,
        front: 'BodyFront',
        back: 'BodyBack',
    },
    {
        id: '4',
        title: 'Lower extremities',
        score: 0,
        front: 'LegFront',
        back: 'LegBack',
    },
    {
        id: '5',
        title: 'Result',
        score: null,
        front: null,
        back: null,
    },
];

export const bodyData = {
    'Head & Neck': [
        {
            title: 'Front',
            value1: '17%',
            value2: '33%',
            color1: '#f7ee7f',
            color2: '#f0dd00',
            component: FrontHead
        },
        {
            title: 'Back',
            value1: '17%',
            value2: '33%',
            color1: '#f7ee7f',
            color2: '#f0dd00',
            component: BackHead
        }
    ],
    'Upper extremities': [
        {
            title: 'Front',
            value1: '17%',
            value2: '33%',
            color1: '#00a590',
            color2: '#00a590',
            component: FrontUpper
        },
        {
            title: 'Back',
            value1: '17%',
            value2: '33%',
            color1: '#00a590',
            color2: '#00a590',
            component: BackUpper
        }
    ],
    'Trunk': [
        {
            title: 'Front',
            value2: '55%',
            color2: '#fbba00',
            component: FrontTrunk
        },
        {
            title: 'Back',
            value2: '45%',
            color2: '#fbba00',
            component: BackTrunk
        }
    ],
    'Lower extremities': [
        {
            title: 'Front',
            value1: '22.5%',
            value2: '22.5%',
            color1: '#bcbc1c',
            color2: '#bcbc1c',
            component: FrontLower
        },
        {
            title: 'Back',
            value1: '22.5%',
            value2: '22.5%',
            value3: '22.5%',
            color1: '#bcbc1c',
            color2: '#bcbc1c',
            color3: '#dddd8d',
            component: BackLower
        }
    ],
}