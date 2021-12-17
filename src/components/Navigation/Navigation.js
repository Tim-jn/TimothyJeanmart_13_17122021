import logo from './argentBankLogo.png'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="/">
        <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="/sign-in">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  )
}
