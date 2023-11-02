import { createContext, useContext, useReducer } from 'react'

type TestState = {
  test: string
}

type TestAction = {
  payload?: any
  type: string
}

type Cell = {
  testState: TestState
  testDispatch: React.Dispatch<TestAction>
}

const GeneralContext = createContext<Cell | null>(null)

export const GeneralContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const initialTestState: TestState = {
    test: '',
  }

  const testRedcer = (state: TestState, action: TestAction) => {
    switch (action.type) {
      case 'test':
        return { ...state, test: action.payload }
      default:
        return state
    }
  }
  const [testState, testDispatch] = useReducer(testRedcer, initialTestState)

  return (
    <GeneralContext.Provider value={{ testState, testDispatch }}>
      {children}
    </GeneralContext.Provider>
  )
}

export const UseGeneralContext = () => {
  const context = useContext(GeneralContext)
  if (!context) {
    throw new Error('Context Not Wrapped Reload Page')
  }

  return context
}
