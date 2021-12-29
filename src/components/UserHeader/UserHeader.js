import './UserHeader.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../../app/actions/userActions'
import { useNavigate } from 'react-router'

export default function UserHeader() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.userLogin)

  const userUpdate = useSelector((state) => state.userUpdate)
  const { error, success } = userUpdate

  console.log(userInfo.body.token)
  console.log(userInfo.body.firstName)
  useEffect(() => {
    setFirstname(userInfo.body.firstName)
    setLastname(userInfo.body.lastName)
  }, [userInfo, navigate])

  const [editButton, setEditButton] = useState('')

  const editNameButton = (e) => {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProfile({ firstname, lastname }))
    // if (success) {
    //   setEditButton((current) => !current)
    // }
  }

  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstname + ' ' + lastname} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="editNameInputs">
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={editNameButton}>
                Cancel
              </button>
            </div>
            {error && (
              <div>
                <br />
                Error
              </div>
            )}
            {success && (
              <div>
                <br />
                Updated successfully.
              </div>
            )}
          </form>
        </div>
      )}
    </>
  )
}
