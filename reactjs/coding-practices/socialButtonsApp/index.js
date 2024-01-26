const Button = (props) => {
    {content, className} = props;
  return <button className={`button ${className}`}>{content}</button>;
}

const element = (
  <div className="bg-container">
    <div>
      <h1 className="main-heading">Social Buttons</h1>
    <div className = "buttons-container">
      <Button className="like-button" content="Like" />
      <Button className="comment-button" content="Comment" />
      <Button className="share-button" content="Share" />
    </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
