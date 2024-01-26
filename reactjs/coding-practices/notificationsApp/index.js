const Notification = (props) => {
  const { textContent, imgSrc, className } = props;
  return (
    <div className={className}>
      <img src=`{${imgSrc}}`/>>
      <p>{textContent}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="notifications-heading">Notifications</h1>
    <div className="notifications-container">
      <Notification textContent="Information Message" imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" className="note-1"/>
      <Notification textContent="Success Message" imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" className="note-2"/> 
      <Notification textContent="Warning Message" imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" className="note-3"/>  
      <Notification textContent="Danger Message" imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" className="note-4"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
