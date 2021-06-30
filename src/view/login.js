const name: 'Nombre'

export default () => {
    const viewLogin = `<section>
      <div class="logo">
      <img src="img/logoMarca.png" id='logo' alt="" height="80px" width="80px">
      </div>
      <div id='fotmLogin'
      <div class="Login">
      <label for="staticEmail" class="loginLabel">Email</label>
      <div class="inputLogin">
        <input type="email"  class="emailLogin" id="loginEmail" placeholder="email@example.com">
      </div>
    </div>
    <div class="Login">
      <label for="inputPassword" class="loginLabel">Password</label>
      <div class="inputLogin">
        <input type="password" class="inputPassword" id="passwordLogin">
      </div>
    </div>
    <div class="buttonLogin">
      <button type="submit" id="submitLogin" class="btn">Enter</button>
    </div>
    <div>
    <a href= "#/SignIn" >You do not have an account? Sign up!</a>
    </div>
   </div>
    </section>`;
  
    const divElem = document.createElement('div');
    divElem.innerHTML = viewLogin;
  