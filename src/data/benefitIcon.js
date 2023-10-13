const benefitIcon = (benefitKey) => {
  switch (benefitKey) {
    case '커피':
      return <span className="material-symbols-outlined">local_cafe</span>
    case '모바일':
      return <span className="material-symbols-outlined">vibration</span>
    case '문화':
      return <span class="material-symbols-outlined">domino_mask</span>
    case '뷰티':
      return <span className="material-symbols-outlined">self_care</span>
    case '편의점':
      return <span class="material-symbols-outlined">local_convenience_store</span>
    case '구독':
      return <span class="material-symbols-outlined">youtube_activity</span>
    case '배달':
      return <span class="material-symbols-outlined">fastfood</span>
    case '이동통신':
      return <span class="material-symbols-outlined">phone_in_talk</span>
    case '영화':
      return <span class="material-symbols-outlined">movie</span>
    case '놀이공원':
      return <span class="material-symbols-outlined">attractions</span>
    case '기타':
      return <span class="material-symbols-outlined">other_admission</span>
    case '해외':
      return <span class="material-symbols-outlined">public</span>
    case '대중교통':
      return <span class="material-symbols-outlined">directions_bus</span>
    case '서점':
      return <span class="material-symbols-outlined">menu_book</span>
    case '금융':
      return <span class="material-symbols-outlined">paid</span>
    case '의류':
      return <span class="material-symbols-outlined">checkroom</span>
    case '베이커리':
      return <span class="material-symbols-outlined">bakery_dining</span>
    case '슈퍼마켓':
      return <span class="material-symbols-outlined">storefront</span>
    case '쇼핑':
      return <span class="material-symbols-outlined">shopping_cart</span>
    case '포인트':
      return <span class="material-symbols-outlined">savings</span>
    case '어학':
      return <span class="material-symbols-outlined">translate</span>
    case '여행':
      return <span class="material-symbols-outlined">luggage</span>
    case '주유':
      return <span class="material-symbols-outlined">local_gas_station</span>
    case '외식':
      return <span class="material-symbols-outlined">restaurant</span>
    default:
      return <span className="material-symbols-outlined">local_cafe</span>
  }
}

export default benefitIcon
