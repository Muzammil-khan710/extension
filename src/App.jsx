import './App.css'

const App = () => {

  return (
    <div className="login-form">
      <form className='form'>
        <label htmlFor="email" className='label'>
          Email
          <input type='text' id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type='password' id="password" className='label'/>
          </label>
          <input type="submit" value="Submit" className='submit-btn s-center'   />
      </form>
      <div>Or</div>

      <div>
        <button className='submit-btn'>Continue with google</button>
      </div>
    </div>
  )
}

export default App