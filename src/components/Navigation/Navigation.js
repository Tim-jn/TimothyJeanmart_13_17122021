import logo from './argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import './Navigation.css'
import { logout } from '../../app/actions/loginActions'

export default function Navigation() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!userInfo?.status ? (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          ''
        )}
        {userInfo?.status ? (
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {userInfo.body.firstName}
          </Link>
        ) : (
          ''
        )}
        {userInfo?.status ? (
          <Link onClick={logoutHandler} className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}
