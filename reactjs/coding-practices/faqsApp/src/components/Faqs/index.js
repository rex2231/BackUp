import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div>
      <h1>FAQs</h1>
      <ul>
        {faqsList.map(eachFaq => (
          <FaqItem key={eachFaq.id} faq={eachFaq} />
        ))}
      </ul>
    </div>
  )
}

export default Faqs
