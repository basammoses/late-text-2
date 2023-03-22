import { auth, provider } from "../config/Firebase-config"
import { signInWithPopup } from "firebase/auth"

const Auth = () => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
  }

  return (
    <div className='auth'>
      <p> Sign in with google to continue</p>
      <button onClick={signInWithGoogle}>Sign In </button>
    </div>
  )
}

export default Auth
