import { Link, Route, Switch } from 'wouter'
import Onboarding from './pages/Onboarding'
import OptionsPrepare from './pages/OptionsPrepare'
import BeginUser from './pages/BeginUser'

function App() {
  return (
    <div className="">
      {/* <header className=" flex gap-6 bg-neutral-500 text-sky-300">
        <Link href="/onboarding">On Boarding</Link>
        <Link href="/begin-user">Begin User</Link>
        <Link href="/prepare">Options to prepare</Link>
      </header> */}

      <Switch>
        <Route path="/onboarding" component={Onboarding} />
        <Route path="/begin-user" component={BeginUser} />
        <Route path="/prepare" component={OptionsPrepare} />
        <Route path="/*" component={OptionsPrepare} />

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </div>
  )
}

export default App
