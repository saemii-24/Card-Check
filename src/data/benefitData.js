import cardData from './cardData'

//배열 랜덤함수
function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

function benefitSelect(category) {
  let categoryArr = []
  //데이터 복사
  const cardArr = [...cardData]
  cardArr.forEach((data) => {
    let benefitData = data.benefit
    // console.log(benefitData)
    for (let i = 0; i < benefitData.length; i++) {
      // console.log(benefitData[i])
      if (benefitData[i].hasOwnProperty(category)) {
        categoryArr.push(data)
        // data.benefit = Object.values(benefitData[i])
      }
    }
  })

  shuffle(categoryArr)
  const sliceThree = categoryArr.splice(0, 3)
  return sliceThree
}

//실제 사용될 데이터
const benefitData = [
  {
    id: 1,
    title: '교통비 할인 카드',
    benefitBg: '/image/benefitBg--01.mp4',
    keyword: '대중교통',
    card: benefitSelect('대중교통'),
  },
  {
    id: 2,
    title: '놀이공원 할인 카드',
    benefitBg: '/image/benefitBg--02.mp4',
    keyword: '놀이공원',
    card: benefitSelect('놀이공원'),
  },
  {
    id: 3,
    title: '영화 할인 카드',
    benefitBg: '/image/benefitBg--03.mp4',
    keyword: '영화',
    card: benefitSelect('영화'),
  },
  {
    id: 4,
    title: '커피숍 할인 카드',
    benefitBg: '/image/benefitBg--04.mp4',
    keyword: '커피',
    card: benefitSelect('커피'),
  },
  {
    id: 5,
    title: '해외결제 할인 카드',
    benefitBg: '/image/benefitBg--05.mp4',
    keyword: '해외',
    card: benefitSelect('해외'),
  },
  {
    id: 6,
    title: '통신요금 할인 카드',
    benefitBg: '/image/benefitBg--06.mp4',
    keyword: '이동통신',
    card: benefitSelect('이동통신'),
  },
]

export default benefitData
