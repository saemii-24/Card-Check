import cardData from './cardData'

//배열 랜덤함수
function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

// //data 선별해 보여주기 위한 함수
// function benefitSelect(category) {
//   //category에 속하는 혜택이 있다면 arr에 push
//   let categoryArr = []
//   cardData.forEach((arr) => {
//     for (let item of arr.benefit) {
//       //각 arr.benefit에 category가 있는지 확인한다. true or false
//       // if (Object.keys(item).includes(category)) {
//       if (item.hasOwnProperty(category)) {
//         arr.benefit = item[category]
//         categoryArr.push(arr)
//       }
//     }
//   })

//   //3개만 필요하므로 랜덤 3개를 추출한다.
//   shuffle(categoryArr)
//   const sliceThree = categoryArr.splice(0, 3)
//   return sliceThree
// }

function benefitSelect(category) {
  let categoryArr = []
  cardData.forEach((data) => {
    let benefitData = data.benefit
    // console.log(benefitData)
    for (let i = 0; i < benefitData.length; i++) {
      // console.log(benefitData[i])
      if (benefitData[i].hasOwnProperty(category)) {
        categoryArr.push(data)
      }
    }
  })

  categoryArr.forEach((item) => {
    for (let i = 0; i < item.benefit.length; i++) {
      let categoryBenefit = ''
      if (item.benefit[i].hasOwnProperty(category)) {
        // categoryBenefit = item.benefit[i]
        // item.benefit = categoryBenefit
        // item.benefit = item.benefit[i][category]
        console.log(Object.values(item.benefit[i]))
        item.benefit = Object.values(item.benefit[i])
      }
    }
  })
  console.log(categoryArr)
}

//실제 사용될 데이터
const benefitData = [
  {
    id: 1,
    title: '교통비 할인 카드',
    benefitBg: '/image/benefitBg--01.mp4',
    card: benefitSelect('대중교통'),
  },
  // {
  //   id: 2,
  //   title: '놀이공원 할인 카드',
  //   benefitBg: '/image/benefitBg--02.mp4',
  //   card: benefitSelect(amusementPark),
  // },
  // {
  //   id: 3,
  //   title: '영화 할인 카드',
  //   benefitBg: '/image/benefitBg--03.mp4',
  //   card: benefitSelect(movie),
  // },
  // {
  //   id: 4,
  //   title: '커피숍 할인 카드',
  //   benefitBg: '/image/benefitBg--04.mp4',
  //   card: benefitSelect(coffee),
  // },
  // {
  //   id: 5,
  //   title: '해외결제 할인 카드',
  //   benefitBg: '/image/benefitBg--05.mp4',
  //   card: benefitSelect(overseas),
  // },
  // {
  //   id: 6,
  //   title: '통신요금 할인 카드',
  //   benefitBg: '/image/benefitBg--06.mp4',
  //   card: benefitSelect(telecommunication),
  // },
]
console.log(benefitData)
export default benefitData
