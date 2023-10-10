const pointIcon = (pointKey) => {
  switch (pointKey) {
    case '생활':
      return <span className="material-symbols-outlined">account_balance_wallet</span>
    case '교통':
      return <span className="material-symbols-outlined">train</span>
    case '여행':
      return <span className="material-symbols-outlined">airplane_ticket</span>
    case '결제':
      return <span className="material-symbols-outlined">credit_score</span>
    case '쇼핑':
      return <span className="material-symbols-outlined">shopping_bag</span>
    default:
      return <span className="material-symbols-outlined">account_balance_wallet</span>
  }
}

export default pointIcon
