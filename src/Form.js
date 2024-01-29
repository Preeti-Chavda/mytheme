function Form(){
    return(
        <>
       <div className="form">
            <h2>Login First</h2>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="" placeholder="Password" />
            <button class="btnn"><a href="#">Login</a></button>

            <p class="link">Don't have an account<br />
              <a href="#">Sign up </a> here </p>

            <div class="icons">
              <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="#"><ion-icon name="logo-google"></ion-icon></a>
              <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
            </div>
          </div>

        </>
    )
}export default Form;