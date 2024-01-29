import Form from './Form';
import Menu from './Menu';
function Home(){
    return(
        <>
        <div class="main">
        <div class="navbar">
          <Menu />
        </div>
        <div class="content">
          <h1>Web Design & <br /><span>Development</span> <br />Course</h1>
          <p class="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
            expedita atque eveniet <br /> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus
            <br /> a quae totam ipsa illum minus laudantium?</p>

          <button class="cn"><a href="#">JOIN US</a></button>

          <Form />

        </div>
      </div>

        </>
    )
}export default Home;