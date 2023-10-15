import cardData from './cardData'
import _ from 'lodash'

//회사 버튼 데이터 만들기
let companyBtnData = cardData.map((data) => data.bank)
companyBtnData = _.uniq(companyBtnData)
const companyBtnResult = companyBtnData.map((btn, index) => {
  return { button: btn, active: false }
})

//혜택 버튼 데이터 만들기
const benefitData = []
cardData.forEach((cardBenefit) => {
  cardBenefit.benefit.forEach((elBenefit) => {
    if (!benefitData.includes(...Object.keys(elBenefit))) {
      benefitData.push(...Object.keys(elBenefit))
    }
  })
})
let benefitBtnResult = benefitData.map((benefit) => ({ button: benefit, active: false }))

export const companyBtn = companyBtnResult
export const benefitBtn = benefitBtnResult
