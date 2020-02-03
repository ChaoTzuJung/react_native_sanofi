export const symptomData = [
    {
        id: '1',
        name: 'Erythema',
        score: 0,
        data: [
            {label: 'None', image: require('../../assets/Erythema_Clear_Skin.jpg'), info: null},
            {label: 'Mild', image: require('../../assets/Erythema_Mild.jpg'), info: 'Faintly detectable, pink'},
            {label: 'Moderate', image: require('../../assets/Erythema_Moderate.jpg'), info: 'Clearly distinguishable dull red'},
            {label: 'Severe', image: require('../../assets/Erythema_Severe.jpg'), info: 'Deep dark or fiery bright red'},
        ],
    },
    {
        id: '2',
        name: 'Edema / papulation',
        score: 0,
        data: [
            {label: 'None', image: require('../../assets/Edema_Clear_Skin.jpg'), info: null},
            {label: 'Mild', image: require('../../assets/Edema_Mild.jpg'), info: 'Barely perceptible elevation'},
            {label: 'Moderate', image: require('../../assets/Edema_Moderate.jpg'), info: 'Clearly perceptible elevation but not prominent'},
            {label: 'Severe', image: require('../../assets/Edema_Severe.jpg'), info: 'Prominent elevation'},
        ],
    },
    {
        id: '3',
        name: 'Excoriation',
        score: 0,
        data: [
            {label: 'None', image: require('../../assets/Excoriation_Clear_Skin.jpg'), info: null},
            {label: 'Mild', image: require('../../assets/Excoriation_Mild.jpg'), info: 'Scant'},
            {label: 'Moderate', image: require('../../assets/Excoriation_Moderate.jpg'), info: 'Many superficial and/or some deep excoriations'},
            {label: 'Severe', image: require('../../assets/Excoriation_Severe.jpg'), info: 'Extensive superficial and/or many deep excoriations'},
        ],
    },
    {
        id: '4',
        name: 'Lichenification',
        score: 0,
        data: [
            {label: 'None', image: require('../../assets/Lichenification_Clear_Skin.jpg'), info: null },
            {label: 'Mild', image: require('../../assets/Lichenification_Mild.jpg'), info: 'Scant'},
            {label: 'Moderate', image: require('../../assets/Lichenification_Moderate.jpg'), info: 'Thickened skin with exaggerated markings and/or some prurigo nodules'},
            {label: 'Severe', image: require('../../assets/Lichenification_Severe.jpg'), info: 'Prominent thickening, exaggerated markings creating deep furrows and/or many prurigo nodules'},
        ],
    }
]