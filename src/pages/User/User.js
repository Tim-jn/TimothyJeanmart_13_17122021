import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import Account from '../../features/Account/Account'
import UserHeader from '../../features/UserHeader/UserHeader'
import './User.css'

export default function User() {
  return (
    <>
      <Navigation />
      <div>
        <a class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <a class="main-nav-item" href="./index.html">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
      <main className="main bg-dark">
        <UserHeader userName="Tony Jarvis" />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  )
}
