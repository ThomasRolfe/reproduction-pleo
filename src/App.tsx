import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { Header } from './components/header/Header'

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="hero-container">
          <h1>Control your spending for business success</h1>
          <p>
            Expenses, reimbursements, invoices... Pleo it. Centralise your
            business spending for complete financial efficiency and balance the
            books effortlessly with Europe’s most loved and trusted spend
            management platform.
          </p>
          <div>
            <button>Get Started</button>
            <button>Explore Product</button>
          </div>
        </div>

        <div className="video-container">
          <video></video>
        </div>

        <section>
          <h3>Trusted by 37,000+ customers</h3>
          <div className="customer-carousel"></div>
          <div>
            <div>
              <span>99%</span>
              <p>of users feel secure using Pleo</p>
            </div>

            <div>
              <span>138</span>
              <p>hours saved by admins every year</p>
            </div>

            <div>
              <span>90%</span>
              <p>of users are satisfied with Pleo</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>Seamlessly integrate to the rest of your business</h2>
            <p>
              Connect the tools you use and love to Pleo and simpify your
              workflow.
            </p>
            <button>Learn more</button>
          </div>
          <div>Illustration</div>
        </section>

        <section>
          <div className="integration-carousel"></div>
        </section>
      </main>
    </>
  )
}

export default App
