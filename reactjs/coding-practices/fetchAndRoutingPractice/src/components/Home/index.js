import './index.css'
import BlogList from '../BlogList'

const Home = () => (
  <div>
    <div className="home-container">
      <img
        src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
        alt="profileImg"
        className="profile-img"
      />
      <h1>Wade Warren</h1>
      <p>Software Developer UK</p>
    </div>
    <BlogList />
  </div>
)
export default Home
