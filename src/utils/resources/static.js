import FrontHead from 'assets/front-head-sm.svg';
import BackHead from 'assets/back-head-sm.svg';

import FrontUpper from 'assets/front-upper-sm.svg';
import BackUpper from 'assets/back-upper-sm.svg';

import FrontTrunk from 'assets/front-trunk-sm.svg';
import BackTrunk from 'assets/back-trunk-sm.svg';

import FrontLower from 'assets/front-lower-sm.svg';
import BackLower from 'assets/back-lower-sm.svg';

export const SCORE_MAP = {
    0: 'None: 0',
    1: 'Mid: 1',
    2: 'Moderate: 2',
    3: 'Severe: 3',
};

export const TAB_MAP = {
    1: 'Head & Neck',
    2: 'Upper extremities',
    3: 'Trunk',
    4: 'Lower extremities',
    5: 'Result',
}

export const SYMPTOM_MAP = {
    0: 'Clear_Skin',
    1: 'Mid',
    2: 'Moderate',
    3: 'Severe',
}

export const IGA_MAP = {
    0: '0 - Clear',
    1: '1 - Almost Clear',
    2: '2 - Mild',
    3: '3 - Moderate',
    4: '4 - Severe'
};

export const symptomImage = {
    'Erythema': [
        [   
            require('assets/Erythema_Clear_Skin.jpg'),
            require('assets/Erythema_Clear_Skin.jpg'),
            require('assets/Erythema_Clear_Skin.jpg'),
            require('assets/Erythema_Clear_Skin.jpg')
        ],
        [   
            require('assets/Erythema_Mild.jpg'),
            require('assets/Erythema_Mild.jpg'),
            require('assets/Erythema_Mild.jpg'),
            require('assets/Erythema_Mild.jpg')
        ],
        [   
            require('assets/Erythema_Moderate.jpg'),
            require('assets/Erythema_Moderate.jpg'),
            require('assets/Erythema_Moderate.jpg'),
            require('assets/Erythema_Moderate.jpg')
        ],
        [   
            require('assets/Erythema_Severe.jpg'),
            require('assets/Erythema_Severe.jpg'),
            require('assets/Erythema_Severe.jpg'),
            require('assets/Erythema_Severe.jpg')
        ],
    ],
    'Edema / papulation': [
        [
            require('assets/Edema_Clear_Skin.jpg'),
            require('assets/Edema_Clear_Skin.jpg'),
            require('assets/Edema_Clear_Skin.jpg'),
            require('assets/Edema_Clear_Skin.jpg')
        ],
        [
            require('assets/Edema_Mild.jpg'),
            require('assets/Edema_Mild.jpg'),
            require('assets/Edema_Mild.jpg'),
            require('assets/Edema_Mild.jpg')
        ],
        [
            require('assets/Edema_Moderate.jpg'),
            require('assets/Edema_Moderate.jpg'),
            require('assets/Edema_Moderate.jpg'),
            require('assets/Edema_Moderate.jpg')
        ],
        [
            require('assets/Edema_Severe.jpg'),
            require('assets/Edema_Severe.jpg'),
            require('assets/Edema_Severe.jpg'),
            require('assets/Edema_Severe.jpg')
        ],
    ],
    'Excoriation': [
        [
            require('assets/Excoriation_Clear_Skin.jpg'),
            require('assets/Excoriation_Clear_Skin.jpg'),
            require('assets/Excoriation_Clear_Skin.jpg'),
            require('assets/Excoriation_Clear_Skin.jpg')
        ],
        [
            require('assets/Excoriation_Mild.jpg'),
            require('assets/Excoriation_Mild.jpg'),
            require('assets/Excoriation_Mild.jpg'),
            require('assets/Excoriation_Mild.jpg')
        ],
        [
            require('assets/Excoriation_Moderate.jpg'),
            require('assets/Excoriation_Moderate.jpg'),
            require('assets/Excoriation_Moderate.jpg'),
            require('assets/Excoriation_Moderate.jpg')
        ],
        [
            require('assets/Excoriation_Severe.jpg'),
            require('assets/Excoriation_Severe.jpg'),
            require('assets/Excoriation_Severe.jpg'),
            require('assets/Excoriation_Severe.jpg')
        ],
    ],
    'Lichenification': [
        [
            require('assets/Lichenification_Clear_Skin.jpg'),
            require('assets/Lichenification_Clear_Skin.jpg'),
            require('assets/Lichenification_Clear_Skin.jpg'),
            require('assets/Lichenification_Clear_Skin.jpg')
        ],
        [
            require('assets/Lichenification_Mild.jpg'),
            require('assets/Lichenification_Mild.jpg'),
            require('assets/Lichenification_Mild.jpg'),
            require('assets/Lichenification_Mild.jpg')
        ],
        [
            require('assets/Lichenification_Moderate.jpg'),
            require('assets/Lichenification_Moderate.jpg'),
            require('assets/Lichenification_Moderate.jpg'),
            require('assets/Lichenification_Moderate.jpg')
        ],
        [
            require('assets/Lichenification_Severe.jpg'),
            require('assets/Lichenification_Severe.jpg'),
            require('assets/Lichenification_Severe.jpg'),
            require('assets/Lichenification_Severe.jpg')
        ],
    ],
}

export const symptomData = [
    {
        id: '1',
        name: 'Erythema',
        score: 0,
        data: [
            {name: 'Erythema', label: 'None', score: 0, image: symptomImage['Erythema'][0][0], info: null},
            {name: 'Erythema', label: 'Mild', score: 1, image: symptomImage['Erythema'][1][0], info: 'Faintly detectable, pink'},
            {name: 'Erythema', label: 'Moderate', score: 2, image: symptomImage['Erythema'][2][0], info: 'Clearly distinguishable dull red'},
            {name: 'Erythema', label: 'Severe', score: 3, image: symptomImage['Erythema'][3][0], info: 'Deep dark or fiery bright red'},
        ],
    },
    {
        id: '2',
        name: 'Edema / papulation',
        score: 0,
        data: [
            {name: 'Edema / papulation', label: 'None', score: 0, image: symptomImage['Edema / papulation'][0][0], info: null},
            {name: 'Edema / papulation', label: 'Mild', score: 1, image: symptomImage['Edema / papulation'][1][0], info: 'Barely perceptible elevation'},
            {name: 'Edema / papulation', label: 'Moderate', score: 2, image: symptomImage['Edema / papulation'][2][0], info: 'Clearly perceptible elevation but not prominent'},
            {name: 'Edema / papulation', label: 'Severe', score: 3, image: symptomImage['Edema / papulation'][3][0], info: 'Prominent elevation'},
        ],
    },
    {
        id: '3',
        name: 'Excoriation',
        score: 0,
        data: [
            {name: 'Excoriation', label: 'None', score: 0, image: symptomImage['Excoriation'][0][0], info: null},
            {name: 'Excoriation', label: 'Mild', score: 1, image: symptomImage['Excoriation'][1][0], info: 'Scant'},
            {name: 'Excoriation', label: 'Moderate', score: 2, image: symptomImage['Excoriation'][2][0], info: 'Many superficial and/or some deep excoriations'},
            {name: 'Excoriation', label: 'Severe', score: 3, image: symptomImage['Excoriation'][3][0], info: 'Extensive superficial and/or many deep excoriations'},
        ],
    },
    {
        id: '4',
        name: 'Lichenification',
        score: 0,
        data: [
            {name: 'Lichenification', label: 'None', score: 0, image: symptomImage['Lichenification'][0][0], info: null },
            {name: 'Lichenification', label: 'Mild', score: 1, image: symptomImage['Lichenification'][1][0], info: 'Scant'},
            {name: 'Lichenification', label: 'Moderate', score: 2, image: symptomImage['Lichenification'][2][0], info: 'Thickened skin with exaggerated markings and/or some prurigo nodules'},
            {name: 'Lichenification', label: 'Severe', score: 3, image: symptomImage['Lichenification'][3][0], info: 'Prominent thickening, exaggerated markings creating deep furrows and/or many prurigo nodules'},
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
};