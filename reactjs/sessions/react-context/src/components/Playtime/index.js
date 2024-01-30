import './index.css'
import LanguageContext from '../../context/LanguageContext'

const playtimeContent = {
  EN: {
    heading: 'Playtime. Anytime',
    description:
      'Windows takes gaming to a whole new level with graphic capabilities that rival reality. Discover your next favorite game with Xbox GamePass, giving you access to over 100 high-quality games.',
  },
  HI: {
    heading: 'विश्राम का समय। किसी भी समय',
    description:
      'विंडोज़ गेमिंग को ग्राफ़िक क्षमताओं के साथ एक नए स्तर पर ले जाता है जो वास्तविकता को टक्कर देता है। एक्सबॉक्स गेम पास के साथ अपना अगला पसंदीदा गेम खोजें, जिससे आपको 100 से अधिक उच्च-गुणवत्ता वाले गेम तक पहुंच मिलती है।',
  },
  TE: {
    heading: 'ఆడూకునే సమయం. ఎప్పుడైనా',
    description:
      'రియాలిటీకి ప్రత్యర్థిగా ఉండే గ్రాఫిక్ సామర్థ్యాలతో విండోస్ గేమింగ్‌ను సరికొత్త స్థాయికి తీసుకువెళుతుంది . మీ తదుపరి ఇష్టమైన ఆటను ఎక్స్‌బాక్స్ గేమ్‌పాస్‌తో కనుగొనండి, మీకు 100 కి పైగా అధిక-నాణ్యత ఆటలకు ప్రాప్యతను ఇస్తుంది.',
  },
  TA: {
    heading: 'விளையாட்டு நேரம். எப்போது வேண்டுமானாலும்',
    description:
      'யதார்த்தத்திற்கு போட்டியாக கிராஃபிக் திறன்களுடன் கேமிங்கை ஒரு புதிய நிலைக்கு விண்டோஸ் எடுத்துச் செல்கிறது. Xbox GamePass மூலம் உங்களுக்குப் பிடித்த அடுத்த விளையாட்டைக் கண்டறியவும், 100 க்கும் மேற்பட்ட உயர்தர கேம்களுக்கான அணுகலை உங்களுக்கு வழங்குகிறது.',
  },
}

const Playtime = () => {
  const getPlaytimeData = activeLanguage => {
    switch (activeLanguage) {
      case 'EN':
        return playtimeContent.EN
      case 'HI':
        return playtimeContent.HI
      case 'TE':
        return playtimeContent.TE
      case 'TA':
        return playtimeContent.TA
      default:
        return null
    }
  }
  return (
    <LanguageContext.Consumer>
      {value => {
        const {activeLanguage} = value
        const {heading, description} = getPlaytimeData(activeLanguage)

        return (
          <div className="playtime-container">
            <h1 className="playtime-heading">{heading}</h1>
            <div className="playtime-description-container">
              <p className="playtime-description">{description}</p>
              <img
                className="playtime-games-image"
                src="https://assets.ccbp.in/frontend/react-js/gaming-pad-img.png"
                alt="gaming pad"
              />
            </div>
          </div>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default Playtime
