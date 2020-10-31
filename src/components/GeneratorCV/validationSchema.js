import * as Yup from 'yup';

const yearNow = new Date().getFullYear();

export const schema = () => {
    return Yup.object().shape({
        name: Yup.string()
            .min(2, 'The name must be more than one letter').required('Required field'),
        surname: Yup.string().min(2, 'The surname must be more than one letter').required('Required field'),
        description: Yup.string().min(10, 'Too short description').max(100, 'Too long').required('Required field'),
        skills: Yup.array().of(
            Yup.object().shape({
                list: Yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
                title: Yup.string().min(4, 'Too short skill title').max(50, 'Too long').required('Required field'),
            })),
        experience: Yup.object().shape({
            startYear: Yup.number().min(1917, 'Wrong year! Min year 1917').max(yearNow, 'You cannot enter a year after 2020').required('Required field'),
            endYear: Yup.number().min(1917, 'Wrong year! Min year 1917').max(yearNow, 'You cannot enter a year after 2020').required('Required field'),
            companyName: Yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
            position: Yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
            description: Yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
            projects: Yup.array().of(
                Yup.object().shape({
                    projectName: Yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
                    projectDescription: Yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field')
                }))
        })
    })
}