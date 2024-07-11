const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        let res = `Мне ${plan.age} и я владею языками `;
        for (let l of plan.skills.languages) {
            res += l.toUpperCase() + " ";
        }

        res = res.substring(0, res.length - 1);

        return res;
    }
};

function showExperience(plan) {
    let { exp } = plan.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let { programmingLangs } = plan.skills;
    let res = "";
    let keys = Object.keys(programmingLangs);
    for (let i = 0; i < keys.length; i++) {
        res += `Язык ${keys[i]} изучен на ${programmingLangs[keys[i]]}`;
        res += "\n";
    }


    return res;
}
console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
