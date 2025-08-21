// import { useState } from 'react'
<<<<<<< HEAD
// import {InputBox} from './components'
// import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './App.css'

// function App() {
//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] =useState("usd")
//   const [to, setTo] = useState("inr")
//   const [convertedAmount, setConveretedAmount] = useState(0)

//   const CurrencyInfo =useCurrencyInfo(from)

//   const options = Object.keys(CurrencyInfo)

//   const swap=() => {
//     setFrom(to)
//     setTo(from)
//     setConveretedAmount(amount)
//     setAmount(convertedAmount)
  
  
  
//   const convert = ()=> {
//   setConveretedAmount(amount * CurrencyInfo[to])
// }


//   }

//   return (
//     <>
//       <h1 className='bg-red-500 text-color-black'>Ram Krshna Hari</h1>
=======
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './components/Header/Header'
// import Footer from  './components/Footer/Footer'
// import Home from './components/Home/Home'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

>>>>>>> d21db164251283cbf9a12ded290353257fbebeb9
//     </>
//   )
// }

// export default App


<<<<<<< HEAD
import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"

import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  // Swap currencies
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  // Convert
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 bg-white shadow-lg">
        <h1 className="text-xl font-bold text-center mb-4 text-gray-700">
          Currency Converter
        </h1>

        {/* Input Box 1 */}
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(val) => setAmount(val)}
        />

        <div className="flex justify-center my-4">
          <button
            onClick={swap}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Swap
          </button>
        </div>

        {/* Input Box 2 */}
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisabled
        />

        <div className="mt-4">
          <button
            onClick={convert}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
=======
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Layout from "./Layout"
// import Home from "./components/Home"
// import About from "./components/About"
// import Contact from "./components/Contact"
// import User from "./components/User"
// import Github from "./components/Github"

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="user/:userid" element={<User />} />
//           <Route path="github" element={<Github />} />   {/* ✅ Github route */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
>>>>>>> d21db164251283cbf9a12ded290353257fbebeb9
