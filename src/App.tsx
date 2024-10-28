//import { useEffect } from 'react'
import { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'
import { useStore } from './store/AppStore'
import Loading from './Loading'

const Onboarding = lazy(() => import('./pages/Onboarding'))
const OptionsPrepare = lazy(() => import('./pages/OptionsPrepare'))
const BeginUser = lazy(() => import('./pages/BeginUser'))
const OptionsMeal = lazy(() => import('./pages/OptionsMeal'))
const OptionsDessert = lazy(() => import('./pages/OptionsDessert'))
const OptionsDrinks = lazy(() => import('./pages/OptionsDrinks'))
const Recipes = lazy(() => import('./pages/Recipes'))

function App() {
  const userName = useStore((state) => state.userName)

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/onboarding" component={Onboarding} />
        <Route path="/begin-user" component={BeginUser} />
        <Route path="/prepare" component={OptionsPrepare} />
        <Route path="/lunch" component={OptionsMeal} />
        <Route path="/dinner" component={OptionsMeal} />
        <Route path="/dessert" component={OptionsDessert} />
        <Route path="/drinks" component={OptionsDrinks} />
        <Route path="/recipes" component={Recipes} />

        <Route
          path="/*"
          component={userName !== '' ? OptionsPrepare : Onboarding}
        />

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </Suspense>
  )
}

export default App
